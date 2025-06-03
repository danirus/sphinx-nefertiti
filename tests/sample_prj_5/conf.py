# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Sample Project 1"
copyright = "2024, &copy; Team Nefertiti"
author = "Daniela Rus Morales"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

templates_path = ["_templates"]
exclude_patterns = ["_build", "Thumbs.db", ".DS_Store"]

html_theme = "sphinx_nefertiti"

# - Settings for the Sphinx Colorschemed Images extension --------------------

html_theme_options = {
    "locales": [
        ("de", "/de/"),
        ("en", "/en/"),
        ("es", "/es/"),
    ],
}  # Overriden via confoverrides.
