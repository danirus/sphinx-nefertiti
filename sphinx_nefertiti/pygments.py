from pathlib import Path

from pygments.util import ClassNotFound
from sphinx.highlighting import PygmentsBridge

from sphinx_nefertiti.exceptions import SphinxNefertitiError

# To keep the name used in the Sphinx sources.
pygments_options = [
    ("pygments_dark_style", "pygments-dark.css", ".dark"),
    ("pygments_light_style", "pygments-light.css", ".light"),
]


class PygmentsAsset:
    def __init__(self, style_name, output_file_name, selector, app):
        self.app = app
        self.style_name = style_name
        self.output_file_name = output_file_name
        self.prepend_selector = selector
        self.pygments = PygmentsBridge("html", self.style_name)

    def get_stylesheet(self):
        new_content = []
        pre_content = self.pygments.get_stylesheet().split("\n")
        for line in pre_content:
            pos = line.index("{")
            sel, rest = (line[0:pos]).strip(), line[pos:]
            # Fix: background applied to pre, instead of only .highlight.
            #      This is possibly due to having right aligned sidebars
            #      floating next to code blocks. In such case we want the
            #      background applied to the pre element instead of the
            #      .highlight. See: https://sphinx-themes.org/sample-sites/sphinx-nefertiti/kitchen-sink/generic/#code-with-sidebar
            if sel == ".highlight":
                sel = ".highlight pre"
            new_line = f"{self.prepend_selector} {sel} {rest}"
            new_content.append(new_line)
        return "\n".join(new_content)

    def create_pygments_style_file(self, outdir: str):
        # dest_file = Path(outdir) / "_static" / self.output_file_name
        dest_file = (
            Path(self.app.builder.outdir) / "_static" / self.output_file_name
        )
        with dest_file.open("w", encoding="utf-8") as f:
            f.write(self.get_stylesheet())
        return dest_file


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
        theme_prefs = app.config.html_theme_options
        self._index = -1
        self._assets = []

        for opt, filename, css in pygments_options:
            asset = None

            if opt in theme_prefs and len(theme_prefs[opt]):
                style_name = theme_prefs[opt]
            elif opt in theme_defaults and len(theme_defaults[opt]):
                style_name = theme_defaults[opt]
            elif getattr(app.config, opt, False):  # pragma: no cover
                style_name = getattr(app.config, opt)

            if style_name:
                try:
                    asset = PygmentsAsset(style_name, filename, css, app)
                except ClassNotFound as exc:
                    raise SphinxNefertitiError(
                        f"Failed to find Pygments style '{style_name}' "
                        f"for theme option '{opt}'."
                    ) from exc

            if asset:
                self._assets.append(asset)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._assets):
            raise StopIteration
        return self._assets[self._index]
