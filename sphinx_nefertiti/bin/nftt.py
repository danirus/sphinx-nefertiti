"""
The nftt command line tool - display theme configuration.
"""

import argparse
import collections.abc
import sys
from pathlib import Path

from babel import Locale
from sphinx.config import Config

CMD_DIR = Path.cwd()


class NfttCmdError(Exception):
    pass


class Nftt:
    def __init__(self, conf_path: Path):
        self.conf_path = conf_path.resolve()
        self.config = Config.read(conf_path.parent.resolve())
        self.config.add("html_theme_options", {}, "html", types=())

    def do(self, args):
        if args.show_locales:
            return self.show_locales()
        elif args.show_locales_to_translate:
            return self.show_locales_to_translate()

    def _validate_language(self):
        if not self.config.language:
            raise NfttCmdError(
                f"'language' not defined in {self.conf_path.name}."
            )

    def _validate_locales(self):
        exc_msg = (
            f"html_theme_options['locales'] in {self.conf_path.name} "
            "must be a sequence of tuples (locale_code, url)."
        )
        if "locales" not in self.config.html_theme_options or not isinstance(
            self.config.html_theme_options["locales"],
            (list, collections.abc.Sequence),
        ):
            raise NfttCmdError(exc_msg)
        for lc, url in self.config.html_theme_options["locales"]:
            assert len(url) > 0, exc_msg
            Locale(lc)  # Check whether babel raises with locale.

    def show_locales(self):
        try:
            self._validate_locales()
            theme_locales = self.config.html_theme_options["locales"]
            print(" ".join([locale[0] for locale in theme_locales]))
            return 0
        except NfttCmdError as exc:
            print(" ".join(exc.args))
            return 1
        except Exception as exc:
            print(exc)
            return 1

    def show_locales_to_translate(self):
        try:
            self._validate_language()
            self._validate_locales()
            theme_locales = self.config.html_theme_options["locales"]
            locales_to_translate = [
                lc for lc, _ in theme_locales if lc != self.config.language
            ]
            print(" ".join(locales_to_translate))
        except Exception as exc:
            print(exc.args)
            return 1


def run():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "-c",
        "--conf",
        dest="conf_path",
        help="Path to the conf.py of the Sphinx project.",
    )
    parser.add_argument(
        "--show-locales",
        action="store_true",
        help="Show locales declared in html_theme_options['locales']",
    )
    parser.add_argument(
        "--show-locales-to-translate",
        action="store_true",
        help=(
            "Show locales declared in html_theme_options['locales'] that "
            "have to be translated."
        ),
    )
    args = parser.parse_args()

    conf_path = args.conf_path
    if not conf_path and (CMD_DIR / "conf.py").exists():
        conf_path = CMD_DIR / "conf.py"
    elif conf_path:
        conf_path = Path(conf_path) if Path(conf_path).exists() else None

    if not conf_path:
        print("Couldn't find 'conf.py' file. Please, use -c <path_to/conf.py>")
        return 1

    nftt = Nftt(conf_path)
    return nftt.do(args)


if __name__ == "__main__":
    sys.exit(run())
