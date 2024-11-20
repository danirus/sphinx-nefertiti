.. _header-links:

Header links
############

Nefertiti for Sphinx can display links in the header, either in the same row as the rest of the header elements, or if there were many links, in a second row below the main header.

In the first row
================

.. figure:: img/header-links-one-row.png
    :alt: Nefertiti header with links next to the project name.
    :width: 520px
    :align: right
    :class: border-radius-1

Having a few link items allows for displaying them in one row along with the rest of the elements in the header. In need for further customization, like increasing the font size of the links, you can always provide your own CSS file to overwrite the styling. The element holding the header links has the CSS class ``nftt-header-links-large``.

In the second row
=================

.. figure:: img/header-links-2nd-row.png
    :alt: Nefertiti header with links below the project name.
    :width: 479px
    :align: right
    :class: border-radius-1

Displaying several links might not fit well in one line together with the rest of the items in the header. In such a case they can be displayed below the name of the project. In the example image the second item is a dropdown item. Dropdown items group header links together.


In narrow windows
=================

.. figure:: img/header-links-narrow-win.png
    :alt: Nefertiti header with links displayed in a narrow window.
    :width: 350px
    :align: right
    :class: border-radius-1

When resizing your browser window in your computer, or accessing a Sphinx site with a smaller device, like a phone or a tablet, the header resizes and hides the links under the menu in the right side of the header.

To further customize how the header links look like in a narrow window, you can provide your own CSS file and overwrite the CSS class ``nftt-header-links-small``.

Theme options
=============

The ``html_theme_options`` setting in Nefertiti for Sphinx can have two entries related with the display of header links:

#. The ``header_links`` entry is a list of Python dictionaries with the items to display.
#. The ``header_links_in_2nd_row`` entry is a boolean value.

1. ``header_links``
-------------------

Header links can be either **links** or **dropdown items**. Each header link may contain a ``text``, a ``link`` and an optional ``match``.

When the user visits the link given in a header-link, an underline will indicate that the item is the active header-link. If we want to display the underline with other pages that does not match the link, we can pass a Regular Expression (ore more than one) to indicate that pages matching the regular expression can be considered also part of the header-link.

Let's see it with some examples.

1.1. Simple header links
^^^^^^^^^^^^^^^^^^^^^^^^

The following ``header_links``, added to the ``html_theme_options`` setting of an example ``conf.py`` file, adds 3 links to the header, and by default the links are displayed next to the project's name. The header links are:

* A link to the `Buildbot <https://www.buildbot.net/>`_ homepage,
* a link to the tutorial page, and
* a link to the blog.

.. code-block:: python

    'header_links': [
        {
            'text': 'Home',
            'link': 'https://www.buildbot.net/',
        },
        {
            'text': 'Tutorial',
            'link': '/tutorial/index.html',
        },
        {
            'text': 'Blog',
            'link': 'https://medium.com/buildbot',
        },
    ],

.. figure:: img/buildbot-header-with-nefertiti.png
    :alt: Simulate a Buildbot header with links using Nefertiti for Sphinx.
    :width: 450px
    :align: center
    :class: border-radius-2

    The header displays the three links next to the project's name.

----

The **Tutorial** link points to a URL inside the Sphinx docs: ```/tutorial/index.html``. When the user clicks on it the URL is loaded and an underline will appear below the text of the link to indicate that **Tutorial** is the current *active* link:

.. figure:: img/buildbot-header-tutorial-active.*
    :alt: Simulate a Buildbot header with links using Nefertiti for Sphinx.
    :width: 450px
    :align: center
    :class: border-radius-2

    The location bar at ``/tutorial/index.html`` and the **Tutorial** with an underline to depict that it is the active headr link.


1.2. Header links with regexps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1.3. Header links with dropdowns
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1.4. Header links with dropdowns and regexps
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


2. ``header_links_in_2nd_row``
------------------------------

To display links in the second row, below the name of the project, define the option ``"header_links_in_2nd_row": True`` in the ``html_theme_options``, in your project's ``conf.py`` module.

Rebuild the theme
=================

With the previous changes in place, save the content, clean, build and serve your project again:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.
