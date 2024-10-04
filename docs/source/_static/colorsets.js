const DEFAULT = "default";

const RESET_AFTER_MS = 1000 * 60 * 60 * 24;  // 1 day.

export class ColorSetHandler {
  constructor() {
    // reset_epoch is the epoch after which the user selected
    // colorset has to be ignored.
    const now_epoch = Date.now();
    const reset_epoch = Number.parseInt(
      localStorage.getItem('snftt-color-reset-after')
    );

    if (!reset_epoch || now_epoch < reset_epoch) {
      this.stored_color = localStorage.getItem('snftt-color');
      if (this.stored_color == "cyan") { // Fix for previos stored value 'cyan'.
        this.stored_color = DEFAULT;
      }
      this.applyColor(this.preferredColor);
      this.updateDropdown(this.preferredColor);
    }

    // Set timer to reset to default if the timer does not exist yet.
    if (!reset_epoch) {
      localStorage.setItem(
        'snftt-color-reset-after', Date.now() + RESET_AFTER_MS
      );
    }
  }

  registerClickEvents() {
    for (const item of document.querySelectorAll('[data-snftt-color]')) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const color = item.dataset.snfttColor;
        localStorage.setItem('snftt-color', color);
        this.applyColor(color);
        this.updateDropdown(color, true);
        localStorage.setItem(
          'snftt-color-reset-after', Date.now() + RESET_AFTER_MS
        );
      });
    };
  }

  get preferredColor() {
    if (this.stored_color) {
      console.log(`this.stored_color: ${this.stored_color}`);
      return this.stored_color;
    }
    return DEFAULT;
  }

  applyColor(color) {
    // This method replaces the current stylesheet by the new one,
    // based on the given color.
    let stylesheet = `sphinx-nefertiti-${color}`;

    const re = new RegExp("\/(?<name>sphinx\-nefertiti[\-]{1}[a-z]+)");
    for (const sheet of document.getElementsByTagName("link")) {
      if (sheet.href) {
        const url = new URL(sheet.href);
        const match = url.pathname.match(re);
        if (match) {
          const matching_name = match.groups['name'];
          if (matching_name !== stylesheet) {
            url.pathname = url.pathname.replace(matching_name, stylesheet);
            sheet.href = url.toString();
          }
          break;
        }
      }
    }
  }

  updateDropdown(color, focus = false) {
    const prefix = "data-snftt-color";
    const selector = document.querySelector("#snftt-color");
    const sch_item = document.querySelector(`[${prefix}="${color}"]`);

    const elements = document.querySelectorAll(`[${prefix}]`);
    for (const element of elements) {
      element.classList.remove('current');
      element.setAttribute('aria-pressed', 'false');
    };

    if (sch_item != undefined) {
      sch_item.classList.add('current');
      sch_item.setAttribute('aria-pressed', 'true');
    }

    if (focus) {
      selector.focus();
    }
  }
}

window.addEventListener('DOMContentLoaded', (_) => {
  // The LuzHandler controls the selection of the 3 possible
  // options (light, dark, default) and the switching between
  // them.
  const colorset_handler = new ColorSetHandler();
  colorset_handler.registerClickEvents();
});
