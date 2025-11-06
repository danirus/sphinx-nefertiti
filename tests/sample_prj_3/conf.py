# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Sample Project 3"
copyright = "2024, &copy; Team Nefertiti"
author = "Daniela Rus Morales"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "sphinx_nefertiti"

# - Settings for the Sphinx Colorschemed Images extension --------------------

html_static_path = [
    "static",
]
html_theme_options = {
    "documentation_font": "Noto Sans",
    "header_links": [
        {
            "text": "Code",
            "link": "https://github.com/danirus/sphinx-nefertiti",
            "target": "_blank",
        },
        {
            "text": "Quick Start",
            "link": "/quick-start.html",
        },
        {
            "text": "Components",
            "match": "^/users-guide/components/*",
            "dropdown": (
                {
                    "text": "Introduction",
                    "link": "/users-guide/components/index.html",
                },
                {"divider": True},
                {
                    "text": "Admonitions",
                    "link": "/users-guide/components/admonitions.html",
                },
                {
                    "text": "Version changes",
                    "link": "/users-guide/components/version-changes.html",
                },
                {
                    "text": "Code blocks",
                    "link": "/users-guide/components/code-blocks.html",
                },
                {
                    "text": "Headings",
                    "link": "/users-guide/components/headings.html",
                },
                {
                    "text": "Images",
                    "link": "/users-guide/components/images.html",
                },
                {"divider": True},
                {
                    "text": "Old components",
                    "link": "/users-guide/old-components/index",
                    "match": "^/users-guide/old-components/*",
                    "target": "",  # Will be transformed to `target="_self"`
                },
                {"divider": True},
                {
                    "text": "Color-schemed Images",
                    "link": "https://sphinx-colorschemed-images.readthedocs.io",
                    "target": "_blank",
                },
            ),
        },
        {
            "text": "Examples",
            "link": "/examples/index",
            "match": "^/examples/*",
        },
        {
            "text": "Change Log",
            "link": "/changelog",
            "target": "",
        },
    ],
    "footer_links": [
        {
            "text": "Documentation",
            "link": "https://sphinx-nefertiti.readthedocs.com",
        },
        {
            "text": "Package",
            "link": "https://pypi.com/sphinx-nefertiti",
            "target": "_self",
        },
        {
            "text": "Repository",
            "link": "https://github.com/danirus/sphinx-nefertiti",
            "target": "_blank",
        },
        {
            "text": "Issues",
            "link": "https://github.com/danirus/sphinx-nefertiti/issues",
            "target": "",
        },
    ],
}
