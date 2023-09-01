.. _quick-start:

Quick start
###########

Nefertiti for Sphinx can be setup and running in a blink of an eye. Follow this quick start guide to go through the minimal steps to use it with your project.

.. note::

    This page assumes that you want to try Nefertiti on an already existing Sphinx project.

In a blink of an eye
********************

Install the package from PyPI:

.. code-block:: bash

    pip install sphinx-nefertiti


Edit the ``conf.py`` file in your documentation directory and change your ``html_theme`` setting:

.. code-block:: python

    html_theme = "sphinx_nefertiti"

Now rebuild the docs and serve them to get a first glimpse of your site made up with Nefertiti.

Within the directory of your ``conf.py`` file:

.. code-block:: shell

    make clean
    make html
    python -m http.server -d build/html

Visit http://localhost:8000.


Customize the theme
*******************

The following features of Nefertiti for Sphinx can be customized:

 1. Fonts.
 2. Color set: blue, indigo, purple, pink, red, ...
 3. Pygments styles for light and dark color schemes.
 4. Repository name and URL to display it in the header.
 5. Project version dropdown selector.
 6. Footer links.


1. Fonts
========

There are 5 options related to font face customization and 2 options related to font size.

The font face options are:

 * ``sans_serif_font``: Default site font, defaults to `Nunito <https://www.fontsquirrel.com/fonts/nunito?q%5Bterm%5D=Nunito&q%5Bsearch_check%5D=Y>`_.
 * ``monospace_font``: Default monospace font, for code blocks, defaults to `Red Hat Mono <https://www.fontsquirrel.com/fonts/ubuntu-mono?q%5Bterm%5D=Ubuntu+Mono&q%5Bsearch_check%5D=Y>`_.
 * ``project_name_font``: The font for the Project's name. ``sans_serif_font`` otherwise.
 * ``documentation_font``: reStructuredText and Markdown content. ``sans_serif_font`` otherwise.
 * ``doc_headers_font``: To render documentation headers. ``documentation_font`` otherwise.

And the font size options:

 * ``monospace_font_size``: The CSS ``font-size`` for the ``monospace_font``. ie: ``"1rem"``.
 * ``documentation_font_size``: The CSS ``font-size`` for the ``documentation_font``. ie: ``"1.1rem"``.

Edit your ``conf.py`` file and add or modify your ``html_theme_options`` setting with the following content. By the way, the fonts referred to in this example are part of the Nefertiti for Sphinx distribution. If you want to use other Open Source licensed fonts read the section "How to add more fonts" to include them with your project.

.. code-block:: python

    html_theme_options = {
        "sans_serif_font": "Mulish",
        "monospace_font": "Ubuntu Mono",
        "monospace_font_size": "1.1rem",
        "project_name_font": "Montserrat",
        "documentation_font": "Assistant",
        "documentation_font_size": "1.1rem",
        "doc_headers_font": "Georgia",
    }

2. Color sets
=============

Another customizable feature of the theme is the color set. In the header of this documentation you can see a dropdown with a palette icon. The colors listed in the dropdown represent the available color sets. Try them to apply the selected color set to this documentation.

To customize the color set in your project add an entry ``style`` to the ``html_theme_options`` setting in your ``conf.py`` module:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style": "pink",
    }

When ``style`` is not given the theme defaults to ``cyan``.

3. Pygments styles
==================

Pygments_ is the package in charge of rendering code blocks. Sphinx supports two settings related with pygments:

 * ``pygments_style``, applied when browser's ``prefers-color-scheme`` returns **light**.
 * ``pygments_dark_style``, applied when browser's ``prefers-color-scheme`` returns **dark**.

Nefertiti for Sphinx extends the use of these settings in a way that their styling is applied when the user selects the scheme in the light/dark dropdown, at the right side of the header.

If your Sphinx project has code-blocks, try changing the pygments style settings and see how they are applied when switching between light and dark schemes in the header. Update your ``conf.py`` module:

.. code-block:: python

    pygments_style = "solarized-light"
    pygments_dark_style = "solarized-dark"

See more code blocks rendered with Pygments in the :ref:`code-blocks` document in Nefertiti User's Guide.

4. Repository data
==================

If your Sphinx project is about a source code product, and it resides in a Git repository, in GitHub or GitLab, Nefertiti can display information relative to your repository in the header.

Just add the ``repository_name`` and ``repository_url`` keys to your ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "repository_name": "danirus/sphinx-nefertiti",
        "repository_url": "https://github.com/danirus/sphinx-nefertiti",
    }

5. Version dropdown
===================

If your project is available in different versions Nefertiti for Sphinx can display a dropdown in the header to switch between them.

If you host different versions in different URLs, like:

.. list-table::
    :header-rows: 1

    * - Version
      - URL
    * - v2.9.9
      - https://sample-project.readthedocs.io/en/latest/
    * - v2.8.5
      - https://sample-project.readthedocs.io/en/2.8.5/
    * - v2.7.2
      - https://sample-project.readthedocs.io/en/2.7.2/


Enable the version dropdown by adding the ``versions`` key to your ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "versions": [
            ("v2.9.9", "https://sample-project.readthedocs.io/en/latest/"),
            ("v2.8.5", "https://sample-project.readthedocs.io/en/2.8.5/"),
            ("v2.7.2", "https://sample-project.readthedocs.io/en/2.7.2/"),
        ]
    }


6. Footer links
===============

In addition to the copyright notice, configurable with the ``copyright`` Sphinx setting, you can add links that are important to your project, like a link to your company website or a link to your code repository. Footer links are added via the ``footer_links`` key in the ``html_theme_options``. This entry has to be a comma separated list of strings with the format: ``"<link title>|<URL>"``.

As an example, the 4 links of the current Nefertiti for Sphinx documentation look like this in the ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": ",".join([
            "Documentation|https://sphinx-nefertiti.readthedocs.com",
            "Package|https://pypi.com/sphinx-nefertiti",
            "Repository|https://github.com/danirus/sphinx-nefertiti",
            "Issues|https://github.com/danirus/sphinx-nefertiti/issues",
        ])
    }

In addition you can remove the **Built with Sphinx and Nefertiti** notice by setting the ``show_powered_by`` key to False. It is ``True`` by default:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "show_powered_by": False
    }

Rebuild the theme
*****************

With all the previous changes in place, save the content, clean up the build directory, build it and serve it again:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.


.. _Pygments: https://pygments.org/
.. _readthedocs: https://readthedocs.org