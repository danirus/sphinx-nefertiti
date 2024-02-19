export function resizeAsides() {
  let height = "";

  const nftt_layout = document.querySelector(".nftt-layout");
  const nftt_content = document.querySelector(".nftt-content");
  const nftt_sidebar = document.querySelector(".nftt-sidebar");
  const nftt_sidebar_content = document.querySelector(".nftt-sidebar-content");
  const nftt_toc = document.querySelector(".nftt-toc");

  if (nftt_content != undefined) {
    height = nftt_content.clientHeight > document.body.clientHeight
      ? "height: calc(100vh - 7rem)"
      : `height: ${nftt_content.clientHeight}px`;
  }

  // Height for nftt-sidebar.
  // Apply style attribute to nftt-sidebar (when min-width >= 1200px).
  if (window.matchMedia('(min-width: 1200px)').matches == false) {
    nftt_sidebar?.setAttribute("style", "");
  } else {
    nftt_sidebar?.setAttribute("style", height);
  }

  // Height for nftt-toc.
  // Apply style attribute to nftt-toc (when min-width >= 992px).
  if (window.matchMedia('(min-width: 992px)').matches == false) {
    nftt_toc?.setAttribute("style", "");
    return "";
  } else {
    nftt_toc?.setAttribute("style", height);
  }

  // Compute new 'grid-template-columns' for nftt-layout.
  const max = (window.innerWidth - nftt_content.offsetWidth);
  const newmax = nftt_toc
    ? Math.floor(max / 2)
    : (
      nftt_sidebar_content
        ? Math.floor((max + nftt_sidebar_content.offsetWidth) / 2)
        : undefined
    );
  if (newmax) {
    const newgtcols = `minmax(300px, ${newmax}px) 5fr`;
    nftt_layout?.setAttribute("style", `grid-template-columns: ${newgtcols}`);
  }

  return [height, newmax];
}


export function updateScrollPaddingTop() {
  let scroll_padding_top = -1;
  const element = document.querySelector("html");
  const header_h = element.querySelector("header")?.offsetHeight;
  if (header_h != undefined) {
    scroll_padding_top = header_h + 24;
    element.setAttribute(
      "style", `scroll-padding-top: ${scroll_padding_top}px`
    );
  }
  return scroll_padding_top;
}
