.. _ug-localization:

Localization
############

.. admonition:: Missing languages
    :class: note

    For the time being Nefertiti user interface is available only in three languages: English (default), German and Spanish. Please, consider extending Nefertiti to cover your own language if it is not covered yet.

The official Sphinx website provides extensive documentation about `localization <https://www.sphinx-doc.org/en/master/usage/advanced/intl.html>`_.

The details about using `sphinx-intl <https://www.sphinx-doc.org/en/master/usage/advanced/intl.html#translating-with-sphinx-intl>`_ explained in the previous link will be put in practice later in this page to build a multilingual site. By other side, building a single language site only requires to translate the interface, for which `Babel <https://babel.pocoo.org/en/latest/>`_ is the reference tool.

Single language site
********************

Nefertiti provides the translation of the user interface in a bunch of languages (English, German and Spanish). If your site is written in any of those three languages, the only requirement is to indicate the `locale <https://en.wikipedia.org/wiki/ISO_639-1>`_ in the ``language`` setting in your ``conf.py`` file. It defaults to ``en``, which corresponds to English.

If your language is not covered, please, consider sending the translation.

Multilingual site
*****************

A multilingual Sphinx site requires two types of translations:

#. The translation of your docs in **Markdown** and/or **reStructuredText** files, and
#. Only when used, the translation of **header-links** and **footer-links**.

Nefertiti comes with a language widget that will be displayed at the top of the page when the option ``locales`` is passed in the ``html_theme_options`` setting, in your ``conf.py`` file.

For each language in which your site is available Sphinx has to produce a static web site. So for each language there must be an associated URL. For example:

.. code-block:: python

    language = "en"  # The language in which the docs are written.

    html_theme_options = {
        "locales": [
            ("de", "http://localhost:8008/de/"),
            ("en", "http://localhost:8008/de/"),
            ("es", "http://localhost:8008/es/"),
        ]
    }

An example multilingial site
============================

Both, :ref:`header-links` and the :ref:`footer-links`, are defined in the ``html_theme_options`` setting, in your ``conf.py`` file. They may look something similar to this:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "header_links": [
            {
                "text" : "Quick Start",  # Translatable text.
                "link": "quick-start",
            },
            {
                "text": "Release Notes",  # Translatable text.
                "link": "release-notes",
            },
            # ... etc.
        ],
        "footer_links": [
            {
                "text": "Documentation",  # Translatable text.
                "link": "https://sphinx-nefertiti.readthedocs.com",
            }, {
                "text": "Package",  # Translatable text.
                "link": "https://pypi.com/sphinx-nefertiti",
            },
            # ... etc.
        ],
    }


In order to switch between languages, Nefertiti provides a header widget that will be automatically enabled
