.. _headings:

Headings
########

There are 6 levels of headings in both, Markdown and reStructuredText.

Headings in reStructuredText
****************************

Headings in Sphinx, when using reStructuredText, are created by underlining the section title with a punctuation character, at least as long as the text.

The underlining character can be any so long as the author of the document keeps a consistent selection, as the structure is determined from the succession itself.

This is the convention used in the `Python Developer's Guide <https://devguide.python.org/documentation/markup/#sections>`_ for the underlining characters:

#. Use ``#`` to underline 1st level headers.
#. Use ``*`` to underline 2nd level headers.
#. Use ``=`` to underline 3rd level headers.
#. Use ``-`` to underline 4th level headers.
#. Use ``^`` to underline 5th level headers.
#. Use ``"`` to underline 6th level headers.

.. code-block:: reStructuredText

    Headings
    ########

    Headings in Sphinx, when using reStructuredText, ...

Headings in Markdown
********************

In Markdown the headers are given by prepending the title with a number of ``#`` characters. The character ``#`` is called **hash** (journalists often say **hash tag**, most probably due to the influence of Twitter).

In Markdown headers would be prepended by a number of ``#`` characters depending on the level of the header:

#. ``#`` in a 1st level header.
#. ``##`` in a 2nd level header.
#. ``###`` in a 3rd level header.
#. ``####`` in a 4th level header.
#. ``#####`` in a 5th level header.
#. ``######`` in a 6th level header.

In Markdown headers can optionally be suffixed too, with the same number of ``#`` characters they have been prefixed:

.. code-block:: markdown

    # Headings #

    Headings in Sphinx, when using reStructuredText, ...

Title at 2nd level
******************

Donec et scelerisque justo, et feugiat massa. Vestibulum pharetra efficitur mauris, ac lacinia lectus aliquam at. Duis hendrerit justo tortor, vel suscipit nisl consectetur eget.

Title at 3rd level with ``code``
================================

Nullam et nulla non massa dignissim commodo. Duis sit amet malesuada urna. Suspendisse sodales ornare eros ac feugiat. Mauris vitae convallis elit.

Title at 4th level
------------------

Mauris aliquet, purus vitae congue feugiat, sem arcu posuere turpis, at cursus orci tellus nec sapien. Vestibulum iaculis congue imperdiet.

Title at 5th level
^^^^^^^^^^^^^^^^^^

Curabitur tincidunt egestas mi. In purus velit, semper id ultricies in, cursus eget ipsum. Duis sed turpis ut nisl venenatis posuere ut sit amet nisi.

``5th-level as code``
^^^^^^^^^^^^^^^^^^^^^

Curabitur tincidunt egestas mi. In purus velit, semper id ultricies in, cursus eget ipsum. Duis sed turpis ut nisl venenatis posuere ut sit amet nisi.


Title at 6th level
""""""""""""""""""

Donec dapibus porta dolor. Morbi libero odio, vulputate vel metus id, accumsan malesuada libero. Etiam mollis finibus porttitor. Vestibulum ut quam odio.

