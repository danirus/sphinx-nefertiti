.. _git-repository:

Git repository
##############

When using Nefertiti to document a product hosted in a Git repository, the header can be customize to display it. At the time of this writing only GitHub and GitLab hosting services are supported.

Theme options
=============

The two options to customize the Git repository are:

 #. ``repository_url``
 #. ``repository_name``

1. ``repository_url``
---------------------

Feed the ``repository_url`` with the HTTP URL of your repository. Using the ``git`` schema will not work:

 * Example to GitHub: ``https://github.com/torvalds/linux``
 * Example to GitLab: ``https://gitlab.com/inkscape/inkscape``
 * Example to GLib at GNOME's GitLab: ``https://gitlab.gnome.org/GNOME/glib``

2. ``repository_name``
----------------------

The ``repository_name`` can be any string that works for you.

Customize Git repository
========================

Edit your ``conf.py`` module and add the repository options to the ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... Other options here ...
        "repository_url": "https://gitlab.gnome.org/GNOME/glib",
        "repository_name": "GNOME / GLib"
    }

Rebuild the theme
=================

Save the previous changes and rebuild your Sphinx site:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.
