from pathlib import Path

from sphinx.highlighting import PygmentsBridge


# To keep the name used in the Sphinx sources.
pygments_options = [
    ("pygments_style", "pygments.css", ".light"),
    ("pygments_dark_style", "pygments_dark.css", ".dark"),
]


class PygmentsAsset:
    def __init__(self, style_name, output_file_name, selector):
        self.style_name = style_name
        self.output_file_name = output_file_name
        self.prepend_selector = selector
        self.pygments = PygmentsBridge("html", self.style_name)

    @property
    def is_default_pygments_file(self):
        return self.output_file_name == "pygments.css"

    @property
    def link_stylesheet(self):
        return self.output_file_name

    def get_stylesheet(self):
        new_content = []
        pre_content = self.pygments.get_stylesheet().split("\n")
        for line in pre_content:
            try:
                pos = line.index("{")
                sel, rest = (line[0:pos]).strip(), line[pos:]
                # Fix: background applied to pre, instead of only .highlight.
                #      This is due to possibly having right aligned sidebars
                #      floating next to code blocks. In such case we want the
                #      background applied to the pre element instead of the
                #      .highlight. See: https://sphinx-themes.org/sample-sites/sphinx-nefertiti/kitchen-sink/generic/#code-with-sidebar
                if sel == ".highlight":
                    sel = ".highlight pre"
                new_line = f"{self.prepend_selector} {sel} {rest}"
                new_content.append(new_line)
            except ValueError:
                new_content.append(line)
        return "\n".join(new_content)

    def create_pygments_style_file(self, outdir: str):
        dest_dir = Path(outdir) / "_static" / self.output_file_name
        with open(dest_dir, "w", encoding="utf-8") as f:
            f.write(self.get_stylesheet())


# Sphinx provides support for dark and light color schemes. However
# it doesn't allow to change between them by associating the schemes
# with a CSS class. So they only get applied by reading the
# 'prefers-color-scheme' media query.
#
# Sphinx-nefertiti allows users to switch between color schemes, by
# applying CSS classes that override the preferred color scheme.
#
# This Python class wraps the styles with those CSS classes.


class PygmentsProvider:
    def __init__(self, app):
        theme_defaults = app.builder.theme.get_options()
        theme_user_prefs = app.config.html_theme_options

        self._index = -1
        self._assets = []

        for opt, filename, css in pygments_options:
            asset = None

            if opt in theme_user_prefs and len(theme_user_prefs[opt]):
                asset = PygmentsAsset(theme_user_prefs[opt], filename, css)
            elif opt in theme_defaults and len(theme_defaults[opt]):
                asset = PygmentsAsset(theme_defaults[opt], filename, css)
            elif getattr(app.config, opt, False):
                style_name = getattr(app.config, opt)
                asset = PygmentsAsset(style_name, filename, css)

            if asset:
                self._assets.append(asset)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._assets):
            raise StopIteration
        return self._assets[self._index]
