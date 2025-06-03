export class LocaleHandler {
  constructor() {
    const locmenu = document.getElementById("locales-dropdown-menu");
    if (!locmenu) {
      console.log(
        "Couldn't find id 'locales-dropdown-menu': site is single locale."
      );
      return false;
    }
    this.locmenu = locmenu;
  }

  registerClickEvents() {
    const q_loc_url = "[data-snftt-locale-active-url]";
    const curr_loc_url_elem = document.querySelector(q_loc_url);
    if (!curr_loc_url_elem)
      return;
    const curr_loc_url = curr_loc_url_elem.dataset.snfttLocaleActiveUrl;

    const selector = "#locales-dropdown-menu .dropdown-item";
    for (const item of document.querySelectorAll(selector)) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = window.location.href.replace(
          curr_loc_url, item.dataset.snfttLocaleUrl
        );
      });
    }
  }
}
