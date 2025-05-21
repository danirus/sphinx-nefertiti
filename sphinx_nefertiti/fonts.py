import shutil
from pathlib import Path

from sphinx_nefertiti.exceptions import SphinxNefertitiError

default_text_font = "Verdana"
default_monospace_font = "Monaco"


fonts_path = Path(__file__).parent / "fonts"


font_options = [
    "sans_serif_font",
    "monospace_font",
    # Used for the project name in the header and in the footer.
    # If not given 'sans_serif_font' will be used.
    "project_name_font",
    # Font used to render the text given in the 'rst' files. If not given
    # the 'sans_serif_font' will be used.
    "documentation_font",
    # Font used to render the headers given in the 'rst' files. If not given
    # then 'documentation_font' will be used, or otherwise 'sans_serif_font'.
    "doc_headers_font",
]


web_safe_fonts = [
    "helvetica",
    "arial",
    "arial black",
    "verdana",
    "tahoma",
    "trebuchet ms",
    "impact",
    "gill sans",
    "times new roman",
    "georgia",
    "palatino",
    "baskerville",
    "andale mono",
    "courier",
    "lucida",
    "monaco",
    "bradley hand",
    "brush script mt",
    "luminari",
    "comic sans ms",
]


extra_fonts = [
    "assistant",  # Adobe Systems Inc., Ben Nathan.
    "exo",  # Natanael Hama, Robin Mientjes.
    "montserrat",  # Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly.
    "mulish",  # Vernon Adams, Cyreal, Jacques Le Bailly.
    "nunito",  # Vernon Adams, Cyreal, Jacques Le Bailly.
    "open sans",  # Steve Matteson.
    "red hat display",  # MCKL.
    "sofia sans",  # Lettersoup, Botio Nikoltchev, Ani Petrova.
    "ubuntu sans",  # Dalton Maag.
    "varta",  # Joana Correia, Viktoriya Grabowska, Eben Sorkin.
    "work sans",  # Wei Huang.
    # Monospace fonts.
    "fira code",  # The Mozilla Foundation, Telefonica SA, Nikita Prokopov.
    "red hat mono",  # MCKL.
    "ubuntu sans mono",  # Dalton Maag.
]


class Font:
    def __init__(self, name, app):
        self.app = app
        _name = name.lower()
        self._name = _name
        self._slug = self._name.replace(" ", "-")
        self.src_font_path = self.get_source_font_path()

        if (
            _name not in web_safe_fonts
            and _name not in extra_fonts
            and not self.src_font_path
        ):
            raise SphinxNefertitiError(
                f"Font '{_name}' could not be found."
                f"\n Available fonts: {', '.join(extra_fonts)}. "
                f"\n Web safe fonts: {', '.join(web_safe_fonts)}."
            )

    def get_source_font_path(self):
        # Check in Nefertiti's own fonts directory.
        for path in fonts_path.iterdir():
            if path.is_dir() and path.parts[-1] == self._slug:
                stylesheet_css = path / "stylesheet.css"
                if stylesheet_css.exists():
                    return fonts_path / path

        # Check in static project's directory (listed in 'html_static_path').
        for dir in self.app.config.html_static_path:
            src_font_path = Path(self.app.srcdir) / dir / "fonts" / self._slug
            if (src_font_path / "stylesheet.css").exists():
                return src_font_path

        return None

    @property
    def link_stylesheet(self):
        if self._name in web_safe_fonts:
            return None
        return str(Path("fonts") / self._slug / "stylesheet.css")

    def copy_to_static(self):
        dest_font_path = self.app.outdir / "_static" / "fonts" / self._slug
        if not dest_font_path.exists():
            shutil.copytree(self.src_font_path, dest_font_path)


class FontProvider:
    def __init__(self, app):
        self.app = app
        self.theme_defaults = app.builder.theme.get_options()
        self.theme_customized = app.config.html_theme_options

        self._index = -1
        self._fonts = []

        for option in font_options:
            if len(self.theme_customized.get(option, "")) > 0:
                font = Font(self.theme_customized[option], app)
                if font.link_stylesheet:
                    self._fonts.append(font)
            elif len(self.theme_defaults.get(option, "")):
                font = Font(self.theme_defaults[option], app)
                if font.link_stylesheet:
                    self._fonts.append(font)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._fonts):
            raise StopIteration
        return self._fonts[self._index]
