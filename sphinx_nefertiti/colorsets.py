import os
from pathlib import Path
import shutil


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
    "default",
]


class ColorSetNotSupportedException(Exception):
    pass


class ColorSet:
    def __init__(self, name):
        _name = name.lower()
        if _name not in all_colorsets:
            raise ColorSetNotSupportedException(
                f"Style '{name}' is not known as a color set."
            )
        self._name = _name

    @property
    def name(self):
        if self._name == "default":
            return f"sphinx-nefertiti.min.css"
        else:
            return f"sphinx-nefertiti-{self._name}.min.css"

    @property
    def link_stylesheet(self):
        return str(colorsets_rel_path / self.name)

    def copy_to_static(self, outdir: str, is_map_file=False):
        ext = ".map" if is_map_file else ""
        filename = f"{self.name}{ext}"
        src_path = colorsets_abs_path / filename
        dest_dir = Path(outdir) / "_static" / "colorsets"
        dest_path = dest_dir / filename
        if not dest_dir.exists():
            os.mkdir(dest_dir)
        shutil.copyfile(src_path, dest_path)


class ColorsetProvider:
    def __init__(self, app):
        self.app = app
        self.theme_defaults = app.builder.theme.get_options()
        self.theme_custom = app.config.html_theme_options

        self._index = -1
        self._csets = []
        self.multiple = self.theme_custom.get("show_colorset_choices", False)
        self.default = self.theme_defaults["style"]
        self.selected = self.theme_custom.get("style", self.default)
        self.colorset = ColorSet(self.selected)

        if self.multiple:
            for choice in all_colorsets:
                self._csets.append(ColorSet(choice))
        else:
            self._csets.append(self.colorset)

    def __iter__(self):
        return self

    def __next__(self):
        self._index += 1
        if self._index >= len(self._csets):
            raise StopIteration
        return self._csets[self._index]
