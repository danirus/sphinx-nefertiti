.. _last-updated:

Last Updated Timestamp
######################

If your Sphinx content is managed in ``git``, the Nefertiti theme can automatically insert a *"Last updated on <timestamp>"* in the footer for you.

To enable this feature, one must install the Sphinx extension, `sphinx-last-updated-by-git <https://pypi.org/project/sphinx-last-updated-by-git/>`_, and declare it in ``conf.py``...

.. code-block:: python

    extensions = [
        # ... Existing Extensions ...
        'sphinx_last_updated_by_git'
    ]
