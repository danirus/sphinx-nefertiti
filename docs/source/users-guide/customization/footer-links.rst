.. _footer-links:

Footer links
############

The footer of HTML pages built with Nefertiti for Sphinx is divided in 4 areas or strings, from top to bottom:

 * The area for the Nefertiti footer links.
 * The name of the project, provided by Sphinx ``project`` setting.
 * The copyright notice, provided by Sphinx ``copyright`` setting.
 * The powered by notice.

The first and the last are theme specific and therefore they are represented by options within the ``html_theme_options`` setting.

Theme options
=============

The following two options can be customized in the ``html_theme_options``, in your project's ``conf.py`` file:

 #. ``footer_links``: Represents a list of strings and links.
 #. ``show_powered_by``: A boolean value.

1. ``footer_links``
-------------------

The footer links can be used to lead the user to other relevant pages related with your project, like a project's homepage, a code repository, a forum or similar.

The content for the ``footer_links`` is a comma separated list of links with the format ``<label>|<url>``. Each link has a ``<label>``, which represents the text for the link, and a ``<url>``, which is the URL the user will visit when clicking on the link.

A valid footer links could be:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": "Home|/,Documentation|/docs,Code|/code"
    }

If the list of links is longer you can separate the links in multiple lines. Here is an example of a multi line string in Python nested within parenthesys for clarity:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": (
            "Home|https://myproject.org,"
            "Documentation|https://myproject.org/docs,"
            "Code|https://myproject.org/code"
        )
    }

Be aware that the last character in each string is the comma: ``,``.

You could also use Python's String ``join`` method, and provide one link per line, like this:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "footer_links": ",".join([
            "Home|/",
            "Documentation|/docs",
            "Code|/code"
        ])
    }

In this case, the comma separates each string within the list delimited by ``[]``.

As an example, the footer links available at the bottom of this documentation have been provided as a Python list and joined with a comma, like this:

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

With all the previous changes in place, save the content, clean up the build directory, build it and serve it again:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.
