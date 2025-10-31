export function resizeAsides() {
  let style = "";
  let height = "";
  let top = "";

  const nftt_content = document.querySelector(".nftt-content > div");
  const nftt_sidebar = document.querySelector(".nftt-sidebar");
  const backtotop_div = document.getElementById("back-to-top-container");
  const nftt_toc = document.querySelector(".nftt-toc");
  const header_h = document.querySelector("header")?.offsetHeight;
  const footer_h = document.querySelector("footer")?.offsetHeight;

  // If min-width is not >= 1200px, don't do anything.
  if (window.matchMedia('(min-width: 1200px)').matches == false) {
    nftt_sidebar?.setAttribute("style", "");
    nftt_toc?.setAttribute("style", "");
    return "";
  }

  if (nftt_content == undefined)
    return "";

  if (nftt_content.clientHeight < document.body.clientHeight) {
    // The following values below mean:
    // 40px == 2.5rem of the margin-top of selector nftt-page, and
    // 24px == 1.5rem is the margin-bottom of selector nftt-page.
    const h = document.body.clientHeight - header_h - footer_h - 40 - 24;
    height = h < nftt_content.clientHeight
      ? `height: ${nftt_content.clientHeight}px`
      : `height: ${h}px`;
  } else {
    height = `height: calc(100vh - ${header_h + 40}px)`;
  }
  top = `top: ${header_h + 40}px`;

  style = `${height}; ${top};`
  nftt_sidebar?.setAttribute("style", style);
  nftt_toc?.setAttribute("style", style);
  backtotop_div?.setAttribute("style", `top: ${header_h + 20}px`);

  return style;
}


export function updateScrollPaddingTop() {
  let scroll_padding_top = -1;
  const element = document.querySelector("html");
  const header_h = element.querySelector("header")?.offsetHeight;
  if (header_h != undefined) {
    // 24 is aprox. amount of pixels in margin-top of nftt-page.
    scroll_padding_top = header_h + 24;
    element.setAttribute(
      "style", `scroll-padding-top: ${scroll_padding_top}px`
    );
  }
  return scroll_padding_top;
}
