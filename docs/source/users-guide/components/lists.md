# Lists

Markdown or reStructuredText offer support to several types of lists, including *ordered lists*, *unordered lists*, *definition lists* and *field lists*. Markdown also supports *task lists*. This document shows examples of all this types of lists an how they look like when using Nefertiti for Sphinx.

## Unordered list

Write an unordered list by prefixing each line item with a `-`, `*` or `+`. All members of the list should be prefixed with the same character. Unordered list are written the same in both, Markdown and reStructuredText.

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
- Orci varius natoque penatibus et magnis dis parturient montes.
- Donec porttitor sem odio, quis dapibus orci molestie ac.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

- Orci varius natoque penatibus et magnis dis parturient montes.
- Donec porttitor sem odio, quis dapibus orci molestie ac.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
- Orci varius natoque penatibus et magnis dis parturient montes.
- Donec porttitor sem odio, quis dapibus orci molestie ac.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

- Orci varius natoque penatibus et magnis dis parturient montes.
- Donec porttitor sem odio, quis dapibus orci molestie ac.
- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::


## Ordered list

Ordered list however have different syntax in Markdown and reStructuredText.

In Markdown an ordered list requires that every line item is prefixed with a number 1 followed by a dot: "`1.`". The number used for the first line item establishes the start of the numbering. The rest of the lines can use any number, but it is recommended to use always "`1.`".

In reStructuredText an ordered list requires that every line item is prefixed with a hash charactered followed by a dot: "`#.`".

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
#. Orci varius natoque penatibus et magnis dis parturient montes.
#. Donec porttitor sem odio, quis dapibus orci molestie ac.
#. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
#. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
#. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::

## Nested lists

Lists can contain more lists inside:

1. [Unordered list with nested unordered list](http://localhost:8194/users-guide/components/lists.html#unordered-list-with-nested-unordered-list)
1. [Unordered list with nested ordered list](http://localhost:8194/users-guide/components/lists.html#unordered-list-with-nested-ordered-list)
1. [Ordered list with nested ordered list](http://localhost:8194/users-guide/components/lists.html#ordered-list-with-nested-ordered-list)
1. [Ordered list with nested unordered list](http://localhost:8194/users-guide/components/lists.html#ordered-list-with-nested-unordered-list)

### 1. Unordered list with nested unordered list

 When nesting a list inside another list add two spaces to separate the items of the nested list. You can keep using the same prefixing character. In reStructuredText you have to separate the nested list from the outer list with two blank lines.

Here is an example of unordered list with a nested unordered list, in Markdown and reStructuredText:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  + Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  + Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  + Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  + Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.

  + Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  + Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.

* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  + Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  + Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::

### 2. Unordered list with nested ordered list

An example of unordered list with a nested ordered list:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.

  #. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  #. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.

* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

* Orci varius natoque penatibus et magnis dis parturient montes.
* Donec porttitor sem odio, quis dapibus orci molestie ac.
  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::


### 3. Ordered list with nested ordered list

When nesting a list inside an ordered list, use **3 spaces as prefix** for the items of the nested list. When using reStructuredText, separate the two lists with blank lines:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
#. Orci varius natoque penatibus et magnis dis parturient montes.
#. Donec porttitor sem odio, quis dapibus orci molestie ac.

   #. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   #. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.

#. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````
1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   1. Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::

### 4. Ordered list with nested unordered list

An example of an ordered list with an unordered list inside. Like in the previous example, use **3 spaces as prefix** for each of the items of the nested list, and when using reStructuredText, separare the two lists with blank lines:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   * Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   * Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
#. Orci varius natoque penatibus et magnis dis parturient montes.
#. Donec porttitor sem odio, quis dapibus orci molestie ac.

   * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   * Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.

#. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. Orci varius natoque penatibus et magnis dis parturient montes.
1. Donec porttitor sem odio, quis dapibus orci molestie ac.
   * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   * Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
:::
::::

## Definition list

If you use Markdown, as explained in the [MyST Parser docs](https://myst-parser.readthedocs.io/en/latest/syntax/typography.html#definition-lists-and-glossaries), you can create **definition lists** by adding the `deflist` extension to `myst_enable_extensions`. When using reStructuredText you do not need to add an extension, as docutils comes with built-in support.

A sample definition list:

::::{tab-set}
:::{tab-item} Markdown
:sync: md

``````markdown
Term 1
: This is the definition corresponding to the term 1. Mauris aliquam nisl
gravida nunc posuere mollis. Morbi eget nisl suscipit, luctus lacus in, mattis
est. Mauris ullamcorper euismod elit quis porttitor. Quisque id mi et est
egestas fringilla ut imperdiet est. Sed a nulla a quam lobortis egestas.

Term 2
: This is the definition corresponding to the term 2. Mauris ac eros venenatis,
malesuada turpis in, euismod nibh. Nulla sit amet ante vel magna facilisis
molestie viverra ac velit. Suspendisse in nibh imperdiet, egestas felis dictum,
ullamcorper velit.

  There can be multiple paragraphs, so long as they are indented with **two
  spaces**, like the first paragraph.

  + And here there is an item of a list.
  + Followed by another item.
``````

Term 1
: This is the definition corresponding to the term 1. Mauris aliquam nisl
gravida nunc posuere mollis. Morbi eget nisl suscipit, luctus lacus in, mattis
est. Mauris ullamcorper euismod elit quis porttitor. Quisque id mi et est
egestas fringilla ut imperdiet est. Sed a nulla a quam lobortis egestas.

Term 2
: This is the definition corresponding to the term 2. Mauris ac eros venenatis,
malesuada turpis in, euismod nibh. Nulla sit amet ante vel magna facilisis
molestie viverra ac velit. Suspendisse in nibh imperdiet, egestas felis dictum,
ullamcorper velit.

  There can be multiple paragraphs, so long as they are indented with **two spaces**, like the first paragraph.

  + And here there is an item of a list.
  + Followed by another item.
  + And the last item.
:::
:::{tab-item} reStructuredText
:sync: rst

``````reStructuredText
Term 1
    This is the definition corresponding to the term 1. Mauris aliquam nisl
    gravida nunc posuere mollis. Morbi eget nisl suscipit, luctus lacus in,
    mattis est. Mauris ullamcorper euismod elit quis porttitor. Quisque id
    mi et est egestas fringilla ut imperdiet est. Sed a nulla a quam
    lobortis egestas.

Term 2
    This is the definition corresponding to the term 2. Mauris ac eros
    venenatis, malesuada turpis in, euismod nibh. Nulla sit amet ante vel
    magna facilisis molestie viverra ac velit. Suspendisse in nibh
    imperdiet, egestas felis dictum, ullamcorper velit.

    There can be multiple paragraphs, so long as they are indented with
    **four spaces**, like the first paragraph.

    + And here there is an item of a list.
    + Followed by another item.
    + And the last item.
``````

Term 1
: This is the definition corresponding to the term 1. Mauris aliquam nisl
gravida nunc posuere mollis. Morbi eget nisl suscipit, luctus lacus in, mattis
est. Mauris ullamcorper euismod elit quis porttitor. Quisque id mi et est
egestas fringilla ut imperdiet est. Sed a nulla a quam lobortis egestas.

Term 2
: This is the definition corresponding to the term 2. Mauris ac eros venenatis,
malesuada turpis in, euismod nibh. Nulla sit amet ante vel magna facilisis
molestie viverra ac velit. Suspendisse in nibh imperdiet, egestas felis dictum,
ullamcorper velit.

  There can be multiple paragraphs, so long as they are indented with **two spaces**, like the first paragraph.

  + And here there is an item of a list.
  + Followed by another item.
  + And the last item.
:::
::::

## Field list

A field list is presented as a two column structure in which the left column displays field names and the right column the description corresponding to the field names.

To use *field lists* in Markdown, add the `fieldlist` extension to `myst_enable_extensions`. Docutils comes built-in support. In both cases the syntax is the same.

A sample field list:

``````markdown
:param arg1: A description of arg1.
:param arg2: A longer description,
    with multiple lines.
:return: A description of the return value.
    It can contain lists:

    * True if the element was in the data structure.
    * False otherwise.
``````

:param arg1: A description of arg1.
:param arg2: A longer description,
    with multiple lines.
:return: A description of the return value.
    It can contain lists:

    * True if the element was in the data structure.
    * False otherwise.


## Task list

A task list displays its items as the items of an ordered or unordered list followed by checkbox. To write task lists using Markdown, add the `tasklist` to `myst_enable_extensions`.

:::{important}
At the time of this writing docutils does not support task lists, so there is no support for task lists using **reStructuredText**.
:::

This is an example an **unordered task list**:

``````markdown
- [ ] Orci varius natoque penatibus et magnis dis parturient montes.
- [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- [ ] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- [x] Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

- [ ] Orci varius natoque penatibus et magnis dis parturient montes.
- [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
- [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- [ ] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
- [x] Ras ac nisl congue, pellentesque libero sagittis, cursus justo.

And this is an example of **ordered task list**:

``````markdown
1. [ ] Orci varius natoque penatibus et magnis dis parturient montes.
1. [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
1. [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. [ ] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. [x] Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

1. [ ] Orci varius natoque penatibus et magnis dis parturient montes.
1. [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
1. [x] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. [ ] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
1. [x] Ras ac nisl congue, pellentesque libero sagittis, cursus justo.

Task lists can be nested:

``````markdown
* Orci varius natoque penatibus et magnis dis parturient montes.
  1. [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
  1. [ ] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  1. [x] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
``````

* Orci varius natoque penatibus et magnis dis parturient montes.
  1. [x] Donec porttitor sem odio, quis dapibus orci molestie ac.
  1. [ ] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  1. [x] Ut pretium, risus at sodales viverra, nisl nunc tincidunt arcu.
* Ras ac nisl congue, pellentesque libero sagittis, cursus justo.
