.. _footnotes:

Footnotes
#########

Footnotes are a way to include additional information to a word or sentence without breaking the reading flow of a paragraph. The footnote is made of two elements, the anchor to the footnote, and the footnote itself.

This section shows how footnotes are displayed with Nefertiti for Sphinx. To know more about the syntax to include footnotes, checkout the docs:

 * When using `Markdown <https://myst-parser.readthedocs.io/en/latest/syntax/typography.html#footnotes>`_.
 * When using `reStructuredText <https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#footnotes>`_.

Example footnote 1
******************

To add a footnote first include the anchor to the footnote:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            A reference to the Human Rights [^1] in the press normally happens after a
            violation of their terms, but here it is mentioned as a link to a footnote so
            that the reader can continue reading until the end of the paragraph and then
            click on the link to further know the details about the link.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            A reference to the Human Rights [1]_ in the press normally happens after a
            violation of their terms, but here it is mentioned as a link to a footnote so
            that the reader can continue reading until the end of the paragraph and then
            click on the link to further know the details about the link.

Then, to include the footnote referenced above, add the following element to the bottom of the document:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            [^1]: The [Human Rights](https://www.un.org/en/global-issues/human-rights)
            declaration of the UN refer to the rights inherent to all human beings,
            regardless of race, sex, nationality, ethnicity, language, religion, or
            any other status.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. [1] The `Human Rights <https://www.un.org/en/global-issues/human-rights>`_
            declaration of the UN refer to the rights inherent to all human beings,
            regardless of race, sex, nationality, ethnicity, language, religion, or
            any other status.

This is the result
    A reference to the Human Rights [1]_ in the press normally happens after a
    violation of their terms, but here it is mentioned as a link to a footnote
    so that the reader can continue reading until the end of the paragraph and
    then click on the link to further know the details about the link.

When clicking on the link, the footnote at the bottom of the page will get highlighted and an arrow will be displayed from the label of the footnote to the content. Clicking on the footnote link at the bottom of the page will drive the browser back to the original anchor.

Example footnote 2
******************

A second example of a reference to a footnote:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            When writing Python code, please, remember to follow PEP8 [^2]. It might be
            tedious if you have not read it before, but it is worth to write code in a
            compliant way.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            When writing Python code, please, remember to follow PEP8 [2]_. It might be
            tedious if you have not read it before, but it is worth to write code in a
            compliant way.

And the footnote itself at the bottom of the document:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            [^2]: `PEP8 <https://peps.python.org/pep-0008/>`_ is the Style Guide
                for Python Code.


    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. [2] `PEP8 <https://peps.python.org/pep-0008/>`_ is the Style Guide
                for Python Code.


This is the result
    When writing Python code, please, remember to follow PEP8 [2]_. It might be
    tedious if you have not read it before, but it is worth to write code in a
    compliant way.

Another efficient way, very popular nowadays, is to let black [3]_ do the formatting of your code. Most of the times it does not require customization as the default settings are good enough for most of the projects.


.. [1] The `Human Rights <https://www.un.org/en/global-issues/human-rights>`_
    declaration of the UN refers to the rights inherent to all human beings, regardless of race, sex, nationality, ethnicity, language, religion, or any other status.

.. [2] `PEP8 <https://peps.python.org/pep-0008/>`_ is the Style Guide
    for Python Code.

.. [3] `Black <https://black.readthedocs.io/en/stable/>`_ is the
    uncompromising code formatter. By using Black, you agree to cede control over minutiae of hand-formatting. In return, Black gives you speed, determinism, and freedom from ``pycodestyle`` nagging about formatting.