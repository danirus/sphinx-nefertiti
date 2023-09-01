.. _admonitions:

===========
Admonitions
===========

A Sphinx admonition consist of three elements:

 * the type of the admonition,
 * An optional title, and
 * the body, which is normally text.

Sphinx supports the following types of admonitions: **attention**, **caution**, **danger**, **error**, **hint**, **important**, **note**, **tip**, **warning**.

Admonitions are written like this in reStructuredText:

.. code-block:: rst

    .. type::

        Text of the admonition

Or like this in Markdown:

.. code-block:: markdown

    :::{type}
    Notes can provide complementary information.
    :::

Be aware that Markdown examples in this page are using ``"colon_fence"``. Read about it `here <https://myst-parser.readthedocs.io/en/latest/syntax/optional.html#code-fences-using-colons>`_.

In both cases replace the ``type`` with any of the possible type of admonitions: **admonition** (for custom admonitions with title), **attention**, **caution**, **danger**, **error**, **hint**, **important**, **note**, **tip** and **warning**.


Type: admonition
================

A custom admonition displayed as a **note** and with a title:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{admonition} The missing note G
            :class: note
            You will receive an error message in the future.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. admonition:: The missing note G
                :class: note

                There never was a Note G. I do not know why I chose H instead
                of G, & thus insulted the latter worthy letter. -- Ada Lovelace

.. admonition:: The missing note G
    :class: note

    There never was a Note G. I do not know why I chose H instead of G, & thus insulted the latter worthy letter. -- Ada Lovelace


Type: attention
===============

A sample **attention** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{attention}
            Windows has detected that you have moved your mouse.
            Please, restart your computer.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. attention::

                Windows has detected that you have moved your mouse.
                Please, restart your computer.

.. attention::

    Windows has detected that you have moved your mouse.
    Please, restart your computer.

Type: caution
=============

A sample **caution** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{caution}
            I have not had my coffee yet.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. caution::

                I have not had my coffee yet.

.. caution::

    I have not had my coffee yet.

Type: danger
============

A sample **danger** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{danger}
            If you click Ok all your files will be deleted.
            Be aware that there is no way to recover them.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. danger::

                If you click Ok all your files will be deleted.
                Be aware that there is no way to recover them.

.. danger::

    If you click Ok all your files will be deleted.
    Be aware that there is no way to recover them.

Type: error
===========

A sample **error** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{error}
            Your computer has been running for 10h 37m 23s.
            Microsoft does not allow a windows system to run
            longer than that. Your computer will now crash.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. error::

                Your computer has been running for 10h 37m 23s.
                Microsoft does not allow a windows system to run
                longer than that. Your computer will now crash.

.. error::

    Your computer has been running for 10h 37m 23s. Microsoft does not allow a windows system to run longer than that. Your computer will now crash.

Type: important
===============

A sample **important** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{important}
            I am on a Zoom call, Please, do not walk out naked!
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. important::

                I am on a Zoom call, Please, do not walk out naked!

.. important::

    I am on a Zoom call, Please, do not walk out naked!


Type: note
==========

A sample **note** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{note}
            Sending the file will not take too long, just 8.752.239.254 seconds.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. note::

                Sending the file will not take too long, just 8.752.239.254 seconds.

.. note::

    Sending the file will not take too long,
    just 8.752.239.254 seconds.

Type: tip
=========

A sample **tip** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{tip}
            Windows 95 was unable to detect your keyboard.
            Press F1 to retry or F2 to abort.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. tip::

                Windows 95 was unable to detect your keyboard.
                Press F1 to retry or F2 to abort.

.. tip::

    Windows 95 was unable to detect your keyboard. Press F1 to retry or F2 to abort.

Type: warning
=============

A sample **warning** admonition:

.. tab-set::

    .. tab-item:: Markdown
        :sync: md

        .. code-block:: markdown

            :::{warning}
            You will receive an error message in the future.
            :::

    .. tab-item:: reStructuredText
        :sync: rst

        .. code-block:: reStructuredText

            .. warning::

                You will receive an error message in the future.

.. warning::

    You will receive an error message in the future.
