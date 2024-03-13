# Change Log

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
