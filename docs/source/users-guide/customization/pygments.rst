.. _customize-pygments:

Pygments
########

Code blocks are themed using Pygments_.

By default Nefertiti for Sphinx uses the ``emacs`` and ``monokai`` Pygments styles for light and dark color schemes respectively.

A Sphinx code block is written like this in reStructuredText:

.. code-block:: rst

    .. code-block:: <language>

        the code here

Or like this in Markdown:

.. code-block:: markdown

    ```<language>
    the code here
    ```

Being ``<language>`` the name of the programming language.

The list of programming languages supported by depends on the lexers provided by Pygments. Get the list using ``pygmentize -L lexers`` in the command line.

Available styles
================

List all available Pygments styles using the following code (extracted from `here <https://pygments.org/docs/styles/#getting-a-list-of-available-styles>`_):

.. note::

    The following code uses Pygments version 2.13.0.

.. code-block:: python

    from pygments.styles import get_all_styles
    styles = list(get_all_styles())
    print(styles)

    [
        'default',
        'emacs',
        'friendly',
        'friendly_grayscale',
        'colorful',
        'autumn',
        'murphy',
        'manni',
        'material',
        'monokai',
        'perldoc',
        'pastie',
        'borland',
        'trac',
        'native',
        'fruity',
        'bw',
        'vim',
        'vs',
        'tango',
        'rrt',
        'xcode',
        'igor',
        'paraiso-light',
        'paraiso-dark',
        'lovelace',
        'algol',
        'algol_nu',
        'arduino',
        'rainbow_dash',
        'abap',
        'solarized-dark',
        'solarized-light',
        'sas',
        'staroffice',
        'stata',
        'stata-light',
        'stata-dark',
        'inkpot',
        'zenburn',
        'gruvbox-dark',
        'gruvbox-light',
        'dracula',
        'one-dark',
        'lilypond',
        'nord',
        'nord-darker',
        'github-dark'
    ]

Customize Pygments
==================

Change the default Pygments styles by modifying the ``pygments_style`` and ``pygments_dark_style`` settings in your **conf.py** module. They are global settings like ``html_theme`` (they do not go inside ``html_theme_options``):

.. code-block:: python

    pygments_style = "pastie"
    pygments_dark_style = "dracula"

Then save the changes and rebuild your Sphinx site:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.

.. _Pygments: https://pygments.org/
