Installation
############

From PyPI
*********

Nefertiti for Sphinx is a Python package available in PyPI_ that can be installed using ``pip``.

Assuming that you have opened a terminal, cd into your Sphinx project, enable your Python virtual environment, and pip install the package:

.. code-block:: bash

    pip install sphinx-nefertiti

It will also install the only dependency, Sphinx, if it was not installed.

.. _PyPI: https://pypi.org/project/sphinx-nefertiti/

.. _from-GitHub:

From GitHub
***********

Nefertiti for Sphinx can be installed directly from the GitHub_ repository. This is useful when you want to make changes in the theme or further develop it. Clone the repository and install it in your virtual environment.

 Assuming that you have a directory structure similar to the following:

.. code-block:: bash

    $ tree -d -L 2
    .
    ├── my-sphinx-project
    │   ├── _build
    │   ├── _static
    │   ├── _templates
    │   └── venv

``cd`` into ``my-sphinx-project``, enable your virtual environment, clone Nefertiti for Sphinx outside of the ``my-sphinx-project`` directory, and then install the package in editable mode:

.. code-block:: bash

    cd my-sphinx-project
    source venv/bin/activate
    git clone https://github.com/danirus/sphinx-nefertiti.git ../sphinx-nefertiti
    pip install -e ../sphinx-nefertiti

The :ref:`development` document in the User's Guide explains how to setup the development environment to modify and build Nefertiti for Sphinx.

.. _GitHub: https://github.com/danirus/sphinx-nefertiti.git

Use the theme
*************

Once Nefertiti for Sphinx is installed edit the ``conf.py`` file in your documentation and change the ``html_theme`` setting:

.. code-block:: python

    html_theme = "sphinx_nefertiti"

Save the changes and rebuild the docs:

.. code-block:: bash

    make clean
    make html
    python -m http.server -d build/html

Visit http://localhost:8000.

Continue reading in the next chapter to customize the theme.
