import logging

from sphinx.locale import _TranslationProxy

from .exceptions import SphinxNefertitiError

logger = logging.getLogger()


class HeaderLinksProvider:
    def __init__(self, app):
        self.app = app
        theme_options = app.config.html_theme_options
        self.header_links = theme_options.get("header_links", [])

        self._index = -1
        self._links = []
        self._hlid = 0  # To put an ID for each item in the template.
        self._regexps = set()  # To check regular expression duplicity.
        self._urls = set()  # To check whether URL duplicity.
        self._validate()  # Validate user provided input (conf.py).

    def _validate_match(self, item: dict):
        """Validate entry ``match`` in ``item``. Check it is not repeated."""
        entry = item["match"]
        if not isinstance(entry, (list, tuple, str)):
            raise SphinxNefertitiError(
                "Option 'header_links' in 'html_theme_options' "
                f"contains an item 'match' that is neither a list, "
                f"a tuple or a string:\n\t{item}\n"
            )
        entry = [entry] if isinstance(entry, str) else entry
        for regexp in entry:
            if regexp in self._regexps:
                raise SphinxNefertitiError(
                    f"The regexp '{regexp}' appears more than once "
                    "in the option 'header_links' in the "
                    "'html_theme_options'.\n"
                )
            self._regexps.add(regexp)
        item["match"] = entry  # To be sure it is a list in the template.

    def _validate_dropdown(self, dropdown_elem: tuple):
        """
        Validate the items given for a dropdown element.

        Dropdown items can be of 2 types:
        1. A dict with ``text`` and ``link`` keys (optional ``reg_exps``), or
        2. A dict with a ``divider`` key.
        """
        if "match" in dropdown_elem:
            self._validate_match(dropdown_elem)
            self._hlid += 1
            dropdown_elem["hlid"] = self._hlid

        for dd_item in dropdown_elem["dropdown"]:
            # If the dd_item is not a divider and not a normal item, raise.
            if (
                not ("text" in dd_item and "link" in dd_item)
                and "divider" not in dd_item
            ):
                raise SphinxNefertitiError(
                    "Dropdown items in the 'header_links' option, "
                    "in 'html_theme_options', must contain a "
                    "'text' and a 'link' keys, or a 'divider' "
                    f"key:\n\t{dd_item}\n"
                )

            if "divider" in dd_item:
                if dd_item["divider"] is False:
                    raise SphinxNefertitiError(
                        "Dropdown in the 'header_links' option"
                        " contains a 'divider' entry with a False "
                        "value. Either remove it or make it "
                        f"True:\n\t{dd_item}\n"
                    )
                continue

            if not isinstance(dd_item["link"], str):
                raise SphinxNefertitiError(
                    "A dropdown item in the 'header_links' option, "
                    "in the 'html_theme_options', has a non-string "
                    f"'link':\n\t{dd_item}\n"
                )
            if not isinstance(dd_item["text"], (str, _TranslationProxy)):
                raise SphinxNefertitiError(
                    "A dropdown item in the 'header_links' option, "
                    "in the 'html_theme_options', has a non-string "
                    f"'text':\n\t{dd_item}\n"
                )

            if dd_item["link"] in self._urls:
                raise SphinxNefertitiError(
                    f"URL '{dd_item['link']}' appears more than once "
                    "in the option 'header_links' in the 'html_theme_options'"
                    f":\n\t{dd_item}\n"
                )

            if "match" in dd_item:
                self._validate_match(dd_item)

            self._urls.add(dd_item["link"])
            self._hlid += 1
            dd_item["hlid"] = self._hlid
            if "://" in dd_item["link"]:
                dd_item["resource"] = True
            else:
                dd_item["resource"] = False
        self._links.append(dropdown_elem)

    def _validate(self):
        """Validate entries in the ``header_links`` option in ``conf.py``."""
        for item in self.header_links:
            # VALIDATE that dropdown has a "text" attribute.
            if "dropdown" in item:
                if not isinstance(item["dropdown"], (list, tuple)):
                    raise SphinxNefertitiError(
                        "Option 'header_links' in 'html_theme_options' "
                        "contains an item 'dropdown' that is not a list "
                        "nor a tuple.\n"
                    )
                if "text" not in item:
                    raise SphinxNefertitiError(
                        "Option 'header_links' in 'html_theme_options' "
                        "contains an item 'dropdown' that has no 'text':"
                        f"\n\t{item}\n"
                    )

                self._validate_dropdown(item)
                continue

            if "text" not in item or "link" not in item:
                raise SphinxNefertitiError(
                    "Items in the 'header_links' option, in the "
                    "'html_theme_options', must contain a 'text' and a "
                    "'link' keys or a 'text' and a 'dropdown' "
                    f"keys:\n\t{item}\n"
                )

            if item["link"] in self._urls:
                raise SphinxNefertitiError(
                    f"URL '{item['link']}' appears more than once "
                    "in the option 'header_links' in the "
                    "'html_theme_options'.\n"
                )

            if "match" in item:
                self._validate_match(item)

            self._urls.add(item["link"])
            self._hlid += 1
            item["hlid"] = self._hlid
            if "://" in item["link"]:
                item["resource"] = True
            else:
                item["resource"] = False
            self._links.append(item)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._links):
            raise StopIteration
        return self._links[self._index]


# ---------------------------------------------------------------------
class FooterLinksProvider:
    def __init__(self, app):
        self.app = app
        theme_options = app.config.html_theme_options
        self.footer_links = theme_options.get("footer_links", [])

        self._index = -1
        self._links = []
        self._urls = set()  # To check whether URL duplicity.
        self._validate()  # Validate user provided input (conf.py).

    def _validate(self):
        """Validate entries in the ``footer_links`` option in ``conf.py``."""
        if not isinstance(self.footer_links, list):
            raise SphinxNefertitiError(
                "The 'footer_links' option, in the 'html_theme_options', "
                "must be a list of dictionaries, however it is a "
                f"{self.footer_links.__class__.__name__}:"
                f"\n\t{self.footer_links}\n"
            )

        for item in self.footer_links:
            if not isinstance(item, dict):
                raise SphinxNefertitiError(
                    "Items 'footer_links' option, in the "
                    "'html_theme_options', must be dictionaries, "
                    f"however it is a {item.__class__.__name__}:"
                    f"\n\t{item}\n"
                )

            if "text" not in item or "link" not in item:
                raise SphinxNefertitiError(
                    "Items in the 'footer_links' option, in the "
                    "'html_theme_options', must contain a 'text' "
                    f"and a 'link' keys:\n\t{item}\n"
                )

            if item["link"] in self._urls:
                raise SphinxNefertitiError(
                    f"URL '{item['link']}' appears more than once "
                    "in the option 'footer_links' in the "
                    "'html_theme_options'.\n"
                )

            self._urls.add(item["link"])
            if "://" in item["link"]:
                item["resource"] = True
            else:
                item["resource"] = False
            self._links.append(item)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._links):
            raise StopIteration
        return self._links[self._index]
