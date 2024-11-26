import { SphinxColorschemeImageHandler } from "sphinx-colorschemed-images";

export class CSchemeHandler {
  constructor() {
    this.stored = localStorage.getItem('snftt-color-scheme') || "default";
    this._cshdl = new SphinxColorschemeImageHandler({auto: false});
    for (const scheme of ['dark', 'light']) {
      const q = globalThis.matchMedia(`(prefers-color-scheme: ${scheme})`);
      if (q.matches && this.stored == 'default') {
        this.apply(scheme);
        this.updateDropdown(this.stored);
        this._cshdl.activate(scheme);
      }
      q.addEventListener('change', e => {
        if (e.matches) {
          this.apply(scheme);
          this._cshdl.activate(scheme);
        }
      });
    }
    if (this.stored != "default") {
      this.apply(this.stored);
      this.updateDropdown(this.stored);
      this._cshdl.activate(this.stored);
    }
  }

  registerClickEvents() {
    for (const item of document.querySelectorAll('[data-snftt-luz]')) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        this.stored = item.dataset.snfttLuz;
        localStorage.setItem('snftt-color-scheme', this.stored);
        this.apply(this.stored);
        this.updateDropdown(this.stored, true);
        this._cshdl.activate(this.preferred);
      });
    };
  }

  get preferred() {
    if (["light", "dark"].includes(this.stored)) {
      return this.stored;
    }
    const q = globalThis.matchMedia('(prefers-color-scheme: dark)');
    return q.matches ? 'dark' : 'light';
  }

  apply(option) {
    switch(option) {
      case "default": {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add(this.preferred);
        return;
      }
      case "dark": {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        return;
      }
      case "light": {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        return;
      }
    }
  }

  updateDropdown(cscheme, focus = false) {
    const prefix = "data-snftt-luz";
    const selector = document.querySelector("#snftt-luz");
    const sel_icon = document.querySelector(`[${prefix}-icon-active]`);
    const luz_item = document.querySelector(`[${prefix}="${cscheme}"]`);
    const luz_icon = document.querySelector(`[${prefix}-icon="${cscheme}"]`);

    const elements = document.querySelectorAll(`[${prefix}]`);
    for (const element of elements) {
      element.classList.remove('active', 'current');
      element.setAttribute('aria-pressed', 'false');
    };

    if (luz_item != undefined) {
      luz_item.classList.add('active', 'current');
      luz_item.setAttribute('aria-pressed', 'true');
    }

    sel_icon?.setAttribute('class', luz_icon.classList.value);

    if (focus) {
      selector.focus();
    }
  }
}
