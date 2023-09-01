// --------------------------------------------------------
// Selector to use with document.querySelector(SELECTOR),
// that represents the HTML template element containing the
// button to expand/fold the toc tree.
//
const FIGURE_IMG_SELECTOR = "#content figure";

export function fixFigureStyle() {
  const figures = document.querySelectorAll(FIGURE_IMG_SELECTOR);
  for(const figure of figures) {
    const img = figure.querySelector("img");
    if (img && img.style && (img.style.width || img.style.height)) {
      const elem_width = img.width;
      figure.style['width'] = `${elem_width}px`;
      const figcaption = figure.querySelector("figcaption");
      if (figcaption) {
        figcaption.style['width'] = `${elem_width}px`;
      }
      if (img.style.width) {
        img.style.width = "";
      }
    }
  }
}