# Nefertiti for Sphinx

Nefertiti for Sphinx is yet another Sphinx theme.

Here is a screenshot, but visiting the [documentation site](https://sphinx-nefertiti.readthedocs.io/en/latest/) will give a more comprehensive idea.

![screenshot](https://github.com/danirus/sphinx-nefertiti/raw/main/docs/source/_static/img/screenshot.png)

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