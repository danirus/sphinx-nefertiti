export function updateLocale() {
  const def_locale = globalThis.def_locale || "";
  const qs_locale_active = "[data-snftt-locale-active]";
  const locale_active = document.querySelector(qs_locale_active);
  const qs_locale_item = `[data-snftt-locale="${def_locale}"]`;
  const locale_item = document.querySelector(qs_locale_item);

  for (const element of document.querySelectorAll('[data-snftt-locale]')) {
    element.classList.remove('active', 'current');
    element.setAttribute('aria-pressed', 'false');
  }

  if (locale_item != undefined) {
    locale_item.classList.add('active', 'current');
    locale_item.setAttribute('aria-pressed', 'true');
  }
}

export function feedLocalesMenu() {
  const locmenu = document.getElementById("locales-dropdown-menu");
  if (!locmenu) {
    console.log("Couldn't find an element with id='locales-dropdown-menu'.");
    return false;
  }

  const q_loc_url = "[data-snftt-locale-active-url]";
  const curr_loc_url_elem = document.querySelector(q_loc_url);
  const curr_loc_url = curr_loc_url_elem.dataset.snfttLocaleActiveUrl;
  // Use the variable 'docs_locales' loaded as a script in layout.html.
  // The file docs_locales.js is produced by locales.py when building
  // the site (make html).
  for (const item of globalThis.docs_locales) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add(
      "dropdown-item", "d-flex", "align-items-center",
      "justify-content-between"
    );
    anchor.setAttribute("aria-pressed", "false");
    const loc_href = window.location.href.replace(curr_loc_url, item.url);
    anchor.setAttribute("href", loc_href);
    anchor.dataset.snfttLocaleUrl = item.url;
    anchor.dataset.snfttLocale = item.lc;
    const span = document.createElement("span");
    span.classList.add("ms-2");
    span.textContent = item.name;
    const i = document.createElement("i");
    i.classList.add("bi", "bi-check", "ms-auto");
    anchor.append(span);
    anchor.append(i);
    li.append(anchor);
    locmenu.append(li);
  }

  return true;
}
