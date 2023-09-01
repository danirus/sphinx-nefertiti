// --------------------------------------------------------
// Selector to use with document.querySelector(SELECTOR),
// that represents the HTML template element containing the
// button to expand/fold the toc tree.
//
const TEMPLATE_SELECTOR = "[data-toggle-item-template]";

function loadRefList() {
  let refs = [];
  const toc_expanded_stored = localStorage.getItem("toc-expanded");
  if (toc_expanded_stored?.trim().length) {
    refs = toc_expanded_stored.split(",");
  }

  return refs;
}

export class MenuHandler {
  constructor() {
    this.toc;
    this.refs;
    this.filter;
  }

  _removeRef = (ref) => {
    const pos = this.refs.indexOf(ref);
    if (pos > -1) {
      this.refs.splice(pos, 1);
      localStorage.setItem("toc-expanded", this.refs.join(","));
    }
  }

  _expandRefs = () => {
    for (const ref of this.refs) {
      const li_item = this.toc.querySelector(`li[data-snftt-ref='${ref}']`);
      if (li_item == undefined) {
        this._removeRef(ref);
        continue;
      }
      if (!li_item.classList.contains("expand")) {
        li_item.classList.toggle("expand");
        this._updateItem(li_item);
      }
    }
  }

  _expandOrFoldAll = (expand=true) => {
    const links = this.toc ? this.toc.querySelectorAll("a.reference") : [];
    for (const link of links) {
      if (link.nextElementSibling) {
        const li_item = link.parentElement;
        if (expand) {
          li_item.classList.add("expand");
        } else {
          li_item.classList.remove("expand");
        }
        this._updateItem(li_item, false);
      }
    }
  }

  _updateItem = (li_item, update_refs=true) => {
    const icon = li_item.querySelector("i");

    if (li_item.classList.contains("expand")) {
      icon.classList.remove("bi-caret-right");
      icon.classList.add("bi-caret-down");
      if (update_refs && !this.refs.includes(li_item.dataset.snfttRef)) {
        this.refs.push(li_item.dataset.snfttRef);
        localStorage.setItem("toc-expanded", this.refs.join(","));
      }
    } else {
      icon.classList.remove("bi-caret-down");
      icon.classList.add("bi-caret-right");
      if (update_refs && this.refs.includes(li_item.dataset.snfttRef)) {
        this._removeRef(li_item.dataset.snfttRef);
      }
    }
  }

  _clickHandler = (event) => {
    const expand_button = event.currentTarget;
    const element = expand_button?.parentElement;
    element.classList.toggle("expand");
    this._updateItem(element);
  }

  _keyupHandler = (event) => {
    const uls = this.toc.querySelectorAll("ul");
    const links = this.toc.querySelectorAll("a.reference");

    // Stop filtering -> remove d-none from all li and ul elements.
    if (this.filter.value.length === 0) {
      for (const link of links) {
        link.parentElement?.classList.remove("d-none");
      }
      for (const ul of uls) {
        ul.classList.remove("d-none");
      }
      this._expandOrFoldAll(false);  // Passing false means fold.
      this._expandRefs();
      return;
    }

    // 1st. hide all li elements in the toc.
    for (const link of links) {
      link.parentElement?.classList.add("d-none");
    }
    for (const ul of uls) {
      ul.classList.add("d-none");
    }


    this._expandOrFoldAll(true);

    // 2nd. show li elements whose anchor matches the filter.
    const filter_re = new RegExp(this.filter.value, 'i');
    for (const link of links) {
      if (!filter_re.test(link.textContent))
        continue;

      let li_item = link;
      let parent = li_item?.parentElement;

      while (li_item) {  // Loop to make visible parent elements up the toc.
        li_item.classList.remove("d-none");
        parent = li_item.parentElement;
        if (parent.nodeName === "UL") {
          parent?.classList.remove("d-none");
        }
        li_item = parent?.closest("li");
      }
    }
  }

  init = () => {
    let num_expandable_menus = 0;
    this.toc = document.querySelector(".toc");
    this.filter = this.toc.querySelector("input[name='filter']");
    this.refs = loadRefList();

    const links = this.toc ? this.toc.querySelectorAll("a.reference") : [];

    const tmpl = document.querySelector(TEMPLATE_SELECTOR);
    const tmpl_button = tmpl?.content.firstElementChild;

    if (tmpl_button == undefined)
      return -1;

    this.filter.addEventListener('keyup', this._keyupHandler);

    for (const link of links) {
      if (link.nextElementSibling) {
        const expand_button = tmpl_button.cloneNode(true);
        expand_button.addEventListener('click', this._clickHandler, true);
        link.before(expand_button);

        // Maybe there is already a LI item displayed with the
        // "current" class added. In such a case update the
        // icon to display a dash symbol instead of a plus.
        const li_item = link.parentElement;
        li_item.dataset.snfttRef = link.href;
        if (li_item && li_item.classList.contains("current")) {
          li_item.classList.toggle("current");
          li_item.classList.toggle("expand");
          this._updateItem(li_item);
        }

        num_expandable_menus++;
      }
    }

    // Expand items that where expanded before,
    // and saved in localStorage.
    this._expandRefs();

    return num_expandable_menus;
  }
}
