import shutil
from pathlib import Path

from sphinx.locale import _

from .exceptions import SphinxNefertitiError

colorsets_rel_path = Path("colorsets")
colorsets_abs_path = Path(__file__).parent / "colorsets"
static_abs_path = Path(__file__).parent / "static"


all_colorsets = [
    "blue",
    "indigo",
    "purple",
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "default",  # cyan.
]

# Just for i18n purposes:
color_names = [
    _("blue"),
    _("indigo"),
    _("purple"),
    _("pink"),
    _("red"),
    _("orange"),
    _("yellow"),
    _("green"),
    _("teal"),
    _("cyan"),
]

# Values to share in layout.html <meta name="theme-color" content="">.
# Values for primary, light-neutral, dark-neutral, for every color theme.
theme_colors = {
    "blue": {
        "primary": "#0D6EFD",
        "light-neutral": "#CFE2FF",
        "dark-neutral": "#031633",
    },
    "indigo": {
        "primary": "#6610f2",
        "light-neutral": "#E0CFFC",
        "dark-neutral": "#140330",
    },
    "purple": {
        "primary": "#6F42C1",
        "light-neutral": "#E2D9F3",
        "dark-neutral": "#160D27",
    },
    "pink": {
        "primary": "#D63384",
        "light-neutral": "#F7D6E6",
        "dark-neutral": "#2B0A1A",
    },
    "red": {
        "primary": "#DC3545",
        "light-neutral": "#F8D7DA",
        "dark-neutral": "#2C0B0E",
    },
    "orange": {
        "primary": "#FD7E14",
        "light-neutral": "#FFE5D0",
        "dark-neutral": "#330F04",
    },
    "yellow": {
        "primary": "#FFC107",
        "light-neutral": "#FFF3CD",
        "dark-neutral": "#332701",
    },
    "green": {
        "primary": "#078349",
        "light-neutral": "#CDE6DB",
        "dark-neutral": "#011A0F",
    },
    "teal": {
        "primary": "#20C997",
        "light-neutral": "#D2F4EA",
        "dark-neutral": "#06281E",
    },
    "default": {
        "primary": "#0DCAF0",
        "light-neutral": "#CFF4FC",
        "dark-neutral": "#032830",
    },
}


class ColorSet:
    def __init__(self, name, app):
        self.app = app
        _name = name.lower()
        if _name not in all_colorsets:
            raise SphinxNefertitiError(
                f"Style 'hl({name})' is not known as a color set."
            )
        self._name = _name
        self.theme_colors = theme_colors[self._name]

    @property
    def link_stylesheet(self):
        return f"sphinx-nefertiti-{self._name}.min.css"

    def copy_to_static(self):
        dest_dir = Path(self.app.builder.outdir) / "_static"

        for ext in ["", ".map"]:
            filename = f"sphinx-nefertiti-{self._name}.min.css{ext}"
            src_path = colorsets_abs_path / filename
            dest_path = dest_dir / filename
            shutil.copyfile(src_path, dest_path)


class ColorsetProvider:
    def __init__(self, app):
        self.app = app
        self.theme_defaults = app.builder.theme.get_options()
        self.theme_custom = app.config.html_theme_options

        self._index = -1
        self._csets = []
        self.colorset = None
        self.multiple = self.theme_custom.get("show_colorset_choices", False)
        self.default = self.theme_defaults.get("style", None)
        self.selected = self.theme_custom.get("style", self.default)
        if self.selected:
            self.colorset = ColorSet(self.selected, app)
            if self.multiple:
                for choice in all_colorsets:
                    self._csets.append(ColorSet(choice, app))
            else:
                self._csets.append(self.colorset)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._csets):
            raise StopIteration
        return self._csets[self._index]
