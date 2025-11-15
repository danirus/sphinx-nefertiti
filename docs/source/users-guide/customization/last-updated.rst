.. _last-updated:

Last Updated Timestamp
######################

If your Sphinx content is managed in ``git`` The Nefertiti theme can automatically insert a *"Last updated on <timestamp>"* in the footer for you.

To enable this feature, one must install the Sphinx extension, ``sphinx_last_updated_by_git``, and declare it in the ``conf.py``...

.. code-block:: python

    extensions = [
        # ... Existing Extensions ...
        'sphinx_last_updated_by_git'
    ]
