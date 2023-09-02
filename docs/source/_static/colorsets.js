const DEFAULT = "cyan";

export class ColorSetHandler {
  constructor() {
    this.stored_color = localStorage.getItem('snftt-color');
    this.applyColor(this.preferredColor);
    this.updateDropdown(this.preferredColor);
  }

  registerClickEvents() {
    for (const item of document.querySelectorAll('[data-snftt-color]')) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const color = item.dataset.snfttColor;
        localStorage.setItem('snftt-color', color);
        this.applyColor(color);
        this.updateDropdown(color, true);
      });
    };
  }

  get preferredColor() {
    if (this.stored_color) {
      return this.stored_color;
    }
    return DEFAULT;
  }

  applyColor(color) {
    // This method replaces the current stylesheet by the new one,
    // based on the given color.
    let stylesheet = color === DEFAULT
      ? `sphinx-nefertiti`
      : `sphinx-nefertiti-${color}`;

    const re = new RegExp("\/(?<name>sphinx\-nefertiti[\-]?[a-z]*)\.");
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