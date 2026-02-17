# CSS variables

It is possible to customize your Sphinx site with Nefertiti using CSS variables. By providing a `custom.css` with a `:root` declaration and the following CSS variables, you can further customize your site.

## Custom `stylesheet.css` file

Sphinx can include additional CSS files. There are several settings you can use in your `conf.py`:

* `html_css_files` [#1](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_css_files)
* `html_style` [#2](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_style)

In both cases the file paths given are relative to the directory referred by the `html_static_path` [#3](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_static_path) setting.

The following content in `conf.py` would look for a `custom.css` file in your `_static` directory, next to your document source files:

```python
html_static_path = ["_static"]
html_style = "custom.css"
```

In the following `custom.css` example, the `font-size` applied to the body is `1.1rem` instead of the default `1rem`. Also the `font-weight` applied to headers is `700` instead of the default of `300`. Additionally the `--nftt-doc-headers-color` is customized for the `light` and `dark` color schemes:

```scss
:root {
    --nftt-body-font-size: 1.1rem;
    --nftt-doc-headers-font-weight: 700;

    --light-red: #ff7777;
    --dark-red: #6f003c;
}

:root:not(.light):not(.dark) {
    color-scheme: light dark;
    --nftt-doc-headers-color: var(--dark-red);

    @media (prefers-color-scheme: light) {
        --nftt-doc-headers-color: var(--dark-red);
    }

    @media (prefers-color-scheme: dark) {
        --nftt-doc-headers-color: var(--light-red);
    }
}

:root:is(.light) {
    --nftt-doc-headers-color: var(--dark-red);
}

:root:is(.dark) {
    --nftt-doc-headers-color: var(--light-red);
}
```

## CSS Font Variables

Font families and font size are indicated directly in the `conf.py` file, as explained in [fonts](#doc-fonts).

:::{list-table} CSS Variables for font customization
:widths: 40 60
:header-rows: 1

* - Variable Name
  - Description
* - `--nftt-body-font-size`
  - It defaults to `1rem` or `16px`. Use it to increase or decrease all font sizes at once. The rest of the `font-size` properties are relative to it.
* - `--nftt-body-font-weight`
  - It defaults to `300`. It applies to both sidebars and the central column.
* - `--nftt-body-line-height`
  - It defaults to `1.5`. It applies to both sidebars and the central column.
* - `--nftt-headings-color`
  - Color for elements `H1`, `H2`, `H3`, `H4`, `H5` and `H6`. It defaults to `#000` and applies to both sidebars and the central column.
* - `--nftt-doc-headers-color`
  - Color for elements `H1`, `H2`, `H3`, `H4`, `H5` and `H6`. It defaults to `#000` and applies only to the document in the central column.
* - `--nftt-doc-headers-font-weight`
  - It defaults to `300`, and applies only to the document in the central column.
* - `--nftt-doc-headers-margin-top`
  - It defaults to `2rem`.
* - `--nftt-doc-headers-margin-bottom`
  - It defaults to `1rem`.
* - `--monospace-font-weight`
  - It defaults to `normal` or `400`.
:::

## CSS Blockquotes

:::{list-table} CSS Variables for blockquotes
:widths: 40 60
:header-rows: 1

* - Variable Name
  - Description
* - `--nftt-blockquote-padding`
  - It defaults to `1rem 1rem .1rem 2rem`.
* - `--nftt-blockquote-margin`
  - It defaults to `1rem .5rem`.
* - `--nftt-blockquote-font-size`
  - It defaults to `1.1rem`.
* - `--nftt-blockquote-font-style`
  - It defaults to `italic`.
* - `--nftt-blockquote-border-radius`
  - It defaults to `.25rem`.
:::

## CSS Tables

:::{list-table} CSS Variables for tables
:widths: 40 60
:header-rows: 1

* - Variable Name
  - Description
* - `--nftt-table-caption-font-size`
  - It defaults to `.9rem`.
* - `--nftt-table-caption-text-align`
  - It defaults to `center`.
* - `--nftt-table-caption-size`
  - It defaults to `top`.
* - `--nftt-table-thead-border-top`
  - It defaults to `1px`.
* - `--nftt-border-color`
  - It has to be defined for `.light` and `.dark` selectors. It applies to all borders.
* - `--nftt-table-thead-font-size`
  - It defaults to `1rem`.
* - `--nftt-table-tbody-font-size`
  - It defaults to `1rem`.
:::
