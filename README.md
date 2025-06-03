# Nefertiti for Sphinx [![tests](https://github.com/danirus/sphinx-nefertiti/workflows/tests/badge.svg)](https://github.com/danirus/sphinx-nefertiti/actions/workflows/tests.yml)

Nefertiti is a theme for [Sphinx](https://www.sphinx-doc.org/en/master/) that features:

* Responsive design, based on [Bootstrap 5.3](https://getbootstrap.com/docs/5.3).
* Text input field to filter the **index**.
* Font configuration compliant with [EU's GDPR](https://gdpr.eu/).
* Different fonts can be used for different elements.
* Light and dark color schemes, for normal text and code highlighted with Pygments styles.
* Images that switch between color schemes. Released as [sphinx-colorschemed-images](https://pypi.org/project/sphinx-colorschemed-images/).
* Diverse color sets are available: blue, indigo, purple, pink, red, orange, yellow, ...
* Header and footer links. Header links can be grouped in dropdown elements.
* Optional highlighting of the project repository in the header.
* Optional project version selector in the header.
* Back-to-top button.

See it in action in [sphinx-themes.org](https://sphinx-themes.org/#theme-sphinx-nefertiti).

## Tested

* [Tested against Sphinx 7.3, 7.4, 8.0 and 8.1](https://github.com/danirus/sphinx-nefertiti/actions/workflows/tests.yml), see matrix python-sphinx.
* [Tested with NodeJS v20](https://github.com/danirus/sphinx-nefertiti/actions/workflows/tests.yml), see javascript-tests.

## Index filtering

<p align="center"><img align="center" width="315" height="417" src="https://github.com/danirus/sphinx-nefertiti/raw/main/docs/source/static/img/index-filtering-1.png"></p>

By default the **index** shows the content folded. Opening or closing items is remembered while browsing the documentation. To quickly find items use the input filter. The filter will display items that could be invisible within a folded item. When the user types in the input field, let us say `fo`, the index gets filtered with all the entries that match those two characters. So the index will display three matches: `Fonts`, `Footer links` and `Footnotes`. Those three entries were all folded within their sections:

<p align="center"><img align="center" width="315" height="333" src="https://github.com/danirus/sphinx-nefertiti/raw/main/docs/source/static/img/index-filtering-2.png"></p>


##  The TOC on the right side

The Table of Contents, displayed on the right side, spans itself to the right border of the browser to display long items, improving readability.

<p align="center"><img width="412" height="306" src="https://github.com/danirus/sphinx-nefertiti/raw/main/docs/source/static/img/toc.png"></p>

## Other features

Nefertiti for Sphinx comes with the following color sets. Change between them using the attribute `display` of the `html_theme_options` setting.

<p align="center"><img width="768" height="462" src="https://github.com/danirus/sphinx-nefertiti/raw/main/docs/source/static/img/colorsets.png"></p>

In order to be compliant with [EU's GDPR](https://gdpr.eu/), Nefertiti for Sphinx comes bundled with a group of fonts licensed for free distribution. Adding more fonts is explained in the [User's Guide](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/customization/fonts.html#adding-fonts):

* Assistant
* Exo
* Montserrat
* Mulish
* Nunito
* Open Sans
* Red Hat Display
* Sofia Sans
* Ubuntu Sans
* Varta
* Work Sans
* Fira Code (monospace)
* Red Hat Mono (monospace)
* Ubuntu Sans Mono (monospace)

Combine up to 5 different fonts:

    html_theme_options = {
        "sans_serif_font": "Nunito",
        "documentation_font": "Open Sans",
        "monospace_font": "Ubuntu Sans Mono",
        "project_name_font": "Nunito",
        "doc_headers_font": "Georgia",

        "documentation_font_size": "1.2rem",
        "monospace_font_size": "1.1rem",
    }

## To use it

Install the package from PyPI:

```shell
pip install sphinx-nefertiti
```

Edit the `conf.py` file of your Sphinx project and change the `html_theme` setting:

```python
html_theme = "sphinx_nefertiti"
```

Now rebuild the docs and serve them to get a first glimpse of your site made up with Nefertiti for Sphinx. It has many customizable options worth to explore. You might want to continue reading the [customization](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/customization/index.html) section of the docs.

## To develop it

Clone the Git repository, create a Python virtual environment, and install the NodeJS packages:

```shell
git clone git@github.com:danirus/sphinx-nefertiti.git
cd sphinx-nefertiti
python3.12 -m venv venv
source venv/bin/activate
pip install -e .
nvm use --lts
npm install
```

Before contributing, please, install the pre-commit hook scripts:

```shell
pre-commit install
```

There are a comprehensive number of scripts in the package.json. Beyond them there is a Makefile that saves time when building the CSS and JavaScript bundles to deliver them within the Python package of the theme.

Further read the following sections:

 * For [Style development](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/development.html#style-development)
 * For [JavaScript development](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/development.html#javascript-development)
 * For [Sphinx theme development](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/development.html##python-development)


## License

Project distributed under the MIT License.
