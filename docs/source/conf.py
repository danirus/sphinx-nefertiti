import os
from pathlib import Path
import sys

import sphinx_nefertiti


# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

master_doc = 'index'
project = 'Nefertiti for Sphinx'
copyright = 'Code licensed MIT, docs CC BY 3.0.'


_ver_list = sphinx_nefertiti.__version__.split(".")

# The X.Y number.
version = ".".join(_ver_list[:2])
# The X.Y.Z number.
release = ".".join(_ver_list[:3])

docs_fmt_url = "https://sphinx-nefertiti.readthedocs.io/{release}/"

releases = [
    "latest",
    release,
    "0.8.10",
    "0.7.5",
    "0.6.0",
    "0.5.3",
    "0.4.2",
    "0.3.7",
    "0.2.3",
    "0.1.13",
]

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'myst_parser',
    'sphinxcontrib.mermaid',
    'sphinx_design',
    'sphinx_copybutton',
    'sphinx_colorschemed_images',
    'sphinx_nefertiti',
]

myst_enable_extensions = [
    'amsmath',
    'attrs_block',
    'colon_fence',
    'deflist',
    'dollarmath',
    'fieldlist',
    'tasklist',
]

templates_path = ['_templates']
exclude_patterns = []

mermaid_fullscreen = True  # Enable/disable globally (default: True)
mermaid_fullscreen_button = "⛶"  # Customize button icon (default: ⛶)


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

language = "en"
today_fmt = '%A %d. %B %Y, %H:%M'

html_theme = "sphinx_nefertiti"

html_css_files = ["custom.css", "nftt-pygments.min.css"]

figure_language_filename = "images/{path}/{basename}{ext}"

html_theme_options = {
    "project_short": "sphinx-nefertiti",
    "monospace_font_size": "1.0rem",
    "documentation_font_size": "1.1rem",

    "style": "orange",
    "style_header_neutral": False,
    "pygments_light_style": "pastie",
    "pygments_dark_style": "dracula",

    "logo": "nefertiti.svg",
    "logo_width": 36,
    "logo_height": 36,
    "logo_alt": "Nefertiti-for-Sphinx",

    "repository_url": "https://github.com/danirus/sphinx-nefertiti",
    "repository_name": "sphinx-nefertiti",

    "docs_repository_url": "https://github.com/danirus/sphinx-nefertiti/tree/main/docs/source/",

    "current_version": "latest",
    "versions": [
        (item, docs_fmt_url.format(release=item)) for item in releases
    ],

    # "header_links_in_2nd_row": False,
    "header_links": [
        {
            "text" : "Quick Start",
            "link": "quick-start",
        },
        {
            "text": "Customize",
            "match": "/users-guide/customization/*",
            "dropdown": (
                {
                    "text": "Fonts",
                    "link": "users-guide/customization/fonts"
                },
                {
                    "text": "Colorsets",
                    "link": "users-guide/customization/colorsets"
                },
                {
                    "text": "Header Links",
                    "link": "users-guide/customization/header-links"
                },
                {
                    "text": "Footer Links",
                    "link": "users-guide/customization/footer-links"
                },
                {
                    "text": "Version Dropdown",
                    "link": "users-guide/customization/version-dropdown"
                },
                {
                    "text": "Git Repository",
                    "link": "users-guide/customization/git-repository"
                },
                {
                    "text": "Pygments",
                    "link": "users-guide/customization/pygments"
                },
                {
                    "divider": True
                },
                {
                    "text": "Color-schemed Images",
                    "link": "https://sphinx-colorschemed-images.readthedocs.io",
                    "target": "_blank",
                },
            )
        },
        {
            "text": "Release Notes",
            "link": "release-notes",
        }
    ],

    "footer_links": [
        {
            "text": "Documentation",
            "link": "https://sphinx-nefertiti.readthedocs.com",
        }, {
            "text": "Package",
            "link": "https://pypi.com/sphinx-nefertiti",
        }, {
            "text": "Repository",
            "link": "https://github.com/danirus/sphinx-nefertiti",
        }, {
            "text": "Issues",
            "link": "https://github.com/danirus/sphinx-nefertiti/issues",
        },
    ],

    "show_colorset_choices": True,
    # Return user's to 'blue' after a day since color was picked.
    "reset_colorset_choice_after_ms": 1000 * 60 * 60 * 24,
}
# End of settings specific for sphinx-nefertiti.
# ---------------------------------------------------------------------

html_static_path = ['static',]

html_favicon = "static/nefertico.ico"

# -- Options for HTMLHelp output ---------------------------------------

htmlhelp_basename = 'sphinx_nefertitidoc'

# -- Options for LaTeX output ------------------------------------------

latex_elements = {}
latex_documents = [
    (master_doc, 'sphinx_nefertiti.tex',
     'Nefertiti for Sphinx - Documentation',
     'Daniela Rus Morales', 'manual'),
]

# -- Options for manual page output ------------------------------------

man_pages = [
    (master_doc, 'sphinx_nefertiti',
     'Nefertiti for Sphinx - Documentation',
     ['Daniela Rus Morales'], 1)
]

csi_add_script_to_html_output = False
