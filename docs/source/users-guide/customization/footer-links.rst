.. _footer-links:

Footer links
############

The footer of HTML pages built with Nefertiti for Sphinx is divided in 4 areas or strings, from top to bottom:

* The area for the Nefertiti footer links.
* The name of the project, provided by Sphinx ``project`` setting.
* The copyright notice, provided by Sphinx ``copyright`` setting.
* The powered-by notice.

The first and the last are theme specific and can be customized using the ``html_theme_options`` setting.

Theme options
=============

The following two options related with the footer can be customized in the ``html_theme_options``:

#. ``footer_links``: Represents a list of dictionaries with text and links.
#. ``show_powered_by``: A boolean value.

1. ``footer_links``
-------------------

The footer links can be used to lead the user to other relevant pages related with your project, like a project's homepage, a code repository, a forum or similar.

.. versionchanged:: 0.5

    Previous to v0.5 ``footer_links`` were a comma separated list of links with the format ``<label>|<url>``. From version 0.5 on ``footer_links`` has to be a list of dictionaries with keys ``text`` and ``link``.

The content for the ``footer_links`` is a list of dictionaries with the format:

.. code-block::

    [
        {
            'text': '<the label to display>',
            'link': '<toctree-doc-path | URL>',
        },
    ]

Each dictionary has two keys:

#. ``text``: represents the label for the link, and
#. ``link``: represents the target URL the user will visit when clicking on the link.

A valid footer links could be:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": [
            {
                'text': 'Home',
                'link': 'index',
            }, {
                'text': 'Documentation',
                'link': 'https://myproject.org/docs',
            }, {
                'text': 'Code',
                'link': 'https://your.git.host/code',
            },
        ],

    }

Here is the `link <https://github.com/danirus/sphinx-nefertiti/blob/main/docs/source/conf.py#L96>`_ to the source code for the ``footer_links`` displayed at the bottom of this documentation.


2. ``show_powered_by``
----------------------

The powered by notice is a static string with the value **Built with Sphinx and Nefertiti**. It is displayed by default, and can be omitted by setting the ``show_powered_by`` to ``False`` in the ``html_theme_options``:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "show_powered_by": False
    }

Rebuild the theme
=================

With the previous changes in place, save the content, clean, build and serve your project again:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.
