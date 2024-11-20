import os
from pathlib import Path
import sys

import sphinx_nefertiti


on_rtd = os.environ.get('READTHEDOCS', None) == 'True'
if on_rtd:
    html_theme_path = [sphinx_nefertiti.get_html_theme_path()]
else:
    # Add `sphinx_nefertiti` to the python path.
    PRJ_PATH = Path(__file__).parents[2]
    sys.path.insert(0, str(PRJ_PATH))


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

release_pattern_url = "https://sphinx-nefertiti.readthedocs.io/en/{release}/"

# releases = [
#     release,
#     '0.4.0',
#     '0.3.4',
#     '0.3.3',
#     '0.3.2',
#     '0.2.4',
#     '0.1.3',
# ]

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'myst_parser',
    'sphinx_design',
    'sphinx_copybutton',
    'sphinx_colorschemed_images',
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


# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

language = "en"
today_fmt = '%A %d. %B %Y, %H:%M'

html_theme = "sphinx_nefertiti"

html_style = ["custom.css", "nftt-pygments.min.css"]

figure_language_filename = "images/{path}/{basename}{ext}"

html_theme_options = {
    "documentation_font": "Open Sans",
    "documentation_font_size": "1.0rem",
    "monospace_font": "Ubuntu Mono",
    "monospace_font_size": "1.1rem",

    "style": "orange",
    "pygments_light_style": "pastie",
    "pygments_dark_style": "dracula",

    "logo": "nefertiti.svg",
    "logo_width": 36,
    "logo_height": 36,
    "logo_alt": "Nefertiti-for-Sphinx",

    "repository_url": "https://github.com/danirus/sphinx-nefertiti",
    "repository_name": "sphinx-nefertiti",

    # "current_version": f"v{release}",
    # "versions": [
    #     ("v%s" % item, release_pattern_url.format(release=item))
    #     for item in releases
    # ],

    # "header_links_in_2nd_row": False,
    "header_links": [
        {
            "text" : "Quick Start",
            "link": "/quick-start.html",
        },
        {
            "text": "Examples",
            "link": "/examples/index.html",
            "match": "^/examples/*",
            "dropdown": (
                {
                    "text": "Hosting in ReadTheDocs",
                    "link": "/examples/hosting-in-readthedocs.html"
                },
                {
                    "text": "Self-hosting multiple versions",
                    "link": "/examples/self-hosting-multiple-versions.html"
                },
                {
                    "text": "A blog with ABlog",
                    "link": "/examples/a-blog-with-ablog.html"
                }
            )
        },
        {
            "text": "Change Log",
            "link": "/changelog.html",
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
}
# End of settings specific for sphinx-nefertiti.
# ---------------------------------------------------------------------

html_static_path = ['_static',]

html_favicon = "_static/nefertico.ico"

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
