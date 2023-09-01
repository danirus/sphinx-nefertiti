export function resizeAsides() {
  let height = "";
  const nftt_content = document.querySelector(".nftt-content");
  const nftt_sidebar = document.querySelector(".nftt-sidebar");
  const nftt_toc = document.querySelector(".nftt-toc");

  // If min-width is not >= 992px, don't do anything.
  if (window.matchMedia('(min-width: 992px)').matches == false) {
    nftt_sidebar?.setAttribute("style", "");
    nftt_toc?.setAttribute("style", "");
    return "";
  }

  if (nftt_content != undefined) {
    height = nftt_content.clientHeight > document.body.clientHeight
      ? "height: calc(100vh - 7rem)"
      : `height: ${nftt_content.clientHeight}px`;
    nftt_sidebar?.setAttribute("style", height);
    nftt_toc?.setAttribute("style", height);
  }

  return height;
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
