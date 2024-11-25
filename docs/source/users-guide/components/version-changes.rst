.. _version-changes:

###############
Version changes
###############

Sphinx has support for a group of special directives to help describe changes between versions:

* ``versionadded``
* ``versionchanged``
* ``deprecated``
* ``versionremoved``

To read about them, follow `this link <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#describing-changes-between-versions>`_ to the Sphinx documentation.

Examples
********

Without text
============

Examples of ``versionadded``, ``versionchanged``, ``deprecated`` and ``versionremoved`` getting only the version parameter.

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionadded} 5.15
            :::

        .. versionadded:: 5.15

        |br|

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionadded:: 5.15

        .. versionadded:: 5.15

        |br|

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionchanged} 5.15
            :::

        .. versionchanged:: 5.15

        |br|

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionchanged:: 5.15

        .. versionchanged:: 5.15

        |br|

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{deprecated} 5.15
            :::

        .. deprecated:: 5.15

        |br|

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. deprecated:: 5.15

        .. deprecated:: 5.15

        |br|

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionremoved} 5.15
            :::

        .. versionremoved:: 5.15

        |br|

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionremoved:: 5.15

        .. versionremoved:: 5.15

        |br|


With text
=========

Examples of ``versionadded``, ``versionchanged``, ``deprecated`` and ``versionremoved`` getting the version parameter and an explanatory text.

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionadded} 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.
            :::

        .. versionadded:: 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionadded:: 7.0
                The date/time types datetime and timespan have been superseded
                by the SQL92-defined types timestamp and interval. Although
                there has been some effort to ease the transition by allowing
                PostgreSQL to recognize the deprecated type names and translate
                them to the new type names, this mechanism cannot be completely
                transparent to your existing application.

        .. versionadded:: 7.0
            The date/time types datetime and timespan have been superseded
            by the SQL92-defined types timestamp and interval. Although
            there has been some effort to ease the transition by allowing
            PostgreSQL to recognize the deprecated type names and translate
            them to the new type names, this mechanism cannot be completely
            transparent to your existing application.

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionchanged} 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.
            :::

        .. versionchanged:: 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionchanged:: 7.0
                The date/time types datetime and timespan have been superseded
                by the SQL92-defined types timestamp and interval. Although
                there has been some effort to ease the transition by allowing
                PostgreSQL to recognize the deprecated type names and translate
                them to the new type names, this mechanism cannot be completely
                transparent to your existing application.

        .. versionchanged:: 7.0
            The date/time types datetime and timespan have been superseded
            by the SQL92-defined types timestamp and interval. Although
            there has been some effort to ease the transition by allowing
            PostgreSQL to recognize the deprecated type names and translate
            them to the new type names, this mechanism cannot be completely
            transparent to your existing application.

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{deprecated} 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.
            :::

        .. deprecated:: 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. deprecated:: 7.0
                The date/time types datetime and timespan have been superseded
                by the SQL92-defined types timestamp and interval. Although
                there has been some effort to ease the transition by allowing
                PostgreSQL to recognize the deprecated type names and translate
                them to the new type names, this mechanism cannot be completely
                transparent to your existing application.

        .. deprecated:: 7.0
            The date/time types datetime and timespan have been superseded
            by the SQL92-defined types timestamp and interval. Although
            there has been some effort to ease the transition by allowing
            PostgreSQL to recognize the deprecated type names and translate
            them to the new type names, this mechanism cannot be completely
            transparent to your existing application.

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{versionremoved} 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.
            :::

        .. versionremoved:: 7.0
            The date/time types datetime and timespan have been superseded by
            the SQL92-defined types timestamp and interval. Although there has
            been some effort to ease the transition by allowing PostgreSQL to
            recognize the deprecated type names and translate them to the new
            type names, this mechanism cannot be completely transparent to your
            existing application.

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. versionremoved:: 7.0
                The date/time types datetime and timespan have been superseded
                by the SQL92-defined types timestamp and interval. Although
                there has been some effort to ease the transition by allowing
                PostgreSQL to recognize the deprecated type names and translate
                them to the new type names, this mechanism cannot be completely
                transparent to your existing application.

        .. versionremoved:: 7.0
            The date/time types datetime and timespan have been superseded
            by the SQL92-defined types timestamp and interval. Although
            there has been some effort to ease the transition by allowing
            PostgreSQL to recognize the deprecated type names and translate
            them to the new type names, this mechanism cannot be completely
            transparent to your existing application.


.. |br| raw:: html

     <p/>
