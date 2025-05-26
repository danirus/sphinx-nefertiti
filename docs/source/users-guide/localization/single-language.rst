.. _ug-l10n-single-language:

Single language sites
#####################

This page explains how to use Nefertiti for Sphinx in a project written in a language other than English. The result of the following steps have been covered in a sample Git repository called `Don Quijote <https://github.com/danirus/don-quijote>`_.

1. Bootstrap the project
************************

To bootstrap the project from scratch create a new directory, cd into it, create a new Python virtual environment and activate it:

.. code-block:: bash

    mkdir don-quijote
    cd don-quijote
    python3.13 -m venv venv
    source venv/bin/activate

Create a ``pyproject.toml`` file with the project details and dependencies:

.. code-block:: toml

    [build-system]
    requires = ["setuptools"]
    build-backend = "setuptools.build_meta"

    [project]
    authors = [
        {name = "Your Name", email = "your@email.com"}
    ]
    classifiers = [
        "Development Status :: 4 - Beta",
        "Environment :: Web Environment",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Programming Language :: Python :: 3.12",
        "Programming Language :: Python :: 3.13",
        "Framework :: Sphinx",
        "Topic :: Literature",
    ]
    dependencies = [
        "sphinx >=8, <9",
        "sphinx-nefertiti >=0.7.5, <1",
        "sphinx-colorschemed-images",
    ]
    description = "Don Quijote, de Miguel de Cervantes"
    license = {file = "LICENSE"}
    name = "don-quijote"
    version = "1.0.0"
    readme = "README.md"
    requires-python = ">=3.10"

Install the project in the python environment along with its dependencies:

.. code-block:: bash

    pip install .

Then run ``sphinx-quickstart`` to create the Sphinx project. Pay attention to the question about the language of the project. Type the `iso-639 2-digits code <https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes>`_ corresponding to the language you want to use. For the example project, the language is Spanish, and the 2-digits code is ``es``.

These are ``sphinx-quickstart`` questions and the corresponding answers:

.. code-block:: bash

    > Separate source and build directories (y/n) [n]:
    > Project name: Don Quijote
    > Author name(s): Miguel de Cervantes
    > Project release []: 1.0
    > Project language [en]: es

The project structure has been created. One last change required before building the site consists of updating the option ``exclude_patterns`` in the ``conf.py`` file to add the ``venv`` directory. This way we instruct Sphinx to ignore that directory when looking for sources.

Edit the ``conf.py`` file and be sure it contains the ``venv`` directory:

.. code-block:: python

    exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'venv']


Now let's run Sphinx HTML builder:

.. code-block:: bash

    sphinx-build . _build/html -b html -v

Using the ``-v`` modifier ``sphinx-build`` will display additional log messages. Which is particularly useful to see whether Sphinx was able to find the catalog of translated strings.
