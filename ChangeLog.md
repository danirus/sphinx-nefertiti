# Change Log

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
