.. _color-sets:

Color sets
##########

Nefertiti uses the default color palette provided by Bootstrap_ to implement different color sets. You can select any of these color sets using the ``style`` setting.

If you need specific colors you can customize them by overriding CSS variables in your own ``custom.css`` file or extending Nefertiti with your own color set.

Color set palette
*****************

Based on the Bootstrap palette Nefertiti for Sphinx offers the following color set choices:

.. grid:: 1 2 3 3
    :class-container: py-2
    :gutter: 3

    .. grid-item-card:: Blue
        :class-card: blue-bg
        :shadow: none

        #0d6efd

    .. grid-item-card:: Indigo
        :class-card: indigo-bg
        :shadow: none

        #6610f2

    .. grid-item-card:: Purple
        :class-card: purple-bg
        :shadow: none

        #6f42c1

    .. grid-item-card:: Pink
        :class-card: pink-bg
        :shadow: none

        #d63384

    .. grid-item-card:: Red
        :class-card: red-bg
        :shadow: none

        #dc3545

    .. grid-item-card:: Orange
        :class-card: orange-bg
        :shadow: none

        #fd7e14

    .. grid-item-card:: Yellow
        :class-card: yellow-bg
        :shadow: none

        #ffc107

    .. grid-item-card:: Green
        :class-card: green-bg
        :shadow: none

        #078349

    .. grid-item-card:: Teal
        :class-card: teal-bg
        :shadow: none

        #20c997

    .. grid-item-card:: Cyan (default)
        :class-card: cyan-bg
        :shadow: none

        #0dcaf0

Test the different color sets using the palette dropdown in the header. The colors listed in the dropdown represent the available color sets.

The ``style`` setting
*********************

To customize the color set in your project add an entry ``style`` to the ``html_theme_options`` setting of your ``conf.py`` file and pass any of the color sets given above. When ``style`` is not given the color set applied is **cyan**:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style": "pink"
    }

Save the changes and rebuild the site:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.

Custom CSS file
***************

To apply custom style changes on top of Nefertiti you can create your own stylesheet and pass it in Sphinx' ``html_style`` setting.

For example, if you wanted to use the color set **green** but using different colors in the header you would do the following:

 #. Create a new stylesheet, say a new ``custom.css`` file, inside your source ``_static`` directory with the style changes you want to apply to the header, and
 #. Update your ``conf.py`` file to change two entries:

    * Set your ``html_style`` to ``["custom.css"]`` at module scope, to tell Sphinx to load the new stylesheet when building the site.
    * Set ``"style"`` to ``"green"`` inside ``html_theme_options``.

The next two sections implement the changes.

1. Create the ``custom.css`` stylesheet
=======================================

Create a ``custom.css`` file in the ``_static`` directory next to your source documentation files. Add the following content to give the header a darker green tone with lighter green buttons, as in the Django_ website:

.. code-block:: css

    :root {
        --nftt-primary-rgb: 12,75,51 !important;
    }

    .btn-primary {
        --nftt-btn-bg: #44b78b !important;
        --nftt-btn-border-color: #44b78b !important;
        --nftt-btn-hover-bg: #51be95 !important;
        --nftt-btn-hover-border-color: #51be95 !important;
        --nftt-btn-active-bg: #41b085 !important;
        --nftt-btn-active-border-color: #41b085 !important;
        --nftt-btn-disabled-bg: #9eb2a9 !important;
        --nftt-btn-disabled-border-color: !important;
    }

It will darken the navigation bar in the header and use a light green for the buttons.

2. Update your ``conf.py``
==========================

Next, edit your ``conf.py`` file and modify the following entries:

.. code-block:: python

    # Theme options are theme-specific and customize the look and feel of a
    # theme further.  For a list of options available for each theme, see the
    # documentation.
    html_theme_options = {
        "style": "green"
    }

    # The style sheet to use for HTML pages. A file of that name must exist
    # either in Sphinx’s static/ path, or in one of the custom paths given
    # in html_static_path.
    html_style = ["custom.css"]

Save the changes and rebuild your docs:

.. code-block:: shell

    make clean
    make html
    python -m http.server -d build/html

Now your Sphinx project should present a dark green navigation bar with a light green search button. The site colors resemble those of the Django website, however the colors of the links are different, and the footer too.

To make more style changes it is worth considering to create a new color set.

Create a new color set
**********************

Creating a new color set allows for fine-grained theme changes and higher level of control.

To create a new color set clone the Nefertiti for Sphinx code repository, as explained in :ref:`dev-env-setup`. Also read the :ref:`style-development` section, the :ref:`python-development` section, and do the ``pip install`` commands.

A color set is basically a complete new theme created out of the content given in the file named after the color set: ``scss/sphinx-nefertiti-<colorset>.scss``.

To develop a new color set we need to go through the following steps:

 #. Create ``.scss`` files.
 #. Build the color set.
 #. Test the color set.
 #. Add the color set to the Sphinx theme.
 #. Use the color set.

As an example the following sections show how to create a new color set called **django** that tries to resemble the colors used in the Django_ website.

1. Create ``.scss`` files
=========================

Once completed the :ref:`dev-env-setup`, cd into the ``scss/`` directory of the Nefertiti for Sphinx code repository and create 3 new files. We will copy two of them from the **green** color set:

.. code-block:: shell

    cd scss/
    cp _variables-green.scss _variables-django.scss
    cp sphinx-nefertiti-green.scss sphinx-nefertiti-django.scss
    touch _theme-django.scss

Edit ``scss/_variables-django.scss`` and replace the following variables with their new values:

.. code-block:: scss

    $green:   #44b78b !default;

    $scheme-light-body-color: #0c3c26;
    $scheme-light-foot2-bg: #44b78b;
    $scheme-light-foot2-link1: #fff;
    $scheme-light-foot2-link2: #fff;
    $scheme-light-foot2-link-bg: color.scale(
        $scheme-light-foot2-bg, $lightness: 10%, $saturation: 30%
    );
    $scheme-light-foot2-link-hover: #fff;
    $scheme-light-link-color: #20aa76;
    $scheme-light-link-hover-color: #25c488;

    $scheme-dark-body-color: #c1cad2;
    $scheme-dark-foot2-bg: #44b78b;
    $scheme-dark-foot2-link1: #fff;
    $scheme-dark-foot2-link2: #fff;
    $scheme-dark-foot2-link-hover: #fff;
    $scheme-dark-link-color: #93d7b7;
    $scheme-dark-link-hover-color: #25c488;

Then edit ``scss/_sphinx-nefertiti-django.scss``, replace the import in line 6 from ``"variables-green"`` to ``"variables-django"``, and add a line at the end to import the new ``scss/_theme-django.scss`` file:

.. code-block:: scss

    // 2. Include any default variable overrides here.
    @import "variables-django";

    // ...

    // Add at the bottom of the file:
    @import "theme-django";

Finally, add the following content to ``scss/_theme-django.scss``:

.. code-block:: scss

    /*
     * Change the color gradient implemented in "./components/navbar.scss".
     */
    .nftt-navbar {
      background-image: linear-gradient(
        to bottom, rgba(12, 75, 51, 1), rgba(12, 75, 51, .9)
      );
    }

    /*
     * Change the color of the selected item of the toc.
     */
    .toc .current > a {
      color: #fff;
    }

    /*
     * Change the color of the "built with" at the bottom of the footer.
     */
    .nftt-footer .built-with {
      color: #f6f6f6;

      a {
        color: #fff;
        text-decoration-color: var(--nftt-link-decoration-color);
      }
    }

If you had any other changes to apply specifically to the new ``django`` color set, you would apply them here, in ``scss/_theme-django.scss``, as this file is included only when building ``sphinx-nefertiti-django.css``.

2. Build the color set
======================

The ``package.json`` files offers two scripts to build style files:

 * ``css-compile``: to compile all the SASS files within the ``scss/`` directory.
 * ``watch-css``: to call ``css-compile`` when there are changes in the ``scss/`` directory.

.. code-block:: shell

    npm run css-compile


3. Test the color set
=====================

Use the ``site/index.html`` file to test the new color set. This file helps on testing new styles and new JavaScript functionality developed before it is integrated with the Sphinx theme.

By default ``site/index.html`` loads the ``css/sphinx-nefertiti.css`` file. Edit ``site/index.html`` to load instead ``css/sphinx-nefertiti-django.css``, in line 8:

.. code-block:: html

    <link rel="stylesheet" href="/css/sphinx-nefertiti-django.css">

Now use the ``serve-site`` Makefile target to serve the content of the ``site/`` directory:

.. code-block:: shell

    make serve-site

And finally visit http://localhost:8192 to see the new color set in action.

If you want to continue changing your ``.scss`` files, let the ``npm run watch-css`` rebuild your style files and reload the content at http://localhost:8192 to see the changes.

4. Add the color set to the Sphinx theme
========================================

Once the color set is finished it has to be minified and copied inside the ``sphinx_nefertiti/colorsets/`` directory. The ``build-ext`` Makefile target helps with that.

Before the color set can be used in the ``conf.py`` file of our Sphinx project, the name has to be added to the variable ``all_colorsets`` inside the ``sphinx_nefertiti/colorsets.py`` module:

.. code-block: python

    all_colorsets = [
        "django",  // Add the new color set.
        "blue",
        "indigo",
        "purple",
        "pink",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "default",
    ]

Then run ``build-ext`` to minify and copy the frontend assets to the Sphinx theme:

.. code-block: bash

    make build-ext

5. Use the color set
====================

The last step consist of using the new color set with a Sphinx project. If you have run the ``pip install`` commands of the :ref:`python-development` section, you can use your new color set with the documentation of Nefertiti for Sphinx:

.. code-block:: shell

    make serve-docs

It will build the documentation and serve it in http://localhost:8194. The **django** color set has to be displayed in the dropdown at the top navigation bar.

If you rather want to use the new color set in your own Sphinx project, edit the ``conf.py`` file, and add the ``style`` attribute to the ``html_theme_options``:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style": "django"
    }

Save the changes and rebuild your Sphinx site:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.


.. _Bootstrap: https://getbootstrap.com/docs/5.3/customize/color/#all-colors
.. _Django: https://www.djangoproject.com/