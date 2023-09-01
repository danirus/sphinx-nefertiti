export class LuzHandler {
  constructor() {
    this.stored_luz = localStorage.getItem('snftt-luz');
    this.applyLuz(this.preferredLuz);
    this.updateDropdown(this.preferredLuz);
  }

  registerClickEvents() {
    for (const item of document.querySelectorAll('[data-snftt-luz]')) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const luz = item.dataset.snfttLuz;
        localStorage.setItem('snftt-luz', luz);
        this.applyLuz(luz);
        this.updateDropdown(luz, true);
      });
    };
  }

  get preferredLuz() {
    if (["light", "dark"].includes(this.stored_luz)) {
      return this.stored_luz;
    }
    return 'default';
  }

  applyLuz(luz) {
    switch(luz) {
      case "default": {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        const q = window.matchMedia('(prefers-color-scheme: dark)');
        const prefers = q.matches ? 'dark' : 'light';
        document.documentElement.classList.add(prefers);
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
      }
    }
  }

  updateDropdown(luz, focus = false) {
    const prefix = "data-snftt-luz";
    const selector = document.querySelector("#snftt-luz");
    const sel_icon = document.querySelector(`[${prefix}-icon-active]`);
    const luz_item = document.querySelector(`[${prefix}="${luz}"]`);
    const luz_icon = document.querySelector(`[${prefix}-icon="${luz}"]`);

    const elements = document.querySelectorAll(`[${prefix}]`);
    for (const element of elements) {
      element.classList.remove('current');
      element.setAttribute('aria-pressed', 'false');
    };

    if (luz_item != undefined) {
      luz_item.classList.add('current');
      luz_item.setAttribute('aria-pressed', 'true');
    }

    sel_icon?.setAttribute('class', luz_icon.classList.value);

    if (focus) {
      selector.focus();
    }
  }
}
