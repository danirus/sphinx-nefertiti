# Change Log

## [0.2.3] - 2024-02-20

- Use a fluid layout (Bootstrap's `container-fluid`) to allow expanding the TOC
in the right side to the right border of the browser. The goal is to increase
readability of that area, specially when displaying content in monospace (ie:
APIs and the like).

## [0.1.13] - 2023-10-01

- Fixes issues #10: Image caption displayed centered only in the default colorset. File `scss/components/_images.scss` was not included when building the rest of the colorsets. Fixed by Jinyan Xu, @Phantom1003.

## [0.1.12] - 2023-09-30

- Fixes issues 6: Incorrect page navigator when enabling numbered toc. Thanks to Jinyan Xu, @Phantom1003.
