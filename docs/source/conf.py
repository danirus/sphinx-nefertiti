from pathlib import Path
import sys

# Add `sphinx_nefertiti` to the python path.
PRJ_PATH = Path(__file__).parents[2]
print("PRJ_PATH:", PRJ_PATH)
sys.path.insert(0, str(PRJ_PATH))


import sphinx_nefertiti




# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

master_doc = 'index'
project = 'Nefertiti for Sphinx'
# copyright = '2022, MIT License'
copyright = 'Code licensed MIT, docs CC BY 3.0.'


_ver_list = sphinx_nefertiti.__version__.split(".")

# The X.Y number.
version = ".".join(_ver_list[:2])
# The X.Y.Z number.
release = ".".join(_ver_list[:3])

release_pattern_url = "https://sphinx-nefertiti.readthedocs.io/en/{release}/"

releases = [
    release,
    "0.0.3",
]

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'myst_parser',
    'sphinx_design',
    'sphinx_copybutton',
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

pygments_style = "pastie"
pygments_dark_style = "dracula"

html_theme_options = {
    "documentation_font": "Open Sans",
    "monospace_font": "Ubuntu Mono",
    "monospace_font_size": "1.1rem",

    "logo": "img/nefertiti.svg",
    "logo_alt": "Nefertiti-for-Sphinx",

    "repository_url": "https://github.com/danirus/django-comments-xtd",
    "repository_name": "danirus/sphinx-nefertiti",

    "current_version": f"v{release}",
    # "versions": [
    #     ("v%s" % item, release_pattern_url.format(release=item))
    #     for item in releases
    # ],
    "versions": [
        ("v0.1.0", "http://localhost:9090"),
        ("v0.0.3", "http://localhost:9093"),
    ],

    "footer_links": ",".join([
        "Documentation|https://sphinx-nefertiti.readthedocs.com",
        "Package|https://pypi.com/sphinx-nefertiti",
        "Repository|https://github.com/danirus/sphinx-nefertiti",
        "Issues|https://github.com/danirus/sphinx-nefertiti/issues",
    ]),

    "show_colorset_choices": True
}

html_static_path = ['_static']

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
