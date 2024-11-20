export function resizeAsides() {
  let style = "";
  let height = "";
  let top = "";

  const nftt_content = document.querySelector(".nftt-content");
  const nftt_sidebar = document.querySelector(".nftt-sidebar");
  const backtotop_div = document.getElementById("back-to-top-container");
  const nftt_toc = document.querySelector(".nftt-toc");
  const header_h = document.querySelector("header")?.offsetHeight;

  // If min-width is not >= 1200px, don't do anything.
  if (window.matchMedia('(min-width: 1200px)').matches == false) {
    nftt_sidebar?.setAttribute("style", "");
    nftt_toc?.setAttribute("style", "");
    return "";
  }

  if (nftt_content != undefined) {
    height = nftt_content.clientHeight > document.body.clientHeight
      ? `height: calc(100vh - ${header_h + 40}px)`
      : `height: ${nftt_content.clientHeight}px`;
    top = `top: ${header_h + 40}px`;

    style = `${height}; ${top};`
    nftt_sidebar?.setAttribute("style", style);
    nftt_toc?.setAttribute("style", style);
    backtotop_div?.setAttribute("style", `top: ${header_h + 20}px`);
  }

  return style;
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
