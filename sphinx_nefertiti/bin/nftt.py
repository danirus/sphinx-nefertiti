"""
The nftt command line tool - display theme configuration.
"""

import argparse
import collections.abc
import importlib
import sys
from pathlib import Path

CMD_DIR = Path.cwd()


def show_locales(conf_path: Path):
    sys.path.insert(0, str(conf_path.parent))
    _conf = importlib.import_module(conf_path.stem)

    if (
        not hasattr(_conf, "html_theme_options")
        or "locales" not in _conf.html_theme_options
    ):
        print("")  # No locales.
        return 0

    if not isinstance(
        _conf.html_theme_options["locales"], collections.abc.Sequence
    ):
        print(
            "Item html_theme_options['locales'] in your "
            f"{conf_path.name} must be a sequence."
        )
        return 1

    if not hasattr(_conf, "language"):
        print(f"Add a 'language' to your {conf_path.name}.")
        return 1

    theme__locales = [
        locale
        for locale in _conf.html_theme_options["locales"]
        if locale != _conf.language
    ]
    print(" ".join(theme__locales))
    return 0


def run():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "-c",
        "--conf",
        dest="conf_path",
        help="Path to the conf.py of the Sphinx project.",
    )
    parser.add_argument(
        "locales",
        nargs="?",
        help="Show locales declared in html_theme_options['locales']",
    )

    args = parser.parse_args()

    conf_path = args.conf_path
    if not conf_path and (CMD_DIR / "conf.py").exists():
        conf_path = CMD_DIR / "conf.py"
    else:
        conf_path = Path(conf_path) if Path(conf_path).exists() else None

    if not conf_path:
        print("Couldn't find 'conf.py' file. Please, use -c <path_to/conf.py>")
        return 1

    conf_path = conf_path.resolve()

    if args.locales:
        return show_locales(conf_path)

    parser.print_help()
    return 0


if __name__ == "__main__":
    sys.exit(run())
