Tables in reStructuredText
##########################

When writing documentation in reStructuredText you can use the standard syntax supported tables or you can use docutils table directives: ``table``, ``csv-table``, and ``list-table``.


Standard syntax
***************

reStructuredText standard syntax supports two types of tables, **simple tables**, and **grid tables**, both allow cell expansion.

Simple Tables
=============

`Simple tables <https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#simple-tables>`_ separate headings from the body using the equal character: ``=``. Columns are separated from each other with a column of one or more characters between them.

.. code-block:: reStructuredText

    ============ ============== ===============
    Header One    Header Two    Result
    ============ ============== ===============
    Nulla 1      Lacus 2        Hendrerit 3
    Dignissim 11 Morbi 12       Pellentesque 13
    Donec sit 21 Ullamcorper 22 Quis 23
    Phasellus 31 Ante 32        Tempus 33
    ============ ============== ===============

============ ============== ===============
Header One    Header Two    Result
============ ============== ===============
Nulla 1      Lacus 2        Hendrerit 3
Dignissim 11 Morbi 12       Pellentesque 13
Donec sit 21 Ullamcorper 22 Quis 23
Phasellus 31 Ante 32        Tempus 33
============ ============== ===============

Column span
-----------

In simple tables cells can span columns. Adding an extra row with hyphens determine how the columns of the row immediately above spans other columns.

In the following example there are two cells that span two columns. The first cell, with the text ``Inputs`` span two columns. Also the first row of the body, with the text ``Nulla 1 and Lacus 2`` span two columns.

.. code-block:: reStructuredText

    ============  ==============  ===============
    Inputs                        Output
    ----------------------------  ---------------
    Header One    Header Two      Result
    ============  ==============  ===============
    Nulla 1 and Lacus 2           Hendrerit 3
    ----------------------------  ---------------
    Dignissim 11  Morbi 12        Pellentesque 13
    Donec sit 21  Ullamcorper 22  Quis 23
    Phasellus 31  Ante 32         Tempus 33
    ============  ==============  ===============

============ ============== ===============
Inputs                      Output
--------------------------- ---------------
Header One    Header Two    Result
============ ============== ===============
Nulla 1 and Lacus 2         Hendrerit 3
--------------------------- ---------------
Dignissim 11 Morbi 12       Pellentesque 13
Donec sit 21 Ullamcorper 22 Quis 23
Phasellus 31 Ante 32        Tempus 33
============ ============== ===============


Grid Tables
===========

Unlike simple tables, `grid tables <https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#grid-tables>`_ allow both column and row spans. A sample grid table.

.. code:: reStructuredText

    +--------------+----------------+-----------------+
    | Header One   | Header Two     | Header Three    |
    +==============+================+=================+
    | Nulla 1      | Lacus 2        | Hendrerit 3     |
    +--------------+----------------+-----------------+
    | Dignissim 11 | Morbi 12       | Pellentesque 13 |
    +--------------+----------------+-----------------+
    | Donec sit 21 | Ullamcorper 22 | Quis 23         |
    +--------------+----------------+-----------------+
    | Phasellus 31 | Ante 32        | Tempus 33       |
    +--------------+----------------+-----------------+

+--------------+----------------+-----------------+
| Header One   | Header Two     | Header Three    |
+==============+================+=================+
| Nulla 1      | Lacus 2        | Hendrerit 3     |
+--------------+----------------+-----------------+
| Dignissim 11 | Morbi 12       | Pellentesque 13 |
+--------------+----------------+-----------------+
| Donec sit 21 | Ullamcorper 22 | Quis 23         |
+--------------+----------------+-----------------+
| Phasellus 31 | Ante 32        | Tempus 33       |
+--------------+----------------+-----------------+

Column and row span
-------------------

A grid table with column and row spans. The content of the cells can be in multiple lines and it can contain lists or other reStructuredText elements.

.. code-block:: reStructuredText

    +--------------+-----------------+-----------------+
    | Header One   | Header Two      | Header Three    |
    +==============+=================+=================+
    | Nulla 1, Lacus 2 and Hendrerit 3                 |
    +--------------+-----------------+-----------------+
    | Dignissim 11 | Morbi 12        | Pellentesque 13 |
    +--------------+-----------------+-----------------+
    | Donec sit 21 | Praesent vel    | * Quis 23       |
    +--------------+ diam in mi      | * Tempus 33     |
    | Phasellus 31 | varius molestie | * Pretium 43    |
    +--------------+-----------------+-----------------+


+--------------+-----------------+-----------------+
| Header One   | Header Two      | Header Three    |
+==============+=================+=================+
| Nulla 1, Lacus 2 and Hendrerit 3                 |
+--------------+-----------------+-----------------+
| Dignissim 11 | Morbi 12        | Pellentesque 13 |
+--------------+-----------------+-----------------+
| Donec sit 21 | Praesent vel    | * Quis 23       |
+--------------+ diam in mi      | * Tempus 33     |
| Phasellus 31 | varius molestie | * Pretium 43    |
+--------------+-----------------+-----------------+

``table`` directive
*******************

Docutils `table directive <https://docutils.sourceforge.io/docs/ref/rst/directives.html#table>`_ provides extended styling capabilities to render tables and allows for the inclusion of a caption:

.. code-block:: reStructuredText

    .. table:: Table caption
      :width: 65%
      :widths: auto
      :align: center

      +--------------+----------------+-----------------+
      | Header One   | Header Two     | Header Three    |
      +==============+================+=================+
      | Nulla 1      | Lacus 2        | Hendrerit 3     |
      +--------------+----------------+-----------------+
      | Dignissim 11 | Morbi 12       | Pellentesque 13 |
      +--------------+----------------+-----------------+
      | Donec sit 21 | Ullamcorper 22 | Quis 23         |
      +--------------+----------------+-----------------+
      | Phasellus 31 | Ante 32        | Tempus 33       |
      +--------------+----------------+-----------------+

.. table:: Table caption
  :width: 65%
  :widths: auto
  :align: center

  +--------------+----------------+-----------------+
  | Header One   | Header Two     | Header Three    |
  +==============+================+=================+
  | Nulla 1      | Lacus 2        | Hendrerit 3     |
  +--------------+----------------+-----------------+
  | Dignissim 11 | Morbi 12       | Pellentesque 13 |
  +--------------+----------------+-----------------+
  | Donec sit 21 | Ullamcorper 22 | Quis 23         |
  +--------------+----------------+-----------------+
  | Phasellus 31 | Ante 32        | Tempus 33       |
  +--------------+----------------+-----------------+


``csv-table`` directive
***********************

Docutils ``csv-table`` directive creates a table from Comma-Separated-Values data. Take a look at the `csv-table entry <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table-1>`_ in the docutils documentation to see the long list of customizable parameters.

Here is an example of the simple table above with a caption and some styling customization:

.. code-block:: reStructuredText

    .. csv-table:: Table caption
      :header: "Header One", "Header Two", "Header Three"
      :width: 65%
      :widths: auto
      :align: center

      "Nulla 1", "Lacus 2", "Hendrerit 3"
      "Dignissim 11", "Morbi 12", "Pellentesque 13"
      "Donec sit 21", "Ullamcorper 22", "Quis 23"
      "Phasellus 31", "Ante 32", "Tempus 33"

.. csv-table:: Table caption
  :header: "Header One", "Header Two", "Header Three"
  :width: 65%
  :widths: auto
  :align: center

  "Nulla 1", "Lacus 2", "Hendrerit 3"
  "Dignissim 11", "Morbi 12", "Pellentesque 13"
  "Donec sit 21", "Ullamcorper 22", "Quis 23"
  "Phasellus 31", "Ante 32", "Tempus 33"


``list-table`` directive
************************

Docutils ``list-table`` directive creates a table from data in a uniform two-level bullet list. “Uniform” means that each sublist (second-level list) must contain the same number of list items.

Read `here <https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table>`_  the complete documentation about the ``list-table`` directive provided by docutils.

Below is an example use of the list-table directive:

.. code-block:: reStructuredText

  .. list-table:: Board games
    :widths: 20 15 65
    :header-rows: 1

    * - Name
      - Number of players
      - Description
    * - Catan
      - 3 to 4
      - Players take on the roles of settlers, each attempting to build and
        develop holdings while trading and acquiring resources. Players gain
        victory points as their settlements grow and the first to reach a set
        number of victory points, typically 10, wins.
    * - Ticket to Ride
      - 2 to 5
      - Players collect and play train car cards to claim train routes across the
        map. Points are earned based on the length of the claimed routes, whoever
        completes the longest continuous railway, and whether the player can
        connect distant cities which are determined by drawing ticket cards.
    * - Chess
      - 2
      - An abstract strategy game that involves no hidden information and no
        elements of chance. Today, chess is one of the world's most popular games
        played by millions of people worldwide.

.. list-table:: Board games
  :widths: 20 15 65
  :header-rows: 1

  * - Name
    - Number of players
    - Description
  * - Catan
    - 3 to 4
    - Players take on the roles of settlers, each attempting to build and
      develop holdings while trading and acquiring resources. Players gain
      victory points as their settlements grow and the first to reach a set
      number of victory points, typically 10, wins.
  * - Ticket to Ride
    - 2 to 5
    - Players collect and play train car cards to claim train routes across the
      map. Points are earned based on the length of the claimed routes, whoever
      completes the longest continuous railway, and whether the player can
      connect distant cities which are determined by drawing ticket cards.
  * - Chess
    - 2
    - An abstract strategy game that involves no hidden information and no
      elements of chance. Today, chess is one of the world's most popular games
      played by millions of people worldwide.
