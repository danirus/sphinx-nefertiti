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
2. Header links
3. Color set: blue, indigo, purple, pink, red, ...
4. Pygments styles for light and dark color schemes.
5. Repository name and URL to display it in the header.
6. Project version dropdown selector.
7. Footer links.


1. Fonts
========

There are 5 options related to font face customization and 2 options related to font size.

The font face options are:

* ``sans_serif_font``: Default site font, defaults to `Nunito <https://fonts.google.com/specimen/Nunito>`_.
* ``monospace_font``: Default monospace font, for code blocks, defaults to `Red Hat Mono <https://fonts.google.com/specimen/Red+Hat+Mono>`_.
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
        "monospace_font": "Ubuntu Sans Mono",
        "monospace_font_size": "1.1rem",
        "project_name_font": "Montserrat",
        "documentation_font": "Assistant",
        "documentation_font_size": "1.1rem",
        "doc_headers_font": "Georgia",
    }

Read more about customizing the fonts in :ref:`Customization > Fonts <fonts>`.

2. Header links
===============

Add links to the header of your Sphinx project using header links. They can be mere links or dropdown lists. The user will see an underline below the link whenever it corresponds to the page loaded in the browser.

Header links can be displayed in a second row in the header.

The following content will produced the header of the image below:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "header_links_in_2nd_row": True,
        "header_links": [
            {
                'text': 'Features',
                'link': '/features.html',
            },
            {
                "text": "Learn",
                "dropdown": (
                    {
                        "text": "Learn",
                        "link": "/learn/index.html",
                    }, {
                        "text": "Python Types Intro",
                        "link": "/python-types.html",
                    }, {
                        "text": "Concurrency and async/await",
                        "link": "/async.html",
                    }, {
                        "divider": True,
                    }, {
                        "text": "Tutorial - User Guide",
                        "link": "/tutorial/index.html",
                        "match": "^/tutorial/*",
                    }, {
                        "text": "Advanced User Guide",
                        "link": "/advanced/index.html",
                        "match": "^/advanced/*"
                    }
                )
            },
            {
                'text': 'Release Notes',
                'link': '/release-notes.html',
            },
            {
                'text': 'Blog',
                'link': 'https://example.com/blog',
            },
        ]
    }

.. cs_figure:: users-guide/customization/img/rhythm-header-in-2-rows.*
    :alt: Header links can be displayed in the second row of the header.
    :width: 90%
    :align: center
    :class: border-radius-2

    Read more about customizing the header links in :ref:`Customization > Header links <header-links>`.

3. Colorsets
============

Another customizable feature of the theme is the colorset. In the header of this documentation you can see a dropdown with a palette icon. The colors listed in the dropdown represent the available color sets. Try them to apply the selected color set to this documentation.

To customize the color set in your project add an entry ``style`` to the ``html_theme_options`` setting in your ``conf.py`` module:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style": "pink",
    }

When ``style`` is not given the theme defaults to ``default``, which is cyan.

Another available setting is ``style_header_neutral``, that when is set to ``True``, makes the header color to adapt to the light or dark color-scheme setting. To test it here, use the colorset dropdown at the top right side of the header.

Read more about customizing the base color in :ref:`Customization > Colorsets <colorsets>`.

4. Pygments styles
==================

Pygments_ is the package that renders code blocks. Sphinx supports two settings related with pygments:

* ``pygments_light_style``, applied when browser's ``prefers-color-scheme`` returns **light**.
* ``pygments_dark_style``, applied when browser's ``prefers-color-scheme`` returns **dark**.

Nefertiti for Sphinx extends the use of these settings in a way that their styling is applied when the user selects the scheme in the light/dark dropdown, at the right side of the header.

If your Sphinx project has code-blocks, try changing the pygments style settings and see how they are applied when switching between light and dark schemes in the header. To customize Pygments in your Sphinx project add both entries, ``pygments_light_style`` and ``pygments_dark_style``, to the ``html_theme_options`` setting in your ``conf.py`` module:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        'pygments_light_style': 'solarized-light',
        'pygments_dark_style': 'solarized-dark'
    }

See more code blocks rendered with Pygments in the :ref:`Components > Code blocks <code-blocks>` page. You can read more about customizing pygments in :ref:`Customization > Pygments <customize-pygments>`.

5. Repository data
==================

If your Sphinx project is about a source code product, and it resides in a Git repository, in GitHub or GitLab, Nefertiti can display information relative to your repository in the header.

Just add the ``repository_name`` and ``repository_url`` keys to your ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "repository_name": "danirus/sphinx-nefertiti",
        "repository_url": "https://github.com/danirus/sphinx-nefertiti",
    }

Read more about customizing the repository widget in :ref:`Customization > Git repository <git-repository>`.

6. Version dropdown
===================

If your project is available in different versions Nefertiti for Sphinx can display a dropdown in the header to switch between them.

If you host different versions in different URLs, like:

.. list-table::
    :header-rows: 1

    * - Version
      - URL
    * - v2.9.9
      - https://sample-project.org/latest/
    * - v2.8.5
      - https://sample-project.org/2.8.5/
    * - v2.7.2
      - https://sample-project.org/2.7.2/


Enable the version dropdown by adding the ``versions`` key to your ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "versions": [
            ("v2.9.9", "https://sample-project.org/latest/"),
            ("v2.8.5", "https://sample-project.org/2.8.5/"),
            ("v2.7.2", "https://sample-project.org/2.7.2/"),
        ]
    }

Read more about customizing this widget in :ref:`Customization > Version dropdown <version-dropdown>`.

7. Footer links
===============

In addition to the copyright notice, configurable with the ``copyright`` Sphinx setting, you can add links that are important to your project, like a link to your company website or a link to your code repository. Footer links are added via the ``footer_links`` key in the ``html_theme_options``. This entry has to be a list of dictionaries.

As an example, the 4 links of the current Nefertiti for Sphinx documentation look like this in the ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": [
            {
                "text": "Documentation",
                "link": "https://sphinx-nefertiti.readthedocs.com",
            }, {
                "text": "Package",
                "link": "https://pypi.com/sphinx-nefertiti",
            }, {
                "text": "Repository",
                "link": "https://github.com/danirus/sphinx-nefertiti",
            }, {
                "text": "Issues",
                "link": "https://github.com/danirus/sphinx-nefertiti/issues",
            }
        ]
    }

In addition you can remove the **Built with Sphinx and Nefertiti** notice by setting the ``show_powered_by`` key to ``False``. It is ``True`` by default:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "show_powered_by": False
    }

Custom CSS
**********

Apart from the options explained in the previous sections you can apply additional style changes to your site customizing the CSS variables provided with Nefertiti for Sphinx. As an example, let's create a ``custom.css`` file and customize one of such variables.

From the directory of your ``conf.py`` file, create a new directory ``static`` if it does not exist yet, and add a file called ``custom.css`` to it:

.. code-block:: bash

    mkdir static
    touch static/custom.css

Add the following example CSS code to ``custom.css``:

.. code-block:: css

    :root {
      --nftt-body-font-weight: 400;
      --nftt-pre-line-height: 135%;
    }

    .light {
      --nftt-headings-color: darkblue;
    }

    .dark {
      --nftt-headings-color: lightblue;
    }

The result of those changes are:

* ``--nftt-body-font-weight: 400;`` will change the ``font-weight`` CSS property applied to the ``<body>`` of the HTML page.
* ``--nftt-pre-line-height: 135%;`` will change the ``line-height`` CSS property for ``<pre>`` elements, like code blocks.
* ``--nftt-headings-color`` will change the color used for the headings of your documents.

.. admonition:: What are ':root', '.light' and '.dark'?
    :class: note

    Some of Nefertiti's CSS variables are defined within the selectors ``.light`` and ``.dark``. To override such CSS variables they have to be defined with at least the same level of specifity and loaded in the page after Nefertiti's stylesheet.

    Other CSS variables, like ``--nftt-pre-line-height``, can be simply added to the ``:root`` pseudo selector because their values do not change with the color scheme.

    To load your ``custom.css`` styles after Nefertiti's stylesheet Sphinx provides the option ``html_css_files`` in ``conf.py``.

Now edit your ``conf.py`` and update the ``html_css_files`` entry so that it includes your ``custom.css`` file with higher priority than sphinx-nefertiti's stylesheet:

.. code-block:: python

    html_css_files = ["custom.css",]

And continue to the next section to rebuild your Sphinx site.


Rebuild your site
*****************

With all the previous changes in place, save the content, clean up the build directory, build it and serve it again:

.. code-block:: shell

    $ make clean && make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.


.. _Pygments: https://pygments.org/
.. _readthedocs: https://readthedocs.org
