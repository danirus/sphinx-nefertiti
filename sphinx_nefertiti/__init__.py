"""sphinx-nefertiti theme"""

import json
import shutil
from pathlib import Path

import sphinx

from sphinx_nefertiti import (
    colorsets,
    docsver,
    fonts,
    l10n,
    links,
    pygments,
)

__version__ = "0.8.0"

pages_wo_index = ["genindex", "search"]


def get_html_theme_path():
    """Return absolute path to parent folder of installed theme."""
    return str(Path(__file__).parents[1].absolute())


def add_nftt_colorset(app):
    colorsets_path = Path(__file__).parent / "colorsets"

    colorset_provider = colorsets.ColorsetProvider(app)
    app.show_colorset_choices = colorset_provider.multiple
    app.active_colorset = colorset_provider.colorset

    if app.show_colorset_choices:
        shutil.copyfile(
            colorsets_path / "colorsets.js",
            Path(app.builder.outdir) / "_static" / "colorsets.js",
        )
        app.add_js_file("colorsets.js")
        for colorset in colorset_provider:
            colorset.copy_to_static()
    else:
        app.active_colorset.copy_to_static()

    app.add_css_file(app.active_colorset.link_stylesheet)


def add_nftt_fonts(app):
    font_provider = fonts.FontProvider(app)
    for font in font_provider:
        font.copy_to_static()
        app.add_css_file(font.link_stylesheet)


def add_nftt_locales(app):
    """Add the locale list as data in the `static/docs-locales.js`."""
    locale_provider = l10n.LocaleProvider(app)
    app.theme_locales = list(locale_provider)
    if len(app.theme_locales) == 0:
        return
    app.default_locale = locale_provider.current_locale
    app.default_locale_url = locale_provider.current_locale_url
    app.default_locale_name = locale_provider.current_locale_name


def add_nftt_pygments(app):
    pygments_provider = pygments.PygmentsProvider(app)
    for asset in pygments_provider:
        dest_file = asset.create_pygments_style_file(app.builder.srcdir)
        app.add_css_file(dest_file.name)


def add_nftt_versions(app, dest_dir):
    """Add the locale list as data in the `static/docs-version.js`."""
    docsver_provider = docsver.DocsVersionProvider(app)
    app.all_docs_versions = list(docsver_provider)
    docs_versions_script = "docs-versions.js"
    docs_versions_path = dest_dir / docs_versions_script
    with docs_versions_path.open("w") as f:
        versions_value = json.dumps(app.all_docs_versions)
        f.write(f"window.docs_versions = {versions_value};\n")
        if docsver_provider.current_version is not None:
            f.write(f"window.def_ver = '{docsver_provider.current_version}';")
    app.add_js_file(docs_versions_script)


def initialize_theme(app):
    # Make Sphinx add all the files in Nefertiti's static directory.
    static_path = Path(__file__).parent / "static"
    app.config.html_static_path.append(str(static_path.absolute()))

    dest_dir = Path(app.builder.outdir) / "_static"
    dest_dir.mkdir(exist_ok=True)

    add_nftt_colorset(app)
    add_nftt_fonts(app)
    add_nftt_locales(app)
    add_nftt_pygments(app)
    header_links_provider = links.HeaderLinksProvider(app)
    app.header_links = list(header_links_provider)
    footer_links_provider = links.FooterLinksProvider(app)
    app.footer_links = list(footer_links_provider)
    add_nftt_versions(app, dest_dir)

    app.add_js_file("sphinx-nefertiti.min.js")
    app.add_js_file("bootstrap.bundle.min.js")
    app.add_css_file("bootstrap-icons.min.css")


def update_context(app, pagename, templatename, context, doctree):
    context["nefertiti_version"] = __version__
    context["header_links"] = app.header_links
    context["footer_links"] = app.footer_links
    context["default_locale"] = getattr(app, "default_locale", "")
    context["default_locale_url"] = getattr(app, "default_locale_url", "")
    context["default_locale_name"] = getattr(app, "default_locale_name", "")
    context["theme_locales"] = getattr(app, "theme_locales", [])
    context["show_colorset_choices"] = app.show_colorset_choices
    context["all_colorsets"] = colorsets.all_colorsets


def build_finished(app, exc):
    # Move bootstrap-icons.woff2 to _static/fonts/.
    static_outdir = Path(app.builder.outdir) / "_static"
    fonts_outdir = static_outdir / "fonts"
    if not fonts_outdir.exists():
        fonts_outdir.mkdir()

    src_path = static_outdir / "bootstrap-icons.woff2"
    dest_path = fonts_outdir / "bootstrap-icons.woff2"
    if src_path.exists() and not dest_path.exists():
        shutil.move(src_path, dest_path)


def setup(app):
    theme_path = Path(__file__).parent.resolve()
    sphinx_version = [int(x) for x in sphinx.__version__.split(".")]
    if sphinx_version < [7, 0, 0]:
        raise Exception("Theme sphinx-nefertiti requires sphinx >= 7.0.0")

    app.connect("builder-inited", initialize_theme)
    app.connect("html-page-context", update_context)
    app.connect("build-finished", build_finished)
    app.add_message_catalog("sphinx", theme_path / "locale")

    if hasattr(app, "add_html_theme"):
        app.add_html_theme("sphinx_nefertiti", str(theme_path))

    return {
        "version": __version__,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
