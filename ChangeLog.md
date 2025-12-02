# Change Log

## [0.9.1] - 2025-12-02

- Fixes issue [#93](https://github.com/danirus/sphinx-nefertiti/issues/93): Wide table modal doesn't display for standard syntax Markdown tables.
- Fixes the styling of the link that open Mermaid diagrams in the modal window provided with sphinxcontrib-mermaid implemented in their [PR#190](https://github.com/mgaitan/sphinxcontrib-mermaid/pull/190). [#91](https://github.com/danirus/sphinx-nefertiti/issues/91)
- The background color in dark mode goes darker, from `#212529` to `#181b1e`.

## [0.9.0] - 2025-11-19

- Add the capacity to display wide tables in a modal. Wide table are those with a width wider than the central column.
- Add show-source links, at the right side of the breadcrumbs. Associated settings are `html_copy_source` and `html_show_sourcelink` provided by Sphinx, and the configuration setting `docs_repository_url` [1](https://sphinx-nefertiti.readthedocs.io/latest/users-guide/theme-options.html#docs-repository-url) in `html_theme_options`.
- Add attribute `target` to header and footer links. When provided empty, it takes the value `_self`, so that the link opens in the same browser window. Otherwise the attribute is passed as is to the output in HTML.
- Remove theme setting `show_powered_by` in favor of `html_show_sphinx`.

## [0.8.10] - 2025-11-01

- Fix resizing the sidebars depending on the height of the content of the central column. The resizing is needed to adjust sidebars' height to the height displayed in the central column. And to make the scroll-into-view of TOC entries. When the TOC is longer than the content in the central column, the scroll-into-view of an entry in the TOC may scroll upwards the content of the central column.

## [0.8.9] - 2025-09-16

- Fix CSS code to prevent `<pre>` elements to overflow horizontally when used to document APIs with the autodoc extension.
- Provide default CSS attributes for selector `.project-logo` when used in the sidebar. By default the image does not need specific width and hight, and it uses an `aspect-ratio` with value `auto`.

## [0.8.8] - 2025-09-11

- Update bootstrap dependency to version 5.3.8.
- Remove hard-coded `style` attribute added to `globaltoc.html` during 0.8.7.

## [0.8.7] - 2025-09-11

- Add new theme option `logo_location`, requested with [ticket 78](https://github.com/danirus/sphinx-nefertiti/issues/78), to optionally display the logo in the sidebar. Document the new feature. See the details in the [theme-options](https://sphinx-nefertiti.readthedocs.io/latest/users-guide/theme-options.html#logo-location).

## [0.8.6] - 2025-08-04

- Fix for the TOC ([issue 75](https://github.com/danirus/sphinx-nefertiti/issues/75)): The `IntersectionObserver` has to *observe* API entries too, which are DL DT elements in the document.

## [0.8.5] - 2025-06-25

- Add theme option `project_short`, and related tests.
- Fix header aspect when the project name overflow the x-axis in small screens.
- Fix issue when toggling neutral header using the colorset dropdown.
- Add new documentation page listing all the options supported.

## [0.8.4] - 2025-06-19

- Add CSS class `highlighted`, required to highlight search results terms.
- Fixes documentation regarding header-links in `quick-start.rst`.

## [0.8.3] - 2025-06-15

- Fixes issue when running a few make targets other than `html`.

## [0.8.2] - 2025-06-07

- Includes `theme-color` meta tag.

## [0.8.1] - 2025-06-03

- Use Ubuntu Sans Mono as default monospace font.
- Fixes small issue in JavaScript plugin.

## [0.8.0] - 2025-06-03

- Add locale dropdown element. It shows up when declaring ``locales`` in the ``html_theme_options``.
- Add documentation on localization (single language site, multilingual site).
- Includes i18n catalog for German and Spanish (defaults to English).
- Update fonts declaration so that users can overwrite `font-weight`.
- Add support for [sphinx-last-updated-by-git](https://pypi.org/project/sphinx-last-updated-by-git/) in the `footer.html`.

## [0.7.5] - 2025-03-23

- Use 300 font-weight when there is browser support for variable font-weight.
- Lighten background from $gray-200 to $gray-100 in light theme.
- Use default fonts for the docs.

## [0.7.4] - 2025-01-07

- Change close button color when switching between dark/light color schemes.
- Change dividers color when switching between dark/light color themes.
- Make search field full width when in small form factor view.

## [0.7.3] - 2024-12-04

- Increment font color contrast in light color-scheme.

## [0.7.2] - 2024-12-04

- Raise exception when using sphinx-nefertiti with Sphinx<7.0.0.

## [0.7.1] - 2024-12-02

- Fix issue about the use of `style_header_neutral` in the `layout.html` and the `colorsets-dropdown.html` templates.

## [0.7.0] - 2024-12-02

- New: Theme option `style_header_neutral` (boolean) to integrate header background color with light/dark color-schemes. Update docs and tests accordingly.

## [0.6.0] - 2024-11-29

- New: Highlight the item in the TOC at the right side ('on this page' column) when the location bar refers to an anchor that is part of the TOC.
- Change: Lighten body background in light color-scheme for all colorsets.

## [0.5.3] - 2024-11-28

- ReadTheDocs no longer provides versions in the context of the template.
- Update quick-start and version-dropdown documents.
- Update `versions.js` to display the `current_version` given in `conf.py`.

## [0.5.2] - 2024-11-26

- Increase contrast for body-bg, pre-border-color, and border-color for the light color scheme, in all colorsets.
- Fix colorset selector. Data attributes do not match between JS and HTML.
- Fix light/dark selector. When not 'default', reloading brings back 'default'.
- Update required version of sphinx-colorschemed-images.
- Update `colorsets.rst` in the docs.

## [0.5.1] - 2024-11-26

- Header and footer links can be references to internal documents or URLs.
- Fix issue in Nefertiti when building the docs in ReadTheDocs.

## [0.5.0] - 2024-11-25

- Add breadcrumbs.
- Use smooth scrolling.
- Add **back-to-top** button.
- Add customizable header links.
- Limit height of version dropdown.
- Use compact notation to display number of stars, and forks, in header's repository widget.
- Scroll the left sidebar to show the link corresponding to the current page.
- In the sphinx-nefertiti documentation website, reset the colorset selected by the user 24 hours after it has been selected.
- Migrate from `setup.py` and multiple requirements files, to `pyproject.toml`.
- Use tox to run verify that tests pass against multiple versions of Sphinx.

## [0.4.2] - 2024-10-15

- Remove version constrain for Sphinx 8 in Nefertiti's dependencies.

## [0.4.1] - 2024-08-10

- Fix various UI/CSS issues in small form factors.

## [0.4.0] - 2024-08-05

- Move `pygments_light_style` and `pygments_dark_style` options inside theme options (`html_theme_options`), as `pygments_dark_style` is no longer a valid config setting in `app.config` by Sphinx. Update docs accordingly.
- Change CSS margins for table element.
- Use text-align in paragraphs included inside figures, so that they are aligned conform to the figure alignment.

## [0.3.7] - 2024-08-02

- Fix highlighting foldable items in the left-side TOC when they are the current selected item.
- Update actions in `publish.yml` GH action workflow.

## [0.3.6] - 2024-08-02

- Small fix: include missing non-python files in the package.

## [0.3.5] - 2024-08-02

- Provide better support for version-change directives (`versionadded`, `versionchanged`, `deprecated`, and `versionremoved`) when they only get a version number and no optional explanatory text.
- Increment the font size for monospace font to match normal font.

## [0.3.4] - 2024-06-26

- Fix in `js/src/tocresize.py` to avoid setting the height of the sidebars when they are not part of the grid.

## [0.3.3] - 2024-04-30

- Fix issue in `pygments.py` when building Sphinx docs with the theme.

## [0.3.2] - 2024-03-13

- Use the directive `:hideindex: 1`, to hide the nftt-sidebar-content.
- For compatibility with previous versions, rename stored color from cyan to default.
- Move footer to the bottom of the page.

## [0.3.1] - 2024-03-11

- Serve static files with the version number in the name.

## [0.3.0] - 2024-03-10

- When producing the HTML static site, create a file called `doc_versions.js`, containing the list of versions (name and url) specified in the `version` entry of the `html_theme_options`.
- Change the CSS layout so that the grid centers itself, regardless of whether the toc at the right side is visible or not.

## [0.2.3] - 2024-02-20

- Use a fluid layout (Bootstrap's `container-fluid`) to allow expanding the TOC
in the right side to the right border of the browser. The goal is to increase
readability of that area, specially when displaying content in monospace (ie:
APIs and the like).

## [0.1.13] - 2023-10-01

- Fixes issues #10: Image caption displayed centered only in the default colorset. File `scss/components/_images.scss` was not included when building the rest of the colorsets. Fixed by Jinyan Xu, @Phantom1003.

## [0.1.12] - 2023-09-30

- Fixes issues 6: Incorrect page navigator when enabling numbered toc. Thanks to Jinyan Xu, @Phantom1003.
