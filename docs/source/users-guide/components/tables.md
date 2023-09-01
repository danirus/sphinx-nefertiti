# Tables

This section shows tables rendered with Nefertiti for Sphinx.

Unlike other components, tables written in Markdown are different from those written in reStructuredText. When using the Markdown standard syntax cells can be aligned but can not span other cells, while when using reStructuredText standard syntax cells can not be aligned but can span other cells.

This section is separated in two documents, one written in Markdown and another written in reStructuredText to show the standard syntax for tables in each language.

In addition to the standard syntax both, MyST-Parser and docutils, offer directives that extend the capabilities to write tables. These directives are `table`, `csv-table` and `list-table`.

```{toctree}
:glob:
tables-md.md
tables-rst.rst
```
