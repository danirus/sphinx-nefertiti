.. _fonts:

Fonts
#####

This document explains how you can customize your Sphinx project to use one of the fonts bundled with Nefertiti for Sphinx. It also explains how to add other fonts to your project.

About EU's GDPR
***************

Nefertiti for Sphinx does not redirect HTTP font requests to 3rd party providers. Instead, it comes with a set of fonts licensed for free distribution.

When serving EU based users, so long as you get the user's consent, you can still redirect font requests to a 3rd party font service provider. But Nefertiti for Sphinx does not provide the consent modal window, nor the logic in the case the user does not consent.

Instead, add your preferred fonts and use them with your Sphinx project. The section :ref:`adding-fonts` below explains the details.

Font settings
*************

There are 5 font face customization settings that can be added to ``html_theme_options``, in your ``conf.py``:

 * **sans_serif_font**: It is the default global site font used for everything except code blocks and inline code samples. It defaults to `Nunito`_.
 * **monospace_font**: It is the default monospace font used for code blocks and inline code samples. It defaults to `Red Hat Mono`_.
 * **project_name_font**: It is the font used to render the project's name in the header and the footer. When not given it default to the **sans_serif_font** option.
 * **documentation_font**: It is the font used to render the actual documentation contained in reStructuredText or Markdown files. It defaults to the **sans_serif_font**.
 * **doc_headers_font**: It is the font used to render documentation headers. When not given it defaults to the **Georgia** web safe font.

Additionally there are two font size settings:

 * **documentation_font_size**: Specifies the default font size for the documentation contained in reStructuredText or Markdown files. It defaults to ``1.0rem``, which corresponds to ``16px``.
 * **monospace_font_size**: Specifies the default font size to use with code blocks and inline code samples. It defaults to ``1.0rem``, corresponding to ``16px``.

You can ignore these settings and let Nefertiti for Sphinx use the default font settings, or you can customize them.

Fonts bundled with Nefertiti
****************************

Nefertiti for Sphinx is bundled with a group of fonts with licenses open for free distribution:

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

You can customize the font settings to use Web safe fonts. Unlike the previous fonts, web safe fonts are provided directly by the web browser, and therefore do not require to load additional resources to be rendered, making your Sphinx project lighter.

Here is a list of font categories and their web safe fonts provided by all major web browsers:

 * **Sans Serif**: Helvetica, Arial, Arial Black, Verdana, Tahoma, Trebuchet MS, Gill Sans
 * **Serif**: Times New Roman, Georgia, Palatino, Baskerville
 * **Monospace**: Andale Mono, Courier, Lucida, Monaco
 * **Calligraphy**: Bradley Hand
 * **Cursive**: Brush Script MT, Comic Sans MS
 * **Fantasy**: Impact, Luminari

Example configuration
*********************

Customize the font settings by editing your ``conf.py`` module and updating the ``html_theme_options`` entry. These are the values used by the Nefertiti for Sphinx documentation:

.. code-block:: python

    html_theme_options = {
        # "sans_serif_font": "Nunito",  # Default value, no need to provide.
        "documentation_font": "Open Sans",
        "monospace_font": "Ubuntu Mono",
        "monospace_font_size": "1.1rem",
        # "project_name_font": "Nunito",  # Default value, no need to provide.
        # "documentation_font_size": "1.0rem",  # Default value, no need to provide.
        # "doc_headers_font": "Georgia",  # Default value, no need to provide.
    }

Try the rest of the settings to find a combination of fonts that suits you. Or keep reading to find out how to add your preferred fonts.

.. _adding-fonts:

Adding fonts
************

Using a font not distributed with Nefertiti for Sphinx requires to:

 #. Create a directory to keep the font files.
 #. Get the font family files.
 #. Write the ``font-face`` declaration.
 #. Modify ``conf.py`` to make use of the font.
 #. Rebuild the project.

The following 5 sections explain in detail the steps to make the font `Noto Sans`_ available to your Sphinx project using Nefertiti for Sphinx.

1. Create font directory
========================

In the source directory of your project, where you have your reStructuredText or Markdown files, create a directory called ``fonts``, and inside it create another one called ``noto-sans``:

.. code-block:: shell

    cd my-sphinx-project
    mkdir -p fonts/noto-sans


2. Get font family
==================

`Noto Sans`_ has an OFL, Open Font License, which allows you to use the font with your project. Follow the previous link to visit Google Fonts and click on the "Download family" button.

The Noto Sans font family has 18 font files of which Nefertiti will use only 2:

 * ``NotoSans-Regular.ttf``
 * ``NotoSans-Bold.ttf``

Copy these two files inside the ``fonts/noto-sans`` directory.

3. Write ``font-face``
======================

Create a file ``stylesheet.css`` inside ``fonts/noto-sans``, add the ``font-face`` declaration, and save it:

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

Edit your ``conf.py`` file and modify the ``html_theme_options`` setting to add the Noto Sans font as the ``documentation_font``:

.. code-block:: python

    html_theme_options = {
        # ... Other options here ...
        documentation_font: "Noto Sans",
    }

5. Build the project
====================

Once the previous steps have been completed the project can be built. The font files will be copied to the ``static`` directory ready to be served:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Once the project has been built, take a look at the generated ``static`` directory, it can be in:

 * ``build/html/_static``, or
 * ``_build/html/_static``, or
 * ``_build/html/static``, or similar.

An ``ls`` command should show the ``fonts`` directory containing the ``noto-sans`` directory and the files you created inside.

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