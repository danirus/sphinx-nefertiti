"""sphinx-nefertiti theme"""

from pathlib import Path
import pkg_resources
import sys

from sphinx_nefertiti import colorsets, fonts, pygments


__version__ = pkg_resources.require("sphinx_nefertiti")[0].version
__version_full__ = __version__


def get_html_theme_path():
    """Return absolute path to parent folder of installed theme."""
    return str(Path(__file__).parents[1].absolute)


def initialize_theme(app):
    try:
        colorset_provider = colorsets.ColorsetProvider(app)
        app.show_colorset_choices = colorset_provider.multiple
        app.active_colorset = colorset_provider.colorset
        app.colorsets = [stylesheet for stylesheet in colorset_provider]

        font_provider = fonts.FontProvider(app)
        app.theme_fonts = [font for font in font_provider]

        pygments_provider = pygments.PygmentsProvider(app)
        app.pygments_assets = [asset for asset in pygments_provider]

    except (fonts.FontNotSupportedException, Exception) as exc:
        print(exc)
        sys.exit(1)


def copy_nefertiti_files(app, exc):
    if app.builder.format != "html" or exc:
        return

    for colorset in app.colorsets:
        colorset.copy_to_static(app.builder.outdir)
        colorset.copy_to_static(app.builder.outdir, is_map_file=True)

    for font in app.theme_fonts:
        font.copy_to_static(app.builder.outdir)

    for asset in app.pygments_assets:
        asset.create_pygments_style_file(app.builder.outdir)


def update_context(app, pagename, templatename, context, doctree):
    context["nefertiti_version"] = __version__
    context["show_colorset_choices"] = app.show_colorset_choices
    context["all_colorsets"] = colorsets.all_colorsets

    app.add_css_file(app.active_colorset.link_stylesheet)

    for font in app.theme_fonts:
        app.add_css_file(font.link_stylesheet)

    for asset in app.pygments_assets:
        if not asset.is_default_pygments_file:
            app.add_css_file(asset.link_stylesheet)


def setup(app):
    app.connect("builder-inited", initialize_theme)
    app.connect("html-page-context", update_context)
    app.connect("build-finished", copy_nefertiti_files)

    if hasattr(app, "add_html_theme"):
        theme_path = str(Path(__file__).parent)
        app.add_html_theme("sphinx_nefertiti", theme_path)

    return {
        "version": __version__,
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
