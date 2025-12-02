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


.. _a-wide-table-in-rst:

A wide table example
********************

This is the `table of ISO 639 language codes <https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes>`_, taken from the Wikipedia.

.. table:: ISO 639 language codes

  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | ISO language name        | Set-1  | Set-2             | Set-3           | Scope          | Type        | Endonym(s)          | Other name(s)                          | Notes      |
  |                          |        +---------+---------+                 |                |             |                     |                                        |            |
  |                          |        | T       | B       |                 |                |             |                     |                                        |            |
  +==========================+========+=========+=========+=================+================+=============+=====================+========================================+============+
  | Abkhazian_               | ``ab`` | ``abk``           | ``abk``         | Individual     | Living      | |ab-endonyms|       | Abkhaz                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Afar_                    | ``aa`` | ``aar``           | ``aar``         | Individual     | Living      | Qafar af            |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Afrikaans_               | ``af`` | ``afr``           | ``afr``         | Individual     | Living      | Afrikaans           |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Akan_                    | ``ak`` | ``aka``           | ``aka``         | Macrolanguage_ | Living      | |ak-endonyms|       |                                        | |ak-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Albanian_                | ``sq`` | ``sqi`` | ``alb`` | ``sqi``         | Macrolanguage_ | Living      | Shqip               | Called *"Albanian Phylozone"* in 639-6 |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Amharic_                 | ``am`` | ``amh``           | ``amh``         | Individual     | Living      | |am-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Arabic_                  | ``ar`` | ``ara``           | ``ara``         | Macrolanguage_ | Living      | |ar-endonyms|       |                                        | |ar-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Aragones_                | ``an`` | ``arg``           | ``arg``         | Individual     | Living      | |an-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Armenian_                | ``hy`` | ``hye`` | ``arm`` | ``hye``         | Individual     | Living      | |hy-endonyms|       |                                        | |hy-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Assamese_                | ``as`` | ``asm``           | ``asm``         | Individual     | Living      | |as-endonyms|       | Asamiya                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Avaric_                  | ``av`` | ``ava``           | ``ava``         | Individual     | Living      | |av-endonyms|       | Avar                                   |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Avestan_                 | ``ae`` | ``ave``           | ``ave``         | Individual     | Historical  | |ae-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Aymara_                  | ``ay`` | ``aym``           | ``aym``         | Macrolanguage_ | Living      | Aymara              | Aymaran                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Azerbaijani_             | ``az`` | ``aze``           | ``aze``         | Macrolanguage_ | Living      | |az-endonyms|       | Azeri                                  |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bambara_                 | ``bm`` | ``bam``           | ``bam``         | Individual     | Living      | |bm-endonyms|       | Bamana; Bamanankan                     |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bashkir_                 | ``ba`` | ``bak``           | ``bak``         | Individual     | Living      | |ba-endonyms|       | Bashkort                               |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Basque_                  | ``eu`` | ``eus`` | ``baq`` | ``eus``         | Individual     | Living      | |eu-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Belarusian_              | ``be`` | ``bel``           | ``bel``         | Individual     | Living      | |be-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bengali_                 | ``bn`` | ``ben``           | ``ben``         | Individual     | Living      | |bn-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bislama_                 | ``bi`` | ``bis``           | ``bis``         | Individual     | Living      | Bislama             |                                        | |bi-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bosnian_                 | ``bs`` | ``bos``           | ``bos``         | Individual     | Living      | |bs-endonyms|       |                                        | |bo-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Breton_                  | ``br`` | ``bre``           | ``bre``         | Individual     | Living      | Brezhoneg           |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Bulgarian_               | ``bg`` | ``bul``           | ``bul``         | Individual     | Living      | |bg-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Burmese_                 | ``my`` | ``mya`` | ``bur`` | ``mya``         | Individual     | Living      | |my-endonyms|       | Myanmar                                |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Catalan_, Valencian      | ``ca`` | ``cat``           | ``cat``         | Individual     | Living      | |ca-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Chamorro_                | ``ch`` | ``cha``           | ``cha``         | Individual     | Living      | Finu' Chamoru       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Chechen_                 | ``ce`` | ``che``           | ``che``         | Individual     | Living      | |ce-endonyms|       | Chechnyan; Chechnian                   |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Chichewa_, Chewa, Nyanja | ``ny`` | ``nya``           | ``nya``         | Individual     | Living      | Chichewa; Chinyanja |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Chinese                  | ``zh`` | ``zho`` | ``chi`` | ``zho``         | Macrolanguage_ | Living      | |zh-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |cu-language|            | ``cu`` | ``chu``           | ``chu``         | Individual     | Historical  | |cu-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Chuvash_                 | ``cv`` | ``chv``           | ``chv``         | Individual     | Living      | |cv-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Cornish_                 | ``kw`` | ``cor``           | ``cor``         | Individual     | Living      | Kernowek            |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Corsican_                | ``co`` | ``cos``           | ``cos``         | Individual     | Living      | Corsu               |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Cree_                    | ``cr`` | ``cre``           | ``cre``         | Macrolanguage_ | Living      | |cr-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Croatian_                | ``hr`` | ``hrv``           | ``hrv``         | Individual     | Living      | Hrvatski            |                                        | |hr-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Czech_                   | ``cs`` | ``ces`` | ``cze`` | ``ces``         | Individual     | Living      | |cs-endonyms|       | Czechian                               |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Danish_                  | ``da`` | ``dan``           | ``dan``         | Individual     | Living      | Dansk               |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |dv-language|            | ``dv`` | ``div``           | ``div``         | Individual     | Living      | |dv-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Dutch_, Flemish_         | ``nl`` | ``nld`` | ``dut`` | ``nld``         | Individual     | Living      | Nederlands          |                                        | |nl-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Dzongkha_                | ``dz`` | ``dzo``           | ``dzo``         | Individual     | Living      | |dz-endonyms|       | Bhutanese                              |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | English_                 | ``en`` | ``eng``           | ``eng``         | Individual     | Living      | English             |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Esperanto_               | ``eo`` | ``epo``           | ``epo``         | Individual     | Constructed | Esperanto           |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Estonian_                | ``et`` | ``est``           | ``est``         | Macrolanguage_ | Living      | Eesti keel          |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ewe_                     | ``ee`` | ``ewe``           | ``ewe``         | Individual     | Living      | |ee-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Faroese_                 | ``fo`` | ``fao``           | ``fao``         | Individual     | Living      | |fo-endonyms|       | Faeroese                               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Fijian_                  | ``fj`` | ``fij``           | ``fij``         | Individual     | Living      | Na Vosa Vakaviti    |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Finnish_                 | ``fi`` | ``fin``           | ``fin``         | Individual     | Living      | Suomi               |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | French_                  | ``fr`` | ``fra`` | ``fre`` | ``fra``         | Individual     | Living      | |fr-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | West_Frisian_            | ``fy`` | ``fry``           | ``fry``         | Individual     | Living      | Frysk               | West Frisian; Frisian; Fries           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Fulah_                   | ``ff`` | ``ful``           | ``ful``         | Macrolanguage_ | Living      | |ff-endonyms|       | Fula; Fulani                           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Gaelic_, Scottish Gaelic | ``gd`` | ``gla``           | ``gla``         | Individual     | Living      | |gd-endonyms|       | Scots Gaelic                           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Galician_                | ``gl`` | ``glg``           | ``glg``         | Individual     | Living      | Galego              | Galego                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ganda_                   | ``lg`` | ``lug``           | ``lug``         | Individual     | Living      | Luganda             | Luganda                                |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Georgian_                | ``ka`` | ``kat`` | ``geo`` | ``kat``         | Individual     | Living      | |ka-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | German_                  | ``de`` | ``deu`` | ``ger`` | ``deu``         | Individual     | Living      | Deutsch             |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Greek_, Modern (1453-)   | ``el`` | ``ell`` | ``gre`` | ``ell``         | Individual     | Living      | |el-endonyms|       |                                        | |el-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |kl-language|            | ``kl`` | ``kal``           | ``kal``         | Individual     | Living      | Kalaallisut         |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Guarani_                 | ``gn`` | ``grn``           | ``grn``         | Macrolanguage_ | Living      | |gn-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Gujarati_                | ``gu`` | ``guj``           | ``guj``         | Individual     | Living      | |gu-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |ht-language|            | ``ht`` | ``hat``           | ``hat``         | Individual     | Living      | |ht-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Hausa_                   | ``ha`` | ``hau``           | ``hau``         | Individual     | Living      | |ha-endonyms|       | Hausan                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Hebrew_                  | ``he`` | ``heb``           | ``heb``         | Individual     | Living      | |he-endonyms|       |                                        | |he-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Herero_                  | ``hz`` | ``her``           | ``her``         | Individual     | Living      | Otjiherero          | Otjiherero                             |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Hindi_                   | ``hi`` | ``hin``           | ``hin``         | Individual     | Living      | |hi-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Hiri_Motu_               | ``ho`` | ``hmo``           | ``hmo``         | Individual     | Living      | Hiri Motu           | Police Motu; Pidgin Motu               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Hungarian_               | ``hu`` | ``hun``           | ``hun``         | Individual     | Living      | Magyar nyelv        | Magyar                                 |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Icelandic_               | ``is`` | ``isl`` | ``ice`` | ``isl``         | Individual     | Living      | |is-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ido_                     | ``io`` | ``ido``           | ``ido``         | Individual     | Constructed | Ido                 |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Igbo_                    | ``ig`` | ``ibo``           | ``ibo``         | Individual     | Living      | |ig-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Indonesian_              | ``id`` | ``ind``           | ``ind``         | Individual     | Living      | |id-endonyms|       |                                        | |id-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |ia-language|            | ``ia`` | ``ina``           | ``ina``         | Individual     | Constructed | Interlingua         |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Interlingue_, Occidental | ``ie`` | ``ile``           | ``ile``         | Individual     | Constructed | |ie-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Inuktitut_               | ``iu`` | ``iku``           | ``iku``         | Macrolanguage_ | Living      | |iu-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Inupiaq_                 | ``ik`` | ``ipk``           | ``ipk``         | Macrolanguage_ | Living      | |ik-endonyms|       | Inupiat; Inupiatun                     |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Irish_                   | ``ga`` | ``gle``           | ``gle``         | Individual     | Living      | Gaeilge             | Irish Gaelic                           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Italian_                 | ``it`` | ``ita``           | ``ita``         | Individual     | Living      | Italiano            |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Japanese_                | ``jp`` | ``jpn``           | ``jpn``         | Individual     | Living      | |jp-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Javanese_                | ``jv`` | ``jav``           | ``jav``         | Individual     | Living      | |jv-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kannada_                 | ``kn`` | ``kan``           | ``kan``         | Individual     | Living      | |kn-endonyms|       | Kannadan; Canarese                     |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kanuri_                  | ``kr`` | ``kau``           | ``kau``         | Macrolanguage_ | Living      | |kr-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kashmiri_                | ``ks`` | ``kas``           | ``kas``         | Individual     | Living      | |ks-endonyms|       | Koshur                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kazakh_                  | ``kk`` | ``kaz``           | ``kaz``         | Individual     | Living      | |kk-endonyms|       | Qazaq                                  |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Central_Khmer_           | ``km`` | ``khm``           | ``khm``         | Individual     | Living      | |km-endonyms|       | Khmer; Cambodian                       |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Gikuyu_, Gikuyu          | ``ki`` | ``kik``           | ``kik``         | Individual     | Living      | |ki-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kinyarwanda_             | ``rw`` | ``kin``           | ``kin``         | Individual     | Living      | |rw-endonyms|       | Rwandan; Rwanda; Ikinyarwanda          |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kyrgyz_, Kirghiz         | ``ky`` | ``kir``           | ``kir``         | Individual     | Living      | |ky-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Komi_                    | ``kv`` | ``kom``           | ``kom``         | Macrolanguage_ | Living      | |kv-endonyms|       | Zyran; Zyrian; Komi-Zyryan             |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kongo_                   | ``kg`` | ``kon``           | ``kon``         | Macrolanguage_ | Living      | Kikongo             | Kikongo                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Korean_                  | ``ko`` | ``kor``           | ``kor``         | Individual     | Living      | |ko-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kuanyama_, Kwanyama      | ``kj`` | ``kua``           | ``kua``         | Individual     | Living      | Oshikwanyama        | Cuanhama; Oshikwanyama                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Kurdish_                 | ``ku`` | ``kur``           | ``kur``         | Macrolanguage_ | Living      | |ku-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Lao_                     | ``lo`` | ``lao``           | ``lao``         | Individual     | Living      | |lo-endonyms|       | Laotian                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Latin_                   | ``la`` | ``lat``           | ``lat``         | Individual     | Historical  | Latinum             |                                        | |la-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Latvian_                 | ``lv`` | ``lav``           | ``lav``         | Macrolanguage_ | Living      | |lv-endonyms|       | Lettish                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |li-language|            | ``li`` | ``lim``           | ``lim``         | Individual     | Living      | |li-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Lingala_                 | ``ln`` | ``lin``           | ``lin``         | Individual     | Living      | |ln-endonyms|       | Ngala                                  |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Lithuanian_              | ``lt`` | ``lit``           | ``lit``         | Individual     | Living      | |lt-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Luba-Katanga_            | ``lu`` | ``lub``           | ``lub``         | Individual     | Living      | |lu-endonyms|       | Luba-Shaba                             |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |lb-language|            | ``lb`` | ``ltz``           | ``ltz``         | Individual     | Living      | |lb-endonyms|       | Luxembourgian                          |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Macedonian_              | ``mk`` | ``mkd`` | ``mac`` | ``mkd``         | Individual     | Living      | |mk-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Malagasy_                | ``mg`` | ``mlg``           | ``mlg``         | Macrolanguage_ | Living      | |mg-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Malay_                   | ``ms`` | ``msa`` | ``may`` | ``msa``         | Macrolanguage_ | Living      | |ms-endonyms|       |                                        | |ms-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Malayalam_               | ``ml`` | ``mal``           | ``mal``         | Individual     | Living      | |ml-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Maltese_                 | ``mt`` | ``mlt``           | ``mlt``         | Individual     | Living      | Malti               |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Manx_                    | ``gv`` | ``glv``           | ``glv``         | Individual     | Living      | |gv-endonyms|       | Manx Gaelic                            |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Maori_                   | ``mi`` | ``mri`` | ``mao`` | ``mri``         | Individual     | Living      | |mi-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Marathi_                 | ``mr`` | ``mar``           | ``mar``         | Individual     | Living      | |mr-endonyms|       | Maharashtran                           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Marshallese_             | ``mh`` | ``mah``           | ``mah``         | Individual     | Living      | |mh-endonyms|       | Ebon                                   |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Mongolian_               | ``mn`` | ``mon``           | ``mon``         | Macrolanguage_ | Living      | |mn-endonyms|       | Mongol                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Nauru_                   | ``na`` | ``nau``           | ``nau``         | Individual     | Living      | |na-endonyms|       | Nauruan                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Navajo_, Navaho          | ``nv`` | ``nav``           | ``nav``         | Individual     | Living      | |nv-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | North_Ndebele_           | ``nd`` | ``nde``           | ``nde``         | Individual     | Living      | |nd-endonyms|       | Northern Ndebele                       |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | South_Ndebele_           | ``nr`` | ``nbl``           | ``nbl``         | Individual     | Living      | |nr-endonyms|       | Southern Ndebele                       |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ndonga_                  | ``ng`` | ``ndo``           | ``ndo``         | Individual     | Living      | Ndonga              | Oshindonga                             |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Nepali_                  | ``ne`` | ``nep``           | ``nep``         | Macrolanguage_ | Living      | |ne-endonyms|       | Nepalese; Gorkhali                     |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Norwegian_               | ``no`` | ``nor``           | ``nor``         | Macrolanguage_ | Living      | Norsk               |                                        | |no-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |nb-language|            | ``nb`` | ``nob``           | ``nob``         | Individual     | Living      | |nb-endonyms|       |                                        | |nb-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |nn-language|            | ``nn`` | ``nno``           | ``nno``         | Individual     | Living      | |nn-endonyms|       |                                        | |nn-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Occitan_                 | ``oc`` | ``oci``           | ``oci``         | Individual     | Living      | |oc-endonyms|       | Provential; Provencal                  |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ojibwa_                  | ``oj`` | ``oji``           | ``oji``         | Macrolanguage_ | Living      | |oj-endonyms|       | Ojibwe; Ojibway; Otchipwe; Ojibwemowin |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Oriya_                   | ``or`` | ``ori``           | ``ori``         | Macrolanguage_ | Living      | |or-endonyms|       | Odian; Odishan; Orissan                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Oromo_                   | ``om`` | ``orm``           | ``orm``         | Macrolanguage_ | Living      | |om-endonyms|       | Oromoo                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ossetian_, Ossetic       | ``os`` | ``oss``           | ``oss``         | Individual     | Living      | |os-endonyms|       | Ossete                                 | |os-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Pali_                    | ``pi`` | ``pli``           | ``pli``         | Individual     | Historical  | |pi-endonyms|       | Pali-Magadhi                           |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Pashto_, Pushto          | ``ps`` | ``pus``           | ``pus``         | Macrolanguage_ | Living      | |ps-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Persian_                 | ``fa`` | ``fas`` | ``per`` | ``fas``         | Macrolanguage_ | Living      | |fa-endonyms|       | Farsi                                  |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Polish_                  | ``pl`` | ``pol``           | ``pol``         | Individual     | Living      | Polski              |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Portuguese_              | ``pt`` | ``por``           | ``por``         | Individual     | Living      | |pt-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Punjabi_, Panjabi        | ``pa`` | ``pan``           | ``pan``         | Individual     | Living      | |pa-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Quechua_                 | ``qu`` | ``que``           | ``que``         | Macrolanguage_ | Living      | |qu-endonyms|       | Quechuan                               |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |ro-language|            | ``ro`` | ``ron`` | ``rum`` | ``ron``         | Individual     | Living      | |ro-endonyms|       |                                        | |ro-notes| |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Romansh_                 | ``rm`` | ``roh``           | ``roh``         | Individual     | Living      | |rm-endonyms|       | Romansch                               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Rundi_                   | ``rn`` | ``run``           | ``run``         | Individual     | Living      | |rn-endonyms|       | Kirundi                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Russian_                 | ``ru`` | ``rus``           | ``rus``         | Individual     | Living      | |ru-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Northern_Sami_           | ``se`` | ``sme``           | ``sme``         | Individual     | Living      | |se-endonyms|       | North Sami                             |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Samoan_                  | ``sm`` | ``smo``           | ``smo``         | Individual     | Living      | |sm-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sango_                   | ``sg`` | ``sag``           | ``sag``         | Individual     | Living      | |sg-endonyms|       | Sangoic                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sanskrit_                | ``sa`` | ``san``           | ``san``         | Macrolanguage_ | Historical  | |sa-endonyms|       |                                        | |sa-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sardinian_               | ``sc`` | ``srd``           | ``srd``         | Macrolanguage_ | Living      | Sardu               | Sard                                   |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Serbian_                 | ``sr`` | ``srp``           | ``srp``         | Individual     | Living      | |sr-endonyms|       |                                        | |sr-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Shona_                   | ``sn`` | ``sna``           | ``sna``         | Individual     | Living      | |sn-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sindhi_                  | ``sd`` | ``snd``           | ``snd``         | Individual     | Living      | |sd-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sinhala_, Sinhalese      | ``si`` | ``sin``           | ``sin``         | Individual     | Living      | |si-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Slovak_                  | ``sk`` | ``slk`` | ``slo`` | ``slk``         | Individual     | Living      | |sk-endonyms|       | Slovakian                              |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Slovenian_               | ``sl`` | ``slv``           | ``slv``         | Individual     | Living      | |sl-endonyms|       | Slovene                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Somali_                  | ``so`` | ``som``           | ``som``         | Individual     | Living      | |so-endonyms|       | Somalian                               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Spanish_, Castilian      | ``es`` | ``spa``           | ``spa``         | Individual     | Living      | |es-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sundanese_               | ``su`` | ``sun``           | ``sun``         | Individual     | Living      | |su-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Swahili_                 | ``sw`` | ``swa``           | ``swa``         | Macrolanguage_ | Living      | |sw-endonyms|       | Kiswahili                              |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Swati_                   | ``ss`` | ``ssw``           | ``ssw``         | Individual     | Living      | |ss-endonyms|       | Swazi                                  |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Swedish_                 | ``sv`` | ``swe``           | ``swe``         | Individual     | Living      | |sv-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tagalog_                 | ``tl`` | ``tgl``           | ``tgl``         | Individual     | Living      | |tl-endonyms|       |                                        | |tl-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tahitian_                | ``ty`` | ``tah``           | ``tah``         | Individual     | Living      | |ty-endonyms|       |                                        | |ty-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tajik_                   | ``tg`` | ``tgk``           | ``tgk``         | Individual     | Living      | |tg-endonyms|       | Tajiki                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tamil_                   | ``ta`` | ``tam``           | ``tam``         | Individual     | Living      | |ta-endonyms|       | Thamizh                                |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tatar_                   | ``tt`` | ``tat``           | ``tat``         | Individual     | Living      | |tt-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Telegu_                  | ``te`` | ``tel``           | ``tel``         | Individual     | Living      | |te-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Thai_                    | ``th`` | ``tha``           | ``tha``         | Individual     | Living      | |th-endonyms|       | Central Thai; Siamese                  |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tibetan_                 | ``bo`` | ``bod`` | ``tib`` | ``bod``         | Individual     | Living      | |bo-endonyms|       | Standard Tibetan; Lhasa Tibetan        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tigrinya_                | ``ti`` | ``tir``           | ``tir``         | Individual     | Living      | |ti-endonyms|       | Tigrigna                               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tonga_ (Tonga Islands)   | ``to`` | ``ton``           | ``ton``         | Individual     | Living      | |to-endonyms|       | Tongan                                 |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tsonga_                  | ``ts`` | ``tso``           | ``tso``         | Individual     | Living      | Xitsonga            | Xitsonga                               |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Tswana_                  | ``tn`` | ``tsn``           | ``tsn``         | Individual     | Living      | Setswana            | Setswana; Sechuana                     |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Turkish_                 | ``tr`` | ``tur``           | ``tur``         | Individual     | Living      | |tr-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Turkmen_                 | ``tk`` | ``tuk``           | ``tuk``         | Individual     | Living      | |tk-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Twi_                     | ``tw`` | ``twi``           | ``twi``         | Individual     | Living      | Twi                 |                                        | |tw-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Uighur_, Uyghur          | ``ug`` | ``uig``           | ``uig``         | Individual     | Living      | |ug-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Ukrainian_               | ``uk`` | ``ukr``           | ``ukr``         | Individual     | Living      | |uk-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Urdu_                    | ``ur`` | ``urd``           | ``urd``         | Individual     | Living      | |ur-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Uzbek_                   | ``uz`` | ``uzb``           | ``uzb``         | Macrolanguage_ | Living      | |uz-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Venda_                   | ``ve`` | ``ven``           | ``ven``         | Individual     | Living      | |ve-endonyms|       | Tshivenda                              |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Vietnamese_              | ``vi`` | ``vie``           | ``vie``         | Individual     | Living      | |vi-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | |vo-language|            | ``vo`` | ``vol``           | ``vol``         | Individual     | Constructed | |vo-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Walloon_                 | ``wa`` | ``wln``           | ``wln``         | Individual     | Living      | Walon               |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Welsh_                   | ``cy`` | ``cym`` | ``wel`` | ``cym``         | Individual     | Living      | |cy-endonyms|       |                                        |            |
  +--------------------------+--------+---------+---------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Wolof_                   | ``wo`` | ``wol``           | ``wol``         | Individual     | Living      | |wo-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Xhosa_                   | ``xh`` | ``xho``           | ``xho``         | Individual     | Living      | |xh-endonyms|       | Xosa                                   |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Sichuan_Yi_, Nuosu       | ``ii`` | ``iii``           | ``iii``         | Individual     | Living      | |ii-endonyms|       | Northern Yi; Liangshan Yi; Nosu        | |ii-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Yiddish_                 | ``yi`` | ``yid``           | ``yid``         | Macrolanguage_ | Living      | |yi-endonyms|       | Judeo-German                           | |yi-notes| |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Yoruba_                  | ``yo`` | ``yor``           | ``yor``         | Individual     | Living      | |yo-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Zhuang_, Chuang          | ``za`` | ``zha``           | ``zha``         | Macrolanguage_ | Living      | |za-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+
  | Zulu_                    | ``zu`` | ``zul``           | ``zul``         | Individual     | Living      | |zu-endonyms|       |                                        |            |
  +--------------------------+--------+-------------------+-----------------+----------------+-------------+---------------------+----------------------------------------+------------+


.. _Abkhazian: https://en.wikipedia.org/wiki/Abkhazian_language
.. _Afar: https://en.wikipedia.org/wiki/Afar_language
.. _Afrikaans: https://en.wikipedia.org/wiki/Afrikaans_language
.. _Akan: https://en.wikipedia.org/wiki/Akan_language
.. _Albanian: https://en.wikipedia.org/wiki/Albanian_language
.. _Amharic: https://en.wikipedia.org/wiki/Amharic_language
.. _Arabic: https://en.wikipedia.org/wiki/Arabic_language
.. _Aragones: https://en.wikipedia.org/wiki/Aragonese_language
.. _Armenian: https://en.wikipedia.org/wiki/Armenian_language
.. _Assamese: https://en.wikipedia.org/wiki/Assamese_language
.. _Avaric: https://en.wikipedia.org/wiki/Avar_language
.. _Avestan: https://en.wikipedia.org/wiki/Avestan_language
.. _Aymara: https://en.wikipedia.org/wiki/Aymara_language
.. _Azerbaijani: https://en.wikipedia.org/wiki/Azerbaijani_language
.. _Bambara: https://en.wikipedia.org/wiki/Bambara_language
.. _Bashkir: https://en.wikipedia.org/wiki/Bashkir_language
.. _Basque: https://en.wikipedia.org/wiki/Basque_language
.. _Belarusian: https://en.wikipedia.org/wiki/Belarusian_language
.. _Bengali: https://en.wikipedia.org/wiki/Bengali_language
.. _Bislama: https://en.wikipedia.org/wiki/Bislama_language
.. _Bosnian: https://en.wikipedia.org/wiki/Bosnian_language
.. _Breton: https://en.wikipedia.org/wiki/Breton_language
.. _Bulgarian: https://en.wikipedia.org/wiki/Bulgarian_language
.. _Burmese: https://en.wikipedia.org/wiki/Burmese_language
.. _Catalan: https://en.wikipedia.org/wiki/Catalan_language
.. _Chamorro: https://en.wikipedia.org/wiki/Chamorro_language
.. _Chechen: https://en.wikipedia.org/wiki/Chechen_language
.. _Chichewa: https://en.wikipedia.org/wiki/Chichewa_language
.. _Chinese: https://en.wikipedia.org/wiki/Chinese_language
.. _Chuvash: https://en.wikipedia.org/wiki/Chuvash_language
.. _Cornish: https://en.wikipedia.org/wiki/Cornish_language
.. _Corsican: https://en.wikipedia.org/wiki/Corsican_language
.. _Cree: https://en.wikipedia.org/wiki/Cree_language
.. _Croatian: https://en.wikipedia.org/wiki/Croatian_language
.. _Czech: https://en.wikipedia.org/wiki/Czech_language
.. _Danish: https://en.wikipedia.org/wiki/Danish_language
.. _Dutch: https://en.wikipedia.org/wiki/Dutch_language
.. _Flemish: https://en.wikipedia.org/wiki/Flemish_dialects
.. _Dzongkha: https://en.wikipedia.org/wiki/Dzongkha_language
.. _English: https://en.wikipedia.org/wiki/English_language
.. _Esperanto: https://en.wikipedia.org/wiki/Esperanto
.. _Estonian: https://en.wikipedia.org/wiki/Estonian_language
.. _Ewe: https://en.wikipedia.org/wiki/Ewe_language
.. _Faroese: https://en.wikipedia.org/wiki/Faroese_language
.. _Fijian: https://en.wikipedia.org/wiki/Fijian_language
.. _Finnish: https://en.wikipedia.org/wiki/Finnish_language
.. _French: https://en.wikipedia.org/wiki/French_language
.. _West_Frisian: https://en.wikipedia.org/wiki/West_Frisian_language
.. _Fulah: https://en.wikipedia.org/wiki/Fulah_language
.. _Gaelic: https://en.wikipedia.org/wiki/Scottish_Gaelic
.. _Galician: https://en.wikipedia.org/wiki/Galician_language
.. _Ganda: https://en.wikipedia.org/wiki/Ganda_language
.. _Georgian: https://en.wikipedia.org/wiki/Georgian_language
.. _German: https://en.wikipedia.org/wiki/German_language
.. _Greek: https://en.wikipedia.org/wiki/Greek_language
.. _Greenlandic: https://en.wikipedia.org/wiki/Greenlandic_language
.. _Guarani: https://en.wikipedia.org/wiki/Guarani_language
.. _Gujarati: https://en.wikipedia.org/wiki/Gujarati_language
.. _Hausa: https://en.wikipedia.org/wiki/Hausa_language
.. _Hebrew: https://en.wikipedia.org/wiki/Hebrew_language
.. _Herero: https://en.wikipedia.org/wiki/Herero_language
.. _Hindi: https://en.wikipedia.org/wiki/Hindi
.. _Hiri_Motu: https://en.wikipedia.org/wiki/Hiri_Motu_language
.. _Hungarian: https://en.wikipedia.org/wiki/Hungarian_language
.. _Icelandic: https://en.wikipedia.org/wiki/Icelandic_language
.. _Ido: https://en.wikipedia.org/wiki/Ido_(language)
.. _Igbo: https://en.wikipedia.org/wiki/Igbo_language
.. _Indonesian: https://en.wikipedia.org/wiki/Indonesian_language
.. _Interlingua: https://en.wikipedia.org/wiki/Interlingua
.. _Interlingue: https://en.wikipedia.org/wiki/Interlingue
.. _Inuktitut: https://en.wikipedia.org/wiki/Inuktitut
.. _Inupiaq: https://en.wikipedia.org/wiki/Inupiaq_language
.. _Irish: https://en.wikipedia.org/wiki/Irish_language
.. _Italian: https://en.wikipedia.org/wiki/Italian_language
.. _Japanese: https://en.wikipedia.org/wiki/Japanese_language
.. _Javanese: https://en.wikipedia.org/wiki/Javanese_language
.. _Kannada: https://en.wikipedia.org/wiki/Kannada_language
.. _Kanuri: https://en.wikipedia.org/wiki/Kanuri_language
.. _Kashmiri: https://en.wikipedia.org/wiki/Kashmiri_language
.. _Kazakh: https://en.wikipedia.org/wiki/Kazakh_language
.. _Central_Khmer: https://en.wikipedia.org/wiki/Central_Khmer_language
.. _Gikuyu: https://en.wikipedia.org/wiki/Gikuyu_language
.. _Kinyarwanda: https://en.wikipedia.org/wiki/Kinyarwanda
.. _Kyrgyz: https://en.wikipedia.org/wiki/Kyrgyz_language
.. _Komi: https://en.wikipedia.org/wiki/Komi_language
.. _Kongo: https://en.wikipedia.org/wiki/Kongo_language
.. _Korean: https://en.wikipedia.org/wiki/Korean_language
.. _Kuanyama: https://en.wikipedia.org/wiki/Kuanyama_language
.. _Kurdish: https://en.wikipedia.org/wiki/Kurdish_language
.. _Lao: https://en.wikipedia.org/wiki/Lao_language
.. _Latin: https://en.wikipedia.org/wiki/Latin
.. _Latvian: https://en.wikipedia.org/wiki/Latvian_language
.. _Limburgan: https://en.wikipedia.org/wiki/Limburgan_language
.. _Lingala: https://en.wikipedia.org/wiki/Lingala_language
.. _Lithuanian: https://en.wikipedia.org/wiki/Lithuanian_language
.. _Luba-Katanga: https://en.wikipedia.org/wiki/Luba-Katanga_language
.. _Luxembourgish: https://en.wikipedia.org/wiki/Luxembourgish_language
.. _Macedonian: https://en.wikipedia.org/wiki/Macedonian_language
.. _Malagasy: https://en.wikipedia.org/wiki/Malagasy_language
.. _Malay: https://en.wikipedia.org/wiki/Malay_language
.. _Malayalam: https://en.wikipedia.org/wiki/Malayalam_language
.. _Maltese: https://en.wikipedia.org/wiki/Maltese_language
.. _Manx: https://en.wikipedia.org/wiki/Manx_language
.. _Maori: https://en.wikipedia.org/wiki/M%C4%81ori_language
.. _Marathi: https://en.wikipedia.org/wiki/Marathi_language
.. _Marshallese: https://en.wikipedia.org/wiki/Marshallese_language
.. _Mongolian: https://en.wikipedia.org/wiki/Mongolian_language
.. _Nauru: https://en.wikipedia.org/wiki/Nauru_language
.. _Navajo: https://en.wikipedia.org/wiki/Navajo_language
.. _North_Ndebele: https://en.wikipedia.org/wiki/North_Ndebele_language
.. _South_Ndebele: https://en.wikipedia.org/wiki/South_Ndebele_language
.. _Ndonga: https://en.wikipedia.org/wiki/Ndonga
.. _Nepali: https://en.wikipedia.org/wiki/Nepali_language
.. _Norwegian: https://en.wikipedia.org/wiki/Norwegian_language
.. _Occitan: https://en.wikipedia.org/wiki/Occitan_language
.. _Ojibwa: https://en.wikipedia.org/wiki/Ojibwa_language
.. _Oriya: https://en.wikipedia.org/wiki/Oriya_language
.. _Oromo: https://en.wikipedia.org/wiki/Oromo_language
.. _Ossetian: https://en.wikipedia.org/wiki/Ossetian_language
.. _Pali: https://en.wikipedia.org/wiki/Pali_language
.. _Pashto: https://en.wikipedia.org/wiki/Pashto_language
.. _Persian: https://en.wikipedia.org/wiki/Persian_language
.. _Polish: https://en.wikipedia.org/wiki/Polish_language
.. _Portuguese: https://en.wikipedia.org/wiki/Portuguese_language
.. _Punjabi: https://en.wikipedia.org/wiki/Punjabi_language
.. _Quechua: https://en.wikipedia.org/wiki/Quechua_language
.. _Romanian: https://en.wikipedia.org/wiki/Romanian_language
.. _Moldavian: https://en.wikipedia.org/wiki/Moldovan_language
.. _Romansh: https://en.wikipedia.org/wiki/Romansh_language
.. _Rundi: https://en.wikipedia.org/wiki/Rundi_language
.. _Russian: https://en.wikipedia.org/wiki/Russian_language
.. _Northern_Sami: https://en.wikipedia.org/wiki/Northern_Sami
.. _Samoan: https://en.wikipedia.org/wiki/Samoan_language
.. _Sango: https://en.wikipedia.org/wiki/Sango_language
.. _Sanskrit: https://en.wikipedia.org/wiki/Sanskrit
.. _Sardinian: https://en.wikipedia.org/wiki/Sardinian_language
.. _Serbian: https://en.wikipedia.org/wiki/Serbian_language
.. _Shona: https://en.wikipedia.org/wiki/Shona_language
.. _Sindhi: https://en.wikipedia.org/wiki/Sindhi_language
.. _Sinhala: https://en.wikipedia.org/wiki/Sinhala_language
.. _Slovak: https://en.wikipedia.org/wiki/Slovak_language
.. _Slovenian: https://en.wikipedia.org/wiki/Slovene_language
.. _Somali: https://en.wikipedia.org/wiki/Somali_language
.. _Spanish: https://en.wikipedia.org/wiki/Spanish_language
.. _Sundanese: https://en.wikipedia.org/wiki/Sundanese_language
.. _Swahili: https://en.wikipedia.org/wiki/Swahili_language
.. _Swati: https://en.wikipedia.org/wiki/Swazi_language
.. _Swedish: https://en.wikipedia.org/wiki/Swedish_language
.. _Tagalog: https://en.wikipedia.org/wiki/Tagalog_language
.. _Tahitian: https://en.wikipedia.org/wiki/Tahitian_language
.. _Tajik: https://en.wikipedia.org/wiki/Tajik_language
.. _Tamil: https://en.wikipedia.org/wiki/Tamil_language
.. _Tatar: https://en.wikipedia.org/wiki/Tatar_language
.. _Telegu: https://en.wikipedia.org/wiki/Telugu_language
.. _Thai: https://en.wikipedia.org/wiki/Thai_language
.. _Tibetan: https://en.wikipedia.org/wiki/Standard_Tibetan
.. _Tigrinya: https://en.wikipedia.org/wiki/Tigrinya_language
.. _Tonga: https://en.wikipedia.org/wiki/Tonga_language_(Tonga_Islands)
.. _Tsonga: https://en.wikipedia.org/wiki/Tsonga_language
.. _Tswana: https://en.wikipedia.org/wiki/Tswana_language
.. _Turkish: https://en.wikipedia.org/wiki/Turkish_language
.. _Turkmen: https://en.wikipedia.org/wiki/Turkmen_language
.. _Twi: https://en.wikipedia.org/wiki/Twi
.. _Uighur: https://en.wikipedia.org/wiki/Uighur_language
.. _Ukrainian: https://en.wikipedia.org/wiki/Ukrainian_language
.. _Urdu: https://en.wikipedia.org/wiki/Urdu
.. _Uzbek: https://en.wikipedia.org/wiki/Uzbek_language
.. _Venda: https://en.wikipedia.org/wiki/Venda_language
.. _Vietnamese: https://en.wikipedia.org/wiki/Vietnamese_language
.. _Volapük: https://en.wikipedia.org/wiki/Volap%C3%BCk
.. _Walloon: https://en.wikipedia.org/wiki/Walloon_language
.. _Welsh: https://en.wikipedia.org/wiki/Welsh_language
.. _Wolof: https://en.wikipedia.org/wiki/Wolof_language
.. _Xhosa: https://en.wikipedia.org/wiki/Xhosa_language
.. _Sichuan_Yi: https://en.wikipedia.org/wiki/Sichuan_Yi_language
.. _Yiddish: https://en.wikipedia.org/wiki/Yiddish_language
.. _Yoruba: https://en.wikipedia.org/wiki/Yoruba_language
.. _Zhuang: https://en.wikipedia.org/wiki/Zhuang_language
.. _Zulu: https://en.wikipedia.org/wiki/Zulu_language

.. _Macrolanguage: https://en.wikipedia.org/wiki/Macrolanguage

.. |ab-endonyms| raw:: html

  <span title="Abkhaz-language text"><span lang="ab">Аҧсуа</span></span>,
  <span title="Abkhaz-language text"><i lang="ab-Latn">Apsua</i></span>,
  <span title="Abkhaz-language text"><span lang="ab-Geor">აფსუა</span></span>

.. |ak-endonyms| raw:: html

  Ákán

.. |ak-notes| raw:: html

  <a href="https://en.wikipedia.org/wiki/Twi_language" class="mw-redirect" title="Twi language">Twi</a> is <code>tw</code>/<code>twi</code>,
  <a href="https://en.wikipedia.org/wiki/Fante_dialect" title="Fante dialect">Fanti</a> is <code>fat</code>

.. |am-endonyms| raw:: html

  <span title="Amharic-language text"><span lang="am">አማርኛ</span></span> (Amarəñña)

.. |ar-endonyms| raw:: html

  <span title="Arabic-language text"><span lang="ar">اَلْعَرَبِيَّةُ</span></span> (al-ʿarabiyyah)

.. |ar-notes| raw:: html

  <a href="https://en.wikipedia.org/wiki/Standard_Arabic">Standard Arabic</a> is <code>arb</code>

.. |an-endonyms| raw:: html

  Aragonés

.. |hy-endonyms| raw:: html

  <span title="Armenian-language text"><span lang="hy">Հայերեն (Hayeren)</span></span>

.. |hy-notes| raw:: html

  ISO <span class="nowrap">639-3</span> code <code>hye</code> is for <a href="https://en.wikipedia.org/wiki/Eastern_Armenian" title="Eastern Armenian">Eastern Armenian</a>, <code>hyw</code> is for <a href="https://en.wikipedia.org/wiki/Western_Armenian" title="Western Armenian">Western Armenian</a>, and <code>xcl</code> is for <a href="https://en.wikipedia.org/wiki/Classical_Armenian" title="Classical Armenian">Classical Armenian</a>

.. |as-endonyms| raw:: html

  <span title="Armenian-language text"><span lang="hy">অসমীয়া</span></span> (Ôxômiya)

.. |av-endonyms| raw:: html

  Авар&nbsp;мацӏ; اوار&nbsp;ماض (Avar&nbsp;maz)

.. |ae-endonyms| raw:: html

  *Upastawakaēna*

.. |az-endonyms| raw:: html

  Azərbaycan&nbsp;dili; آذربایجان&nbsp;دیلی; Азәрбајҹан&nbsp;дили

.. |bm-endonyms| raw:: html

  بَمَنَنكَن ;ߓߡߊߣߊ߲ߞߊ߲ (Bamanankan)

.. |ba-endonyms| raw:: html

  Башҡорт теле; Başqort&nbsp;tele

.. |eu-endonyms| raw:: html

  Euskara/Euskera

.. |be-endonyms| raw:: html

  Беларуская мова (Biełaruskaja mova)

.. |bn-endonyms| raw:: html

  বাংলা (Bāŋlā)

.. |bi-notes| raw:: html

  Language formed from English and <a href="https://en.wikipedia.org/wiki/Languages_of_Vanuatu" title="Languages of Vanuatu">Vanuatuan languages</a>, with some French influence.

.. |bs-endonyms| raw:: html

  Босански (Bosanski)

.. |bo-notes| raw:: html

  Member language of <a href="https://en.wikipedia.org/wiki/Serbo-Croatian" title="Serbo-Croatian">Serbo-Croatian</a> with code <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">sh</code> deprecated in 2000

.. |bg-endonyms| raw:: html

  Български (Bulgarski)

.. |my-endonyms| raw:: html

  မြန်မာစာ (Mrãmācā)

.. |ca-endonyms| raw:: html

  Català; Valencià

.. |ce-endonyms| raw:: html

  Нохчийн мотт; <span>(Noxçiyn mott)</span>

.. |zh-endonyms| raw:: html

  中文&nbsp;(Zhōngwén) <span>汉语;&nbsp;漢語&nbsp;(Hànyǔ)</span>

.. |cu-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Church_Slavonic" title="Church Slavonic">Church&nbsp;Slavonic</a>, Old&nbsp;Slavonic, <a href="https://en.wikipedia.org/wiki/Old_Church_Slavonic" title="Old Church Slavonic">Old&nbsp;Church&nbsp;Slavonic</a>

.. |cu-endonyms| raw:: html

  Славе́нскїй ѧ҆зы́къ

.. |cv-endonyms| raw:: html

  Чӑвашла (Çăvaşla)

.. |cr-endonyms| raw:: html

  ᓀᐦᐃᔭᐁᐧᐃᐧᐣ (Nehiyawewin)

.. |hr-notes| raw:: html

  Member language of <a href="https://en.wikipedia.org/wiki/Serbo-Croatian" title="Serbo-Croatian">Serbo-Croatian</a> with code sh deprecated in 2000

.. |cs-endonyms| raw:: html

  Čeština

.. |dv-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Dhivehi_language" class="mw-redirect" title="Dhivehi language">Divehi</a>, Dhivehi, Maldivian

.. |dv-endonyms| raw:: html

  ދިވެހި (Dhivehi)

.. |nl-notes| raw:: html

  Flemish is not to be confused with the closely related <a href="https://en.wikipedia.org/wiki/West_Flemish" title="West Flemish">West Flemish</a> which is referred to as "Vlaams" and has the code <code>vls</code> in ISO <span class="nowrap">639-3</span>

.. |dz-endonyms| raw:: html

  རྫོང་ཁ་ (Dzongkha)

.. |ee-endonyms| raw:: html

  Èʋegbe

.. |fo-endonyms| raw:: html

  Føroyskt

.. |fr-endonyms| raw:: html

  Français

.. |ff-endonyms| raw:: html

  𞤊𞤵𞤤𞤬𞤵𞤤𞤣𞤫&nbsp;;ࢻُلْࢻُلْدٜ;&nbsp;Fulfulde <span>𞤆𞤵𞤤𞤢𞥄𞤪&nbsp;;ݒُلَارْ;&nbsp;Pulaar</span>

.. |gd-endonyms| raw:: html

  Gàidhlig

.. |ka-endonyms| raw:: html

  ქართული (Kharthuli)

.. |el-endonyms| raw:: html

  Νέα&nbsp;Ελληνικά; (Néa&nbsp;Ellêniká)

.. |el-notes| raw:: html

  for <a href="https://en.wikipedia.org/wiki/Ancient_Greek" title="Ancient Greek">Ancient Greek</a>, use the <a href="https://en.wikipedia.org/wiki/ISO_639-3" title="ISO 639-3">ISO 639-3</a> code <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">grc</code>

.. |kl-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Greenlandic_language" title="Greenlandic language">Kalaallisut</a>, Greenlandic

.. |gn-endonyms| raw:: html

  <span lang="gn">Avañe'ẽ</span>

.. |gu-endonyms| raw:: html

  <span lang="gu">ગુજરાતી</span> (Gujarātī)

.. |ht-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Haitian_Creole_language" class="mw-redirect" title="Haitian Creole language">Haitian</a>, Haitian&nbsp;Creole

.. |ht-endonyms| raw:: html

  Kreyòl ayisyen

.. |ha-endonyms| raw:: html

  هَرْشٜن هَوْس (halshen&nbsp;Hausa)

.. |he-endonyms| raw:: html

  עברית‎ (Ivrit)

.. |he-notes| replace::

  Modern Hebrew. Code changed in 1989 from original ISO 639:1988 ``iw``.

.. |hi-endonyms| raw:: html

  <span lang="hi">हिन्दी</span> (Hindī)

.. |is-endonyms| raw:: html

  Íslenska

.. |ig-endonyms| raw:: html

  ásụ̀sụ́ Ìgbò

.. |id-endonyms| raw:: html

  bahasa Indonesia

.. |id-notes| replace::

  Covered by macrolanguage ``ms``/``msa``. Changed in 1989 from original ISO 639:1988, ``in``.

.. |ia-language| replace::

  Interlingua_ (International Auxiliary Language Association)

.. |ie-endonyms| raw:: html

  Interlingue; Occidental

.. |iu-endonyms| raw:: html

  ᐃᓄᒃᑎᑐᑦ (Inuktitut)

.. |ik-endonyms| raw:: html

  Iñupiaq

.. |jp-endonyms| raw:: html

  日本語 (Nihongo)

.. |jv-endonyms| raw:: html

  ꦧꦱꦗꦮ; basa Jawa

.. |kn-endonyms| raw:: html

  ಕನ್ನಡ (Kannađa)

.. |kr-endonyms| raw:: html

  كَنُرِيِه; Kànùrí

.. |ks-endonyms| raw:: html

  कॉशुर; كأشُر (Kosher)

.. |kk-endonyms| raw:: html

  Қазақша; Qazaqşa; قازاقشا

.. |km-endonyms| raw:: html

  ខេមរភាសា; (Khémôrôphéasa)

.. |ki-endonyms| raw:: html

  Gĩgĩkũyũ

.. |rw-endonyms| raw:: html

  Ikinyarwanda

.. |ky-endonyms| raw:: html

  Кыргыз;<span>قىرعىز</span>

.. |kv-endonyms| raw:: html

  Коми кыв

.. |ko-endonyms| raw:: html

  한국어 (Hangugeo) <br>조선말 (Chosŏnmal)

.. |ku-endonyms| raw:: html

  کوردی; Kurdî

.. |lo-endonyms| raw:: html

  ພາສາລາວ (phasa Lao)

.. |la-notes| raw:: html

  In use by several Christian organization of churches, and for sciences

.. |lv-endonyms| raw:: html

  Latviešu

.. |li-language| replace::

  Limburgan_, Limburger, Limburgish

.. |li-endonyms| raw:: html

  Lèmburgs

.. |ln-endonyms| raw:: html

  Lingála

.. |lt-endonyms| raw:: html

  Lietuvių

.. |lu-endonyms| raw:: html

  Kiluba

.. |lb-language| replace::

  Luxembourgish_, Letzeburgesch

.. |lb-endonyms| raw:: html

  Lëtzebuergesch

.. |mk-endonyms| raw:: html

  Македонски (Makedonski)

.. |mg-endonyms| raw:: html

  مَلَغَسِ; Malagasy

.. |ms-endonyms| raw:: html

  بهاس&nbsp;ملايو (bahasa&nbsp;Melayu)

.. |ms-notes| raw:: html

  <a href="https://en.wikipedia.org/wiki/Malaysian_language" class="mw-redirect" title="Malaysian language">Standard Malay</a> is <code>zsm</code>, <a href="https://en.wikipedia.org/wiki/Indonesian_language" title="Indonesian language">Indonesian</a> is <code>id</code>/<code>ind</code>

.. |ml-endonyms| raw:: html

  മലയാളം (Malayāļã)

.. |gv-endonyms| raw:: html

  Gaelg; Gailck

.. |mi-endonyms| raw:: html

  reo Māori

.. |mr-endonyms| raw:: html

  मराठी (Marāṭhī)

.. |mh-endonyms| raw:: html

  kajin M̧ajel‌̧

.. |mn-endonyms| raw:: html

  <style data-mw-deduplicate="TemplateStyles:r1237794275">.mw-parser-output .font-mong{font-family:"Menk Hawang Tig","Menk Qagan Tig","Menk Garqag Tig","Menk Har_a Tig","Menk Scnin Tig","Oyun Gurban Ulus Tig","Oyun Qagan Tig","Oyun Garqag Tig","Oyun Har_a Tig","Oyun Scnin Tig","Oyun Agula Tig","Mongolian Baiti","Noto Sans Mongolian","Mongolian Universal White","Mongol Usug","Mongolian White","MongolianScript","Code2000","Menksoft Qagan"}.mw-parser-output .font-mong-mnc,.mw-parser-output .font-mong:lang(mnc-Mong),.mw-parser-output .font-mong:lang(dta-Mong),.mw-parser-output .font-mong:lang(sjo-Mong){font-family:"Abkai Xanyan","Abkai Xanyan LA","Abkai Xanyan VT","Abkai Xanyan XX","Abkai Xanyan SC","Abkai Buleku","Daicing White","Mongolian Baiti","Noto Sans Mongolian","Mongolian Universal White"}</style><span class="font-mong" style="display:inline-block; font-weight:normal; font-size: 1.25em; line-height: 1.2em; -webkit-writing-mode: vertical-lr; -o-writing-mode: vertical-lr; -ms-writing-mode: tb-lr; writing-mode: tb-lr; writing-mode: vertical-lr;; text-orientation: sideways; vertical-align:text-top;">ᠮᠣᠩᠭᠣᠯ<br>ᠬᠡᠯᠡ</span>; Монгол&nbsp;хэл (Mongol&nbsp;xel)

.. |na-endonyms| raw:: html

  dorerin Naoe

.. |nv-endonyms| raw:: html

  Diné&nbsp;bizaad; Naabeehó&nbsp;bizaad

.. |nd-endonyms| raw:: html

  isiNdebele; saseNyakatho; Mthwakazi&nbsp;Ndebele

.. |nr-endonyms| raw:: html

  isiNdebele; sakwaNdzundza

.. |ne-endonyms| raw:: html

  नेपाली भाषा (Nepālī&nbsp;bhāśā)

.. |no-notes| raw:: html

  <a href="https://en.wikipedia.org/wiki/Bokm%C3%A5l" title="Bokmål">Bokmål</a> is <code>nb</code>/<code>nob</code>, <a href="https://en.wikipedia.org/wiki/Nynorsk" title="Nynorsk">Nynorsk</a> is <code>nn</code>/<code>nno</code>

.. |nb-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Bokm%C3%A5l" title="Bokmål">Norwegian Bokmål</a>

.. |nb-endonyms| raw:: html

  Norsk Bokmål

.. |nb-notes| raw:: html

  covered by macrolanguage <code>no</code>/<code>nor</code>

.. |nn-language| raw:: html

  <a href="https://en.wikipedia.org/wiki/Nynorsk" title="Nynorsk">Norwegian Nynorsk</a>

.. |nn-endonyms| raw:: html

  Norsk Nynorsk

.. |nn-notes| raw:: html

  covered by macrolanguage <code>no</code>/<code>nor</code>

.. |oc-endonyms| raw:: html

  Occitan; Provençal

.. |oj-endonyms| raw:: html

  ᐊᓂᔑᓈᐯᒧᐎᓐ (Anishinaabemowin)

.. |or-endonyms| raw:: html

  ଓଡ଼ିଆ (Odia)

.. |om-endonyms| raw:: html

  afaan Oromoo

.. |os-endonyms| raw:: html

  ирон&nbsp;Ӕвзаг <span>(iron&nbsp;Ævzag)</span>

.. |os-notes| raw:: html

  This generally refers to <a href="https://en.wikipedia.org/wiki/Iron_Ossetian" title="Iron Ossetian">Iron</a>, one of the two main dialect of Ossetian, <a href="https://en.wikipedia.org/wiki/Digor_Ossetian" title="Digor Ossetian">Digor</a>, as another one, has separate set 3 code <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">osd</code>

.. |pi-endonyms| raw:: html

  Pāli

.. |ps-endonyms| raw:: html

  پښتو (Pax̌tow)

.. |fa-endonyms| raw:: html

  فارسی (Fārsiy)

.. |pt-endonyms| raw:: html

  Português

.. |pa-endonyms| raw:: html

  ਪੰਜਾਬੀ; پنجابی (Pãjābī)

.. |qu-endonyms| raw:: html

  Runa&nbsp;simi; kichwa&nbsp;simi; Nuna&nbsp;shimi

.. |ro-language| replace::

  Romanian_, Moldavian_, Moldovan

.. |ro-endonyms| raw:: html

  Română; Ромынэ

.. |ro-notes| raw:: html

  the identifiers <code>mo</code> and <code>mol</code> for Moldavian are deprecated. They will not be assigned to different items, and recordings using these identifiers will not be invalid.

.. |rm-endonyms| raw:: html

  Rumantsch; Rumàntsch; Romauntsch; Romontsch

.. |rn-endonyms| raw:: html

  Ikirundi

.. |ru-endonyms| raw:: html

  Русский&nbsp;язык (Russkiĭ&nbsp;âzyk)

.. |se-endonyms| raw:: html

  Davvisámegiella


.. |sm-endonyms| raw:: html

  gagana Sāmoa

.. |sg-endonyms| raw:: html

  yângâ tî Sängö


.. |sa-endonyms| raw:: html

  संस्कृतम् (Saṃskṛtam)

.. |sa-notes| raw:: html

  In use by some Indian states on judicial purposes

.. |sr-endonyms| raw:: html

  Српски (Srpski)

.. |sr-notes| raw:: html

  Member language of <a href="https://en.wikipedia.org/wiki/Serbo-Croatian" title="Serbo-Croatian">Serbo-Croatian</a> with code <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" style="" dir="ltr">sh</code> deprecated in 2000, the ISO <span class="nowrap">639-2/T</span> code <code>srp</code> deprecated the ISO <span class="nowrap">639-2/B</span> code <code>scc</code>

.. |sn-endonyms| raw:: html

  chiShona

.. |sd-endonyms| raw:: html

  سنڌي; सिन्धी (Sindhī)

.. |si-endonyms| raw:: html

  සිංහල (Siṁhala)

.. |sk-endonyms| raw:: html

  Slovenčina

.. |sl-endonyms| raw:: html

  Slovenščina

.. |so-endonyms| raw:: html

  Soomaali; 𐒈𐒝𐒑𐒛𐒐𐒘; سٝومالِ

.. |es-endonyms| raw:: html

  Español; Castellano

.. |su-endonyms| raw:: html

  basa Sunda; ᮘᮞ ᮞᮥᮔ᮪ᮓ; بَاسَا سُوْندَا

.. |sw-endonyms| raw:: html

  Kiswahili; كِسوَحِيلِ

.. |ss-endonyms| raw:: html

  siSwati

.. |sv-endonyms| raw:: html

  Svenska

.. |tl-endonyms| raw:: html

  Wikang Tagalog

.. |tl-notes| raw:: html

  <a href="https://en.wikipedia.org/wiki/Filipino_language" title="Filipino language">Filipino</a> (Pilipino) has the code <code>fil</code>

.. |ty-endonyms| raw:: html

  reo Tahiti

.. |ty-notes| raw:: html

  One of the Reo Mā`ohi (languages of <a href="https://en.wikipedia.org/wiki/French_Polynesia" title="French Polynesia">French Polynesia</a>)

.. |tg-endonyms| raw:: html

  Тоҷикӣ (Tojikī)

.. |ta-endonyms| raw:: html

  தமிழ் (Tamiḻ)

.. |tt-endonyms| raw:: html

  Татар теле; <span>Tatar tele; تاتار تئلئ‎</span>

.. |te-endonyms| raw:: html

  తెలుగు (Telugu)

.. |th-endonyms| raw:: html

  ภาษาไทย (Phasa Thai)

.. |bo-endonyms| raw:: html

  བོད་སྐད་ (Bodskad); <span>ལྷ་སའི་སྐད་ (Lhas'iskad)</span>

.. |ti-endonyms| raw:: html

  ትግርኛ (Təgrəñña)

.. |to-endonyms| raw:: html

  lea faka-Tonga

.. |tr-endonyms| raw:: html

  Türkçe

.. |tk-endonyms| raw:: html

  Türkmençe; <span>Түркменче; تۆرکمنچه </span>

.. |tw-notes| raw:: html

  covered by macrolanguage <code>ak</code>/<code>aka</code>

.. |ug-endonyms| raw:: html

  ئۇيغۇر تىلى; <span>Уйғур тили; Uyƣur tili</span>

.. |uk-endonyms| raw:: html

  Українська (Ukraїnska)

.. |ur-endonyms| raw:: html

  اُردُو (Urduw)

.. |uz-endonyms| raw:: html

  Ózbekça; <span>ўзбекча; ئوزبېچه</span>

.. |ve-endonyms| raw:: html

  Tshivenḓa

.. |vi-endonyms| raw:: html

  tiếng Việt

.. |vo-language| replace::

  Volapük_

.. |vo-endonyms| raw:: html

  Volapük

.. |cy-endonyms| raw:: html

  Cymraeg

.. |wo-endonyms| raw:: html

  وࣷلࣷفْ

.. |xh-endonyms| raw:: html

  isiXhosa

.. |ii-endonyms| raw:: html

  ꆈꌠꉙ (Nuosuhxop)

.. |ii-notes| raw:: html

  standard form of the <a href="https://en.wikipedia.org/wiki/Yi_language" class="mw-redirect" title="Yi language">Yi languages</a>

.. |yi-endonyms| raw:: html

  ייִדיש (Yidiš)

.. |yi-notes| raw:: html

  Changed in 1989 from original ISO <span class="nowrap">639:1988</span>, <code>ji</code>

.. |yo-endonyms| raw:: html

  èdè Yorùbá

.. |za-endonyms| raw:: html

  話僮 (<i>Vahcuengh</i>)

.. |zu-endonyms| raw:: html

  isiZulu
