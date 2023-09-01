.. _development:

Development
###########

To further extend Nefertiti for Sphinx, for your personal or professional interest, or to contribute to the public open source project, you need a system with NodeJS v16 or higher, Python 3 and Git.

.. _dev-env-setup:

Development environment setup
*****************************

Clone the Git repository, create a Python virtual environment, and install the NodeJS packages:

.. code-block:: shell

    git clone git@github.com:danirus/sphinx-nefertiti.git
    cd sphinx-nefertiti
    python3.11 -m venv venv
    source venv/bin/activate
    pip install -r requirements-dev.txt
    nvm use --lts
    npm install

.. _style-development:

Style development
*****************

To make changes in the styling, or to create a new color set, you will edit the content of the ``scss/`` directory, and use the npm scripts ``css-compile`` or ``watch-css`` to compile SASS files and generate ``.css`` bundles.

When doing style development it is recommended to use ``make serve-site`` to serve a sample HTML file, ``site/index.html``, that by default loads ``site/css/sphinx-nefertiti.css``.

This file, ``sphinx-nefertiti.css``, and all its cousins representing each colorset, are produced by the npm script ``css-compile`` and ``watch-css``.

Install the **Accessibility Insights for Web** application [1]_ in your browser to verify that your changes do not present accessibility issues.

JavaScript development
**********************

To make changes in the JavaScript plugin you will edit the content of the ``js/`` directory, in combination with the npm scripts ``js-compile`` or ``watch-js`` to create the JavaScript bundle.

As with Style development, it is recommended to use the ``serve-site`` Makefile target to serve the ``site/index.html`` and test by hand the changes in the JavaScript plugin.

In the ``js/tests/`` directory there are tests to cover all the funcionality provided by the JavaScript plugin of Nefertiti for Sphinx. When fixing bugs or extending the functionality, please, consider to cover the changes with new or updated tests.

The ``serve-lcov`` Makefile target serves the coverage results after running the JavaScript tests with ``npm run js-test``.

.. _python-development:

Python development
******************

To extend the Python funcionality provided by the theme you will edit the content of the ``sphinx_nefertiti`` directory. It contains the Sphinx template files and the Python modules that make up the theme: ``__init__.py``, ``colorsets.py``, ``fonts.py`` and ``pygments.py``.

Be sure to install the package in its own virtual environment, so that you can test the changes using the docs provided by the theme, and install the additional packages needed to build the docs, within the cloned repository:

.. code-block:: bash

    pip install -e .
    pip install -r requirements-docs.txt

Then, once you are ready to test your Python changes, use the ``build-ext`` Makefile target and the ``serve-docs`` target:

.. code-block:: bash

    make build-ext
    make serve-docs

To debug Sphinx use ``debug-docs`` instead of ``serve-docs``.


.. [1] The `Accessibility Insights for Web <https://accessibilityinsights.io/docs/web/overview/>`_ is a browser app, `available <https://accessibilityinsights.io/downloads/>`_ only for Chrome or Edge (unfortunately not for Firefox) that helps developers find and fix accessibility issues in web apps and sites.