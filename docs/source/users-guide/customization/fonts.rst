.. _fonts:

Fonts
#####

Nefertiti for Sphinx comes bundled with 14 fonts and allows you to easily add more if your prefer so. This document explains how you can do it. First, a note about EU's GDPR.

About EU's GDPR
***************

Nefertiti for Sphinx does not redirect HTTP font requests to 3rd party providers. Instead, it serves fonts directly from your site.

An Sphinx project is allowed, when attending EU based users, and so long as users' consent is given, to redirect font requests to a 3rd party font service provider. Nefertiti for Sphinx does not provide the consent modal window, nor the logic in the case the user does not consent.

However, you can instead use one of the fonts distributed with Nefertiti for Sphinx or otherwise add your preferred fonts. The section :ref:`adding-fonts` below explains the details.

Font settings
*************

There can be up to 5 different fonts in use in a web page produced using Nefertiti for Sphinx. These 5 different fonts can be customized in the ``html_theme_options`` setting of your ``conf.py``.

The font options are:

* ``sans_serif_font``: Default font for everything except code. Defaults to `Nunito`_.
* ``monospace_font``: Default monospace font, for code. Defaults to `Red Hat Mono`_.
* ``project_name_font``: For project's name in header and footer. Defaults to ``sans_serif_font``.
* ``documentation_font``: Renders the body. Defaults to ``sans_serif_font``.
* ``doc_headers_font``: Renders body's headers. Defaults to ``Georgia``, the web safe font.

Additionally there are two font size settings:

* ``documentation_font_size``: Font size for the body. Defaults to ``1.0rem``.
* ``monospace_font_size``: Font size for code. Defaults to ``1.0rem``.

The size ``1.0rem`` in Nefertiti for Sphinx is equivalent to ``16px``. You can ignore these settings and let Nefertiti for Sphinx use the defaults, or you can customize them.

Fonts bundled with Nefertiti
****************************

The list of fonts licensed for free distribution that are bundled with Nefertiti for Sphinx are:

* Assistant_
* Exo_
* Montserrat_
* Mulish_
* Nunito_
* `Open Sans`_
* `Red Hat Display`_
* `Sofia Sans`_
* Ubuntu_
* Varta_
* `Work Sans`_
* `Fira Code`_ (monospace)
* `Red Hat Mono`_ (monospace)
* `Ubuntu Mono`_ (monospace)

Web safe fonts
**************

It is possible to customize the font settings to use Web safe fonts. Unlike the previous list, web safe fonts are available directly in the web browser, and do not require loading additional resources making your site to load faster.

A list of web safe fonts provided by all major web browsers:

* Helvetica, Arial, Arial Black, Verdana, Tahoma, Trebuchet MS, Gill Sans (category: Sans Serif).
* Times New Roman, Georgia, Palatino, Baskerville (category: Serif).
* Andale Mono, Courier, Lucida, Monaco (category: Monospace).
* Bradley Hand (category: Calligraphy).
* Brush Script MT, Comic Sans MS (category: Cursive).
* Impact, Luminari (category: Fantasy).

Example configuration
*********************

To customize font settings, edit your ``conf.py`` module and update the ``html_theme_options``. These are the values used by the Nefertiti for Sphinx documentation:

.. code-block:: python

    html_theme_options = {
        # "sans_serif_font": "Nunito",  # Default value.
        "documentation_font": "Open Sans",
        "monospace_font": "Ubuntu Mono",
        "monospace_font_size": "1.1rem",
        # "project_name_font": "Nunito",  # Default value.
        # "documentation_font_size": "1.0rem",  # Default value.
        # "doc_headers_font": "Georgia",  # Default value.
    }

Try the rest of the settings to find a combination of fonts that suits you. Or keep reading to find out how to add your preferred fonts.

.. _adding-fonts:

Adding fonts
************

Using a font not distributed with Nefertiti for Sphinx is as easy as pie:

#. Create a directory to keep the font files.
#. Get the font family files.
#. Write the ``font-face`` declaration.
#. Modify ``conf.py`` to make use of the font.
#. Rebuild the project.

The following sections explains it step by step. The goal is to make the font `Noto Sans`_ available to your Sphinx project.

1. Create font directory
========================

In the ``static/`` source directory of your project, create the directory ``fonts``, and inside it create another one called ``noto-sans``. The ``static/`` directory has to be listed in ``html_static_path``, in your ``conf.py``. If you have it already, or it has another name, adapt the following command to it.

Cd into your source directory (where the ``index.md`` or ``index.rst`` are) and create the directories:

.. code-block:: shell

    cd my-sphinx-project
    mkdir -p static/fonts/noto-sans


2. Get the font family
======================

`Noto Sans`_ has an OFL, Open Font License, which allows you to use the font with your project. Follow the previous link to visit Google Fonts and click on the "Download family" button.

The Noto Sans font family has 18 font files of which Nefertiti will use only 2:

* ``NotoSans-Regular.ttf``
* ``NotoSans-Bold.ttf``

Copy these two files inside the ``static/fonts/noto-sans`` directory.

3. Write the ``font-face`` declaration
======================================

Create a file ``stylesheet.css`` inside ``static/fonts/noto-sans``, add the following ``font-face`` declaration, and save it:

.. code-block:: css

    /* Sans Serif font family: Noto Sans.
     */

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Bold.ttf') format('truetype');
      font-weight: 700;
      font-style: normal;
    }

4. Update ``conf.py``
=====================

Now edit your ``conf.py`` file, modify the ``html_theme_options`` setting to add ``Noto Sans`` as the value for the option ``documentation_font``:

.. code-block:: python

    html_theme_options = {
        # ... Other options here ...
        documentation_font: "Noto Sans",
    }

Also, be sure that your ``static`` directory is listed in the ``html_static_path`` setting, otherwise Sphinx will fail to copy the font to the build directory:

.. code-block:: python

    html_static_path = ['static']


5. Build the project
====================

Once the previous steps have been completed the project can be built. The font files will be copied to the build directory. Serve your site to see that the body of your pages are now rendered with **Noto Sans**:

.. code-block:: shell

    $ make clean; make html
    $ python -m http.server -d _build/html

Visit http://localhost:8000 to take a look at the changes.


.. _Assistant: https://fonts.google.com/specimen/Assistant?query=assistant
.. _Exo: https://fonts.google.com/specimen/Exo?query=Exo
.. _Montserrat: https://fonts.google.com/specimen/Montserrat?query=Montserrat
.. _Mulish: https://fonts.google.com/specimen/Mulish?query=Mulish
.. _Noto Sans: https://fonts.google.com/noto/specimen/Noto+Sans
.. _Nunito: https://fonts.google.com/specimen/Nunito?query=Nunito
.. _Ubuntu Mono: https://fonts.google.com/specimen/Ubuntu+Mono?query=Ubuntu+Mono
.. _Open Sans: https://fonts.google.com/specimen/Open+Sans?query=Open+Sans
.. _Red Hat Display: https://fonts.google.com/specimen/Red+Hat+Display?query=Red+Hat+Display
.. _Sofia Sans: https://fonts.google.com/specimen/Sofia+Sans?query=Sofia+Sans
.. _Ubuntu: https://fonts.google.com/specimen/Ubuntu?query=Ubuntu
.. _Varta: https://fonts.google.com/specimen/Varta?query=Varta
.. _Work Sans: https://fonts.google.com/specimen/Work+Sans?query=Work+Sans
.. _Fira Code: https://fonts.google.com/specimen/Fira+Code?query=Fira+Code
.. _Red Hat Mono: https://fonts.google.com/specimen/Red+Hat+Mono?query=Red+Hat+Mono
