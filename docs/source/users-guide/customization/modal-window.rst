.. _modal-window:

Modal window
############

Sometimes the representation of the data requires more width than the width of the central column. When loading web pages Nefertiti checks that the width of every table in the document fits in the central column. Those tables wider than the central column receive an *expand* icon that, when clicked, open the table in a modal window.

The modal window is active for two types of elements: **tables** and **mermaid diagrams**.

Large tables
************

The documentation of Nefertiti for Sphinx comes with two examples of tables with a width wider than the central column:

* The table :ref:`of the ISO 639 language codes <a-wide-table-in-rst>`
* An extract of the :ref:`World's most threatened species  <a-wide-table-in-markdown>`

.. cs_figure:: img/modal-table.png
    :width: 85%
    :align: center
    :class: border-radius-1

    At the top right side of the table, clicking on the *expand* icon opens the table in a modal window.

Mermaid diagrams
****************

Mermaid diagrams may open using the modal window provided by `sphinxcontrib-mermaid <https://sphinxcontrib-mermaid-demo.readthedocs.io/en/latest/>`_. Once it has been installed, adding the following settings to your ``conf.py`` file enables the modal window:

.. code-block:: python

    mermaid_fullscreen = True  # Enable/disable globally (default: True)
    mermaid_fullscreen_button = "⛶"  # Customize button icon (default: ⛶)

Here is an example:

.. mermaid::
   :zoom:

    ---
    title: Example of Mindmap
    config:
        theme: base
    ---
    mindmap
    root((mindmap))
      Origins
        Long history
        ::icon(fa fa-book)
        Popularisation
          British popular psychology author Tony Buzan
        Research
          On effectiveness<br/>and features
          On Automatic creation
            Uses
                Creative techniques
                Strategic planning
                Argument mapping
        Tools
          Pen and paper
          Mermaid
