.. _contributing:

Contributing
############

Nefertiti for Sphinx is an Open Source project maintained by a small group of developers in their free time. Your contributions are welcome.

Ways to contribute
******************

Generally speaking, there are different ways to contribute:

* If something is not working, or
* if there is wrong or missing information in the documentation, or
* if you would like to suggest an idea or improvement,

please, create an entry in the `issues page <https://github.com/danirus/sphinx-nefertiti/issues>`_ of Nefertiti's repository and explain the details.

If you would like to get help about a topic related with Nefertiti for Sphinx, it is better to submit a question to the `discussions page <https://github.com/danirus/sphinx-nefertiti/discussions>`_.

If you are from a non English-speaking culture, and your language is not supported yet by Nefertiti, please consider contributing by adding your own language.

.. _contribute-a-locale:

Localize the theme
******************

The theme elements provided by Nefertiti (dropdown menus, pagination links, etc.) are written in English and translated to German and Spanish by native speakers. Ideally the project would have to be available in every language human beings can use to communicate. The more the merrier.

The size of the catalog to translate is relative short. Take a look by yourself: `sphinx.pot <https://github.com/danirus/sphinx-nefertiti/blob/main/sphinx_nefertiti/locale/sphinx.pot>`_.

The steps to add support for a new language are the following:

#. Create a new catalog
#. Translate the messages

It is recommended to :ref:`setup the development environment <dev-env-setup>` before going through those steps. Once you have translated the messages please, send a pull-request to the GitHub repository.


1. Create a new catalog
=======================

To add support for a new language the first step is to create a new message catalog. The list of messages to translate is already available in ``sphinx_nefertiti/locale/sphinx.pot``. To add a new catalog use the following command. ie: to add French you would use ``fr`` as the ``LOCALE``:

.. code-block:: bash

    make l10n-init-locale LOCALE=fr

As a result you will get a new directory ``sphinx_nefertiti/locale/fr``. Inside its subdirectory ``LC_MESSAGES`` there is a new file ``sphinx.po`` with the messages to translate.

2. Translate the messages
=========================

Edit the ``sphinx.po`` file created in the previous step and add the translations. Each ``msgid`` contains the original text in English, found in the source code. Below each ``msgid`` there is a ``msgstr`` for the corresponding translation.

----

.. highlights::

    Thank you!!

    -- From the developers of Nefertiti for Sphinx
