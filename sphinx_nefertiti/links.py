import logging
import re

from sphinx.errors import ConfigError

logger = logging.getLogger()


RED_HL = "\033[31m"
BLUE_HL = "\033[34m"
END_HL = "\033[0m"


def hl(chunk):
    return f"{BLUE_HL}{chunk}{END_HL}"


class HeaderLinksException(Exception):
    def __init__(self, message):
        message = self.format(message)
        message = f"{RED_HL}sphinx-nefertiti{END_HL}: {message}"
        super().__init__(message)

    def format(self, message):
        m = re.sub(
            r'hl\((?P<identifier>\w+)\)',
            rf'{BLUE_HL}\g<identifier>{END_HL}',
            message
        )
        print("reformatted:", repr(m))
        return m


class HeaderLinksProvider:
    def __init__(self, app):
        self.app = app
        theme_options = app.config.html_theme_options
        self.raw_header_links = theme_options.get("header_links", [])

        self._index = -1
        self._links = []
        self._validate()

    def _validate(self):
        urls = set()

        for item in self.raw_header_links:
            if 'dropdown' in item:
                if not isinstance(item['dropdown'], (list, tuple)):
                    raise HeaderLinksException(
                        f"Option hl(header_links) in hl(html_theme_options) "
                        f"contains an item hl(dropdown) that is not a list "
                        "nor a tuple."
                    )
                for dd_item in item['dropdown']:
                    if (
                        not ('text' in dd_item and 'link' in dd_item)
                        and not 'divider' in dd_item
                    ):
                        raise HeaderLinksException(
                            "Dropdown items in the hl(header_links) option, "
                            "in hl(html_theme_options), must contain a "
                            "hl(text) and a hl(link) keys, or a hl(divider) "
                            f"key:\n\t{dd_item}"
                        )
                    if 'divider' in dd_item:
                        continue
                    if not isinstance(dd_item['link'], str):
                        raise HeaderLinksException(
                            "A dropdown item in the 'header_links' option, "
                            "in the 'html_theme_option', has a non-string "
                            f"'link': {dd_item}"
                        )
                    if not isinstance(dd_item['text'], str):
                        raise HeaderLinksException(
                            "A dropdown item in the 'header_links' option, "
                            "in the 'html_theme_option', has a non-string "
                            f"'name': {dd_item}"
                        )
                    if dd_item['link'] in urls:
                        raise HeaderLinksException(
                            f"Link {dd_item['link']} appears more than once "
                            "in the option 'header_links' in the "
                            "'html_theme_options'."
                        )
                    urls.add(dd_item['link'])

            elif (
                not ('text' in item and 'link' in item)
                and not ('text' in item and 'dropdown' in item)
            ):
                raise HeaderLinksException(
                    "Items in the 'header_links' option, in the "
                    "'html_theme_options', must contain a 'text' and a "
                    f"'link' keys or a 'text' and a 'dropdown' keys: {item}"
                )
            else:
                urls.add(item['link'])


    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._links):
            raise StopIteration
        return self._links[self._index]
