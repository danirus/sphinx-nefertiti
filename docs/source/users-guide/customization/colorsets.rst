.. _colorsets:

Colorsets
#########

Nefertiti uses the default color palette provided by Bootstrap_ to implement different colorsets. You can select any of these colorsets using the ``style`` setting.

If you need specific colors you can customize them by overriding CSS variables in your own ``custom.css`` file or extending Nefertiti with your own colorset.

Colorset palette
****************

Based on the Bootstrap palette Nefertiti for Sphinx offers the following colorsets:

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

Test the different colorsets using the palette dropdown in the header. You can also add the colorset selection widget to your project by declaring ``show_colorset_choices`` inside the ``html_theme_options`` setting of your ``conf.py``:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "show_colorset_choices": True,

        # Reset the user selected choice after milliseconds.
        # "reset_colorset_choice_after_ms": 0,
    }

.. important::

    When adding ``"show_colorset_choices": True`` and building in ReadTheDocs, be sure to add ``sphinx_nefertiti`` as an extension to your ``extensions`` setting in ``conf.py``.


The ``style`` option
********************

To customize the colorset in your project add an entry ``style`` to the ``html_theme_options`` setting of your ``conf.py`` file and pass any of the colorsets given above. When ``style`` is not given the colorset applied is **cyan**:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style": "pink",
    }

Possible values are: ``blue``, ``indigo``, ``purple``, ``pink``, ``red``, ``orange``, ``yellow``, ``green``, ``tail`` and ``default`` (which is cyan).


The ``style_header_neutral`` option
***********************************

By default the header's background color does not change when switching between light and dark schemes. If you want it to adapt to light and dark schemes, turn on the ``style_header_neutral`` option:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "style_header_neutral": True,
    }


Custom CSS file
***************

To apply custom style changes on top of Nefertiti create your own stylesheet, say ``custom.css``, and add it to the ``html_style`` setting. For example, if you wanted to use the colorset **green** for your site but changing the color of the header you would do the following:

#. Create a new stylesheet, i.e: ``custom.css``, inside your source ``static`` directory with the style changes for the header.
#. Update your ``conf.py`` file:

   + Set ``html_style`` to ``["custom.css"]`` (that tells Sphinx to load ``custom.css``).
   + Set ``"style"`` to ``"green"`` inside ``html_theme_options``.

The next two sections detail the steps.

1. Create the ``custom.css`` stylesheet
=======================================

Create a ``custom.css`` file in the ``static`` directory next to your source documentation files. Add the following content to give the header a darker green tone with lighter green buttons, as in the Django_ website:

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

    # Add any paths that contain custom static files (such as style sheets)
    # here, relative to this directory. They are copied after the builtin
    # static files, so a file named "default.css" will overwrite the builtin
    # "default.css".
    html_static_path = ["static"]  # Sphinx will find here your custom.css.

Save the changes and rebuild your docs:

.. code-block:: shell

    make clean
    make html
    python -m http.server -d build/html

Now your Sphinx project should present a dark green navigation bar with a light green search button.


Create a new colorset
*********************

Creating a new colorset allows for fine-grained theme changes and higher level of control.

To create a new colorset clone the Nefertiti for Sphinx code repository, as explained in :ref:`dev-env-setup`. Also read the :ref:`style-development` section, the :ref:`python-development` section, and do the ``pip install`` commands.

A colorset is basically a complete new theme created out of the content given in the file named after the colorset: ``scss/sphinx-nefertiti-<colorset>.scss``.

To develop a new colorset go through the following steps:

#. Create ``.scss`` files.
#. Build the colorset.
#. Test the colorset.
#. Add the colorset to the Sphinx theme.
#. Use the colorset.

As an example the following sections show how to create a new colorset called **django** that tries to resemble the colors used in the Django_ website.

1. Create ``.scss`` files
=========================

Once completed the :ref:`dev-env-setup`, cd into the ``scss/`` directory of the Nefertiti for Sphinx code repository and create 3 new files. We will copy two of them from the **green** colorset:

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

If you had any other changes to apply specifically to the new ``django`` colorset, you would apply them here, in ``scss/_theme-django.scss``, as this file is included only when building ``sphinx-nefertiti-django.css``.

2. Build the colorset
======================

The ``package.json`` files offers two scripts to build style files:

* ``css-compile``: to compile all the SASS files within the ``scss/`` directory.
* ``watch-css``: to call ``css-compile`` when there are changes in the ``scss/`` directory.

.. code-block:: shell

    npm run css-compile


3. Test the colorset
=====================

Use the ``site/index.html`` file to test the new colorset. This file helps on testing new styles and new JavaScript functionality developed before it is integrated with the Sphinx theme.

By default ``site/index.html`` loads the ``css/sphinx-nefertiti.css`` file. Edit ``site/index.html`` to load instead ``css/sphinx-nefertiti-django.css``, in line 8:

.. code-block:: html

    <link rel="stylesheet" href="/css/sphinx-nefertiti-django.css">

Now use the ``serve-site`` Makefile target to serve the content of the ``site/`` directory:

.. code-block:: shell

    make serve-site

And finally visit http://localhost:8192 to see the new colorset in action.

If you want to continue changing your ``.scss`` files, let the ``npm run watch-css`` rebuild your style files and reload the content at http://localhost:8192 to see the changes.

4. Add the colorset to the Sphinx theme
========================================

Once the colorset is finished it has to be minified and copied inside the ``sphinx_nefertiti/colorsets/`` directory. The ``build-ext`` Makefile target helps with that.

Before the colorset can be used in the ``conf.py`` file the name has to be added to the variable ``all_colorsets`` inside the ``sphinx_nefertiti/colorsets.py`` module (update the tests to get extra points):

.. code-block: python

    all_colorsets = [
        "django",  // Add the new colorset.
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

5. Use the colorset
====================

The last step consist of using the new colorset with a Sphinx project. If you have run the ``pip install`` commands of the :ref:`python-development` section, you can use your new colorset with the documentation of Nefertiti for Sphinx:

.. code-block:: shell

    make serve-docs

It will build the documentation and serve it in http://localhost:8194. The **django** colorset has to be displayed in the dropdown at the top navigation bar.

To use the new colorset in your own Sphinx project, install the ``dist/`` file you prefer (either the ``.whl`` or the ``tar.gz`` will work) in the Python environment of your Sphinx project (replace ``x.y.z`` in the below command with the version in your filename):

.. code-block:: python

    cd my-sphinx-project
    source venv/bin/activate
    pip install ../sphinx-nefertiti/dist/sphinx_nefertiti-x.y.z.tar.gz

Then, as usual, edit the ``conf.py`` file of your Sphinx project, and add the ``style`` attribute to the ``html_theme_options``:

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
