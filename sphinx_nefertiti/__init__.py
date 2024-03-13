"""sphinx-nefertiti theme"""

import json
import sys
from pathlib import Path

from sphinx_nefertiti import colorsets, fonts, pygments, docsver, utils


__version__ = utils.get_version()


pages_wo_index = ["genindex", "search"]


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

        docsver_provider = docsver.DocsVersionProvider(app)
        app.all_docs_versions = [version for version in docsver_provider]

    except (fonts.FontNotSupportedException, Exception) as exc:
        print(exc)
        sys.exit(1)


def copy_nefertiti_files(app, exc):
    static_path = Path(app.builder.outdir) / "_static"

    if app.builder.format != "html" or exc:
        return

    for colorset in app.colorsets:
        colorset.copy_to_static(app.builder.outdir)
        colorset.copy_to_static(app.builder.outdir, is_map_file=True)

    for font in app.theme_fonts:
        font.copy_to_static(app.builder.outdir)

    for asset in app.pygments_assets:
        asset.create_pygments_style_file(app.builder.outdir)

    versions_json = static_path / "doc_versions.js"
    with versions_json.open("w") as f:
        f.write("const doc_versions = " + json.dumps(app.all_docs_versions))

    # Rename files sphinx-nefertiti.min.js and bootstrap.bundle.min.js to
    # add the version number.
    rename_files = [  # Tuples: (orig_name, rename_to)
        (
            "sphinx-nefertiti.min.js",
            f"sphinx-nefertiti-{utils.get_version()}.min.js",
        ),
        (
            "sphinx-nefertiti.min.js.map",
            f"sphinx-nefertiti-{utils.get_version()}.min.js.map",
        ),
        (
            "bootstrap.bundle.min.js",
            f"bootstrap.bundle-{utils.get_version()}.min.js",
        ),
    ]
    for orig_name, rename_to in rename_files:
        orig_path = static_path / orig_name
        dest_path = static_path / rename_to
        orig_path.rename(static_path / dest_path)


def update_context(app, pagename, templatename, context, doctree):
    nftt_bundle = f"_static/sphinx-nefertiti-{utils.get_version()}.min.js"
    bs_bundle = f"_static/bootstrap.bundle-{utils.get_version()}.min.js"

    context["nefertiti_bundle"] = nftt_bundle
    context["bootstrap_bundle"] = bs_bundle

    context["nefertiti_version"] = utils.get_version()
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
        "version": utils.get_version(),
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
