function _addActiveCssClass(elem) {
  elem.classList.add("active");
  elem.ariaCurrent=true;
  if (elem.classList.contains("dropdown-item")) {
    const parent = elem.closest("li.nav-item.dropdown");
    if (!parent) return;

    const anchor = parent.querySelector("a.nav-link.dropdown-toggle")
    if (!anchor) return;

    if (anchor) {
      anchor.classList.add("active");
      anchor.ariaCurrent = true;
    }
  }
}

export function selectActiveHeaderLink() {
  const curl = URL.parse(window.location.href);

  for (const elem of document.querySelectorAll(".snftt-hl")) {
    elem.classList.remove("active");
    elem.ariaCurrent = false;
  }

  let qs = `.snftt-hl[href='${curl.pathname}']`;
  let elements = document.querySelectorAll(qs);
  for (const elem of elements) {
    _addActiveCssClass(elem);
  }

  // If there are elements, it means a header-link has been found with
  // the exact same pathname as the one the user is browsing. There has
  // to be several elements because the header-links are in two HTML
  // classes, nftt-header-links-large and nftt-header-links-small.
  if (elements.length > 0)
    return;

  // Find header-link element (.snftt-hl) with regexps, and
  // check whether the current pathname matches the regexp.
  let hl_id = 0;  // Not found.
  qs = ".nftt-header-links-large .snftt-hl[data-snftt-hl-regexps]"
  for (const elem of document.querySelectorAll(qs)) {
    const regexps = elem.dataset.snfttHlRegexps.split("&&");
    for (const re_str of regexps) {
      const re = new RegExp(re_str);
      if (re.test(curl.pathname)) {
        // The first regexp that returns true is considered valid. Leave
        // the loop and select the two elements with the same hl-id.
        hl_id = elem.dataset.snfttHlId;
        break;
      }
    }
  }

  if (hl_id == 0)
    return;

  qs = `.snftt-hl[data-snftt-hl-id='${hl_id}']`;
  for (const elem of document.querySelectorAll(qs)) {
    _addActiveCssClass(elem);
  }
}
