.. _source-links:

Document source links
#####################

Sphinx offers two settings that help to visualize the input text used to build each HTML page:

* ``html_copy_source`` `[1] <https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_copy_source>`_
* ``html_show_sourcelink`` `[2] <https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_show_sourcelink>`_


Show source
===========

When ``html_copy_source`` is ``True`` Sphinx copies the input files to the output directory and adds their paths to the HTML context. Nefertiti displays the link to each source input file using the following icon:

.. image:: img/file-earmark-code.svg
    :height: 50px
    :align: center
    :class: .icon

It is displayed at the top of the document, in the same line as the breadcrumbs, aligned to the right.

Show source in repository
=========================

The ``html_show_sourcelink`` setting is used in combination with the configuration option ``docs_repository_url`` that goes in the ``html_theme_options``:

.. code-block:: python

    html_show_sourcelink = True
    html_theme_options = {
        # ...other options...
        "docs_repository_url": "https://code.net/repo/tree/main/docs/source/",
    }

When ``html_show_sourcelink`` is ``True`` and ``docs_repository_url`` contains the URL to your documentation repository, Nefertiti displays a link to the input file in the repository, represented with the following icon:

.. image:: img/pencil.svg
    :height: 50px
    :align: center
    :class: .icon

It is displayed at the top of the document, in the same line as the breadcrumbs, aligned to the right.
