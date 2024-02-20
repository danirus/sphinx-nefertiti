# Nefertiti for Sphinx

Nefertiti is a theme for [Sphinx](https://www.sphinx-doc.org/en/master/) that features:

* Responsive design, based on `Bootstrap 5.3 <https://getbootstrap.com/docs/5.3>`_.
* Text input field to filter the **index**.
* Font configuration compliant with `EU's GDPR <https://gdpr.eu/>`_.
* Different fonts can be used for different elements.
* Light and dark color schemes, for normal text and code highlighted with Pygments styles.
* Diverse color sets are available: blue, indigo, purple, pink, red, orange, yellow, ...
* Optional highlighting of the project repository in the header.
* Optional project version selector in the header.
* Customizable footer links.

## Index filtering

<img align="left" width="329" height="694" src="docs/build/html/_static/img/index-filtering.gif">

By default the **index** shows the content folded. Opening or closing items is remembered while browsing the documentation.

To quickly find items use the input filter. The filter will display items that could be unvisible within a folded item.

In the sample animated image the user looks for the item "Architecture", which is folded within the "Advance topics" entry. While typing the index shows entries that match the input field.

After clearing the input field the index displays itself again with the folded and unfolded items the user had selected.

##  The TOC on the right side

<img align="right" width="393" height="327" src="docs/build/html/_static/img/toc.png">

The Table of Contents, displayed on the right side of the page, spans itself to the right border of the browser to display long items, improving readability.

## Other features

Nefertiti for Sphinx comes with the following color sets. Change between them using the attribute `display` of the `html_theme_options` setting.

<img align="center" width="768" height="462" src="docs/build/html/_static/img/colorsets.png">

In order to be compliant with [EU's GDPR](https://gdpr.eu/), Nefertiti for Sphinx comes bundled with a group of fonts licensed for free distribution. Adding more fonts is explained in the [User's Guide](https://sphinx-nefertiti.readthedocs.io/en/latest/users-guide/customization/fonts.html#adding-fonts):

* Assistant
* Exo
* Montserrat
* Mulish
* Nunito
* Open Sans
* Red Hat Display
* Sofia Sans
* Ubuntu
* Varta
* Work Sans
* Fira Code (monospace)
* Red Hat Mono (monospace)
* Ubuntu Mono (monospace)

Combine up to 5 different fonts:

    html_theme_options = {
        "sans_serif_font": "Nunito",
        "documentation_font": "Open Sans",
        "monospace_font": "Ubuntu Mono",
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
python3.11 -m venv venv
source venv/bin/activate
pip install -r requirements-dev.txt
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