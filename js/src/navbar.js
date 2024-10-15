const HEADER_LINKS_LG_SELECTOR = ".nftt-header-links-large"
const HEADER_LINKS_SM_SELECTOR = ".nftt-header-links-small"

export class NavbarLinks {
  constructor() {
    this.hlinks_lg = document.querySelector(HEADER_LINKS_LG_SELECTOR);
    this.hlinks_sm = document.querySelector(HEADER_LINKS_SM_SELECTOR);
    this.pathname = URL.parse(window.location.href).pathname;
  }

  markActiveLink = () => {
    const re_elems = hlinks_lg.querySelectorAll("[data-snftt-link-regexps]");
  }
}


export function changeNavbarItemsOrder() {
  // If the element is not visible, the user is using
  // a smaller form factor, so nothing to do here.
  const hnav_elem = document.querySelector("header nav");
  const hlinks_lg = document.querySelector(HEADER_LINKS_LG_SELECTOR);
  const rect = hlinks_lg.getBoundingClientRect();
  if (rect.width==0 && rect.height==0)
    return;

  let nav_children = Array.prototype.slice.call(hnav_elem.children);
  nav_children = nav_children.filter(elem => {  // Remove invisible elements.
    const rect = elem.getBoundingClientRect();
    return (rect.width!=0 && rect.height!=0);
  });
  nav_children = nav_children.sort(
    (a, b) => (a.classList.contains("order-100")) ? 0 : 1
  );

  let row = 0;
  for (const elem of nav_children) {
    if (
      !elem.previousElementSibling
      || (elem.offsetLeft <= elem.previousElementSibling.offsetLeft)
    ) {
      row++;
    }
  }

  if (row > 1) {
    hlinks_lg.classList.add("order-100");
  } else {
    hlinks_lg.classList.remove("order-100");
  }

  return (row > 1);
}