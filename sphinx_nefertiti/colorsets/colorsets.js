let DEFAULT = "default";
let RESET_AFTER_MS = 0;

class ColorSetHandler {
  constructor() {
    const def_elem = document.querySelector(".active[data-snftt-colorset]");
    if (def_elem != undefined) {
      DEFAULT = def_elem.dataset?.snfttColorset || "default";
    }

    const meta_prop = document.querySelector('meta[name="colorset-reset"]');
    RESET_AFTER_MS = Number.parseInt(meta_prop.content);

    const now_epoch = Date.now();
    const doc_last_modified = Date.parse(document.lastModified);
    const colorset_changed_epoch = Number.parseInt(
      localStorage.getItem('snftt-colorset-changed-epoch')
    );

    if (
      !colorset_changed_epoch
      || (doc_last_modified > colorset_changed_epoch)
      || (
        (RESET_AFTER_MS > 0)
        && now_epoch > (colorset_changed_epoch + RESET_AFTER_MS)
      )
    ) {
      localStorage.removeItem('snftt-colorset');
    }

    this.applyColorset(localStorage.getItem('snftt-colorset') || DEFAULT);
    this.updateDropdown(localStorage.getItem('snftt-colorset') || DEFAULT);

    // Set timer to reset to default if the timer does not exist yet.
    if (!colorset_changed_epoch) {
      localStorage.setItem('snftt-colorset-changed-epoch', Date.now());
    }
  }

  registerClickEvents() {
    for (const item of document.querySelectorAll('[data-snftt-colorset]')) {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const color = item.dataset.snfttColorset;
        localStorage.setItem('snftt-colorset', color);
        this.applyColorset(color);
        this.updateDropdown(color, true);
        localStorage.setItem('snftt-colorset-changed-epoch', Date.now());
      });
    };
  }

  applyColorset(color) {
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
    const prefix = "data-snftt-colorset";
    const selector = document.querySelector("#snftt-color");
    const sch_item = document.querySelector(`[${prefix}="${color}"]`);

    const elements = document.querySelectorAll(`[${prefix}]`);
    for (const element of elements) {
      element.classList.remove('active', 'current');
      element.setAttribute('aria-pressed', 'false');
    };

    if (sch_item != undefined) {
      sch_item.classList.add('active', 'current');
      sch_item.setAttribute('aria-pressed', 'true');
    }

    if (focus) {
      selector.focus();
    }
  }
}

function runWhenDOMContentLoaded(cb) {
  if (document.readyState != 'loading') {
    cb();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', cb);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState == 'complete') cb();
    });
  }
}

window.addEventListener('DOMContentLoaded', (_) => {
  const colorset_handler = new ColorSetHandler();
  colorset_handler.registerClickEvents();
});
