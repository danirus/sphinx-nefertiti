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

The list of programming languages supported depends on the lexers provided by Pygments. Get the list using ``pygmentize -L lexers`` in the command line.

Available styles
================

List all available Pygments styles using the following code (extracted from `here <https://pygments.org/docs/styles/#getting-a-list-of-available-styles>`_):

.. note::

    The following code uses Pygments version 2.18.0.

.. code-block:: python

    import pprint
    from pygments.styles import get_all_styles
    styles = list(get_all_styles())
    pprint.pprint(styles)
    [
        'abap',
        'algol',
        'algol_nu',
        'arduino',
        'autumn',
        'bw',
        'borland',
        'coffee',
        'colorful',
        'default',
        'dracula',
        'emacs',
        'friendly_grayscale',
        'friendly',
        'fruity',
        'github-dark',
        'gruvbox-dark',
        'gruvbox-light',
        'igor',
        'inkpot',
        'lightbulb',
        'lilypond',
        'lovelace',
        'manni',
        'material',
        'monokai',
        'murphy',
        'native',
        'nord-darker',
        'nord',
        'one-dark',
        'paraiso-dark',
        'paraiso-light',
        'pastie',
        'perldoc',
        'rainbow_dash',
        'rrt',
        'sas',
        'solarized-dark',
        'solarized-light',
        'staroffice',
        'stata-dark',
        'stata-light',
        'tango',
        'trac',
        'vim',
        'vs',
        'xcode',
        'zenburn'
    ]

Customize Pygments
==================

.. versionchanged:: 0.4.0

Customize Pygments styles by modifying the ``pygments_light_style`` and ``pygments_dark_style`` settings in your **conf.py** module, in your ``html_theme_options``:

.. code-block:: python

    html_theme_options = {
        # <other options here>
        "pygments_light_style": "pastie",
        "pygments_dark_style": "dracula",
    }

These entries take precedence over the global setting ``pygments_style``.

.. _Pygments: https://pygments.org/
