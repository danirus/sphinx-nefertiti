.. _footer-links:

Footer links
############

The footer of HTML pages built with Nefertiti for Sphinx is divided in 4 areas or strings, from top to bottom:

* The area for the Nefertiti footer links, customizable with the ``html_theme_options``.
* The name of the project, provided by Sphinx ``project`` setting.
* The copyright notice, provided by Sphinx ``copyright`` setting.
* The powered-by notice.

Theme options
=============

The following two options related with the footer can be customized in the ``html_theme_options``:

#. ``footer_links``: Represents a list of dictionaries with text and links.
#. ``html_show_sphinx``: A boolean value.

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
            'target': '<values for HTML anchor's attribute>',
        },
    ]

Each dictionary has two keys:

#. ``text``: represents the label for the link, and
#. ``link``: represents the target URL the user will visit when clicking on the link.
#. (optional) ``target``: may be any of the values given to the `HTML anchor's attribute <https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target>`_. If left blank it takes the value `_self`.

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
                'target': '_blank',
            }, {
                'text': 'Code',
                'link': 'https://your.git.host/code',
                'target': '_blank',
            },
        ],

    }

Here is the `link <https://github.com/danirus/sphinx-nefertiti/blob/main/docs/source/conf.py#L96>`_ to the source code for the ``footer_links`` displayed at the bottom of this documentation.


2. ``html_show_sphinx``
-----------------------

The small notice **Built with Sphinx and Nefertiti** is displayed by default, and can be omitted by setting the ``html_show_sphinx`` to ``False``:

.. code-block:: python

    html_show_sphinx = False

Rebuild the theme
=================

With the previous changes in place, save the content, clean, build and serve your project again:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.
