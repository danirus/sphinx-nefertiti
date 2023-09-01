.. _version-dropdown:

Version dropdown
################

If your Sphinx documentation is available for more than one version of your project, Nefertiti for Sphinx can display a dropdown in the header to switch between each of the documentation sites.

If you use readthedocs_ to host your documentation and it serves multiple versions, Nefertiti will include them automatically in the Version dropdown. There is no need to add anything else.

However, you can manually include the Version dropdown by providing a list of versions with their links.

Theme option
============

Add the ``versions`` key to your ``html_theme_options`` setting in the ``conf.py`` file, and provide a list of tuples ``(version, link)``. If your project has the following versions and their corresponding links:

.. list-table::
    :header-rows: 1

    * - Version
      - URL
    * - v2.9.9
      - https://sample-project.readthedocs.io/en/latest/
    * - v2.8.5
      - https://sample-project.readthedocs.io/en/2.8.5/
    * - v2.7.2
      - https://sample-project.readthedocs.io/en/2.7.2/

You could add them to the Version dropdown by adding the following content to the ``versions`` key in the ``html_theme_options`` setting:

.. code-block:: python

    html_theme_options = {
        # ... other options ...
        "versions": [
            ("v2.9.9", "https://sample-project.readthedocs.io/en/latest/"),
            ("v2.8.5", "https://sample-project.readthedocs.io/en/2.8.5/"),
            ("v2.7.2", "https://sample-project.readthedocs.io/en/2.7.2/"),
        ]
    }

Rebuild the theme
=================

Save the previous changes and rebuild your Sphinx site:

.. code-block:: shell

    $ make clean
    $ make html
    $ python -m http.server -d build/html

Visit http://localhost:8000 to take a look at the changes.


.. _readthedocs: https://readthedocs.org