import { MenuHandler } from '../../src/menu.js';
import { getFixture, clearFixture } from '../helpers/fixture.js';

const toggle_item_template = [
  '<template data-toggle-item-template="">',
  '  <button class="btn btn-sm btn-link toctree-expand" type="button">',
  '    <i class="bi bi-caret-right"></i>',
  '    <span class="visually-hidden">Toggle menu contents</span>',
  '  </button>',
  '</template>'
];

const toc_empty = [
  '<nav class="toc" aria-label="Main menu">',
  '  <div><input type="text" name="filter" placeholder="filter"></div>',
  '</nav>'
];

const toc_with_zero_expandable_menu = [
  '<nav class="toc" aria-label="Main menu">',
  '  <div><input type="text" name="filter" placeholder="filter"></div>',
  '  <ul>',
  '    <li class="toctree-l1">',
  '      <a class="reference internal" href="quick-start.html">Quick start</a>',
  '    </li>',
  '    <li class="toctree-l1">',
  '      <a class="reference internal" href="tutorial.html">Tutorial</a>',
  '    </li>',
  '  </ul>',
  '</nav>'
];

const toc_with_one_expandable_menu = [
  '<nav class="toc" aria-label="Main menu">',
  '  <div><input type="text" name="filter" placeholder="filter"></div>',
  '  <ul>',
  '    <li class="toctree-l1">',
  '      <a class="reference internal" href="users-guide/users-guide.html">',
  '        Users guide',
  '      </a>',
  '      <ul>',
  '        <li class="toctree-l2">',
  '          <a class="reference internal" href="users-guide/install.html">',
  '            Install',
  '          </a>',
  '        </li>',
  '        <li class="toctree-l2">',
  '          <a class="reference internal" href="users-guide/setup.html">',
  '            Setup',
  '          </a>',
  '        </li>',
  '      </ul>',
  '    </li>',
  '  </ul>',
  '</nav>'
];

const toc_with_expanded_menu_ala_sphinx = [
  '<nav class="toc" aria-label="Main menu">',
  '  <div><input type="text" name="filter" placeholder="filter"></div>',
  '  <ul>',
  '    <li class="toctree-l1 current">',  // Comes from Sphinx with 'current'.
  '      <a class="reference internal" href="users-guide/users-guide.html">',
  '        Users guide',
  '      </a>',
  '      <ul>',
  '        <li class="toctree-l2">',
  '          <a class="reference internal" href="users-guide/setup.html">',
  '            Setup',
  '          </a>',
  '        </li>',
  '      </ul>',
  '    </li>',
  '  </ul>',
  '</nav>'
];

describe('menu', () => {
  let fixtureEl;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    clearFixture();
  });

  it('returns -1 if there is no [data-toggle-item-template]', () => {
    fixtureEl.innerHTML = toc_with_one_expandable_menu.join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(-1);
  });

  it('returns 0 if there is no toc and no anchors', () => {
    fixtureEl.innerHTML = [
      toggle_item_template,
      toc_empty
    ].join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(0);
  });

  it('returns 0 if there is no toc anchors with nested lists', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_zero_expandable_menu
    ].join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(0);
  });

  it('removes ref from localStorage when non-existing in toc', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_zero_expandable_menu
    ].join('');
    const ref = "http://localhost:9876/non-existing-reference.html";
    localStorage.setItem("toc-expanded", ref);

    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(0);
    expect(localStorage.getItem("toc-expanded")).toEqual("");
  });

  it('returns 1 if there is one toc anchors with a nested list', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_one_expandable_menu
    ].join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);
  });

  it('expands the item when it is in the localStorage', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_one_expandable_menu
    ].join('');

    // Add a ref to localStorage so that its li gets the 'expand'
    // upon initialization.
    const ref = "http://localhost:9876/users-guide/users-guide.html";
    localStorage.setItem("toc-expanded", ref);
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);

    // Check that the li_item with the stored ref has
    // received the 'expand' class.
    const li_item = fixtureEl.querySelector(`li[data-snftt-ref='${ref}']`);
    expect(li_item).toHaveClass('expand');

    // Check that clicking on its button removes the 'expand'
    // class and removes its ref from the localStorage.
    const btn = li_item.querySelector("button");
    btn.click();
    expect(li_item).not.toHaveClass('expand');
    expect(localStorage.getItem("toc-expanded")).toEqual("");
  });

  it('should toggle "expand" class on click', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_one_expandable_menu
    ].join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);

    // After calling 'makeMenuExpandable', those anchors with nested
    // lists as a sibling element get a button that can be clicked
    // to expand the content. The list is not expanded on start up.
    //
    const btn = fixtureEl.querySelector("nav.toc ul li button");
    let icon = fixtureEl.querySelector("nav.toc ul li button i.bi");
    const btn_parent = btn.parentNode;

    expect(btn_parent).not.toHaveClass('expand');
    expect(icon).toHaveClass('bi-caret-right');

    // Once the button is clicked, its parent element (a LI) will
    // receive the 'expand' class, which will make the nested list
    // visible...
    btn.click();

    expect(btn_parent).toHaveClass('expand');
    expect(icon).toHaveClass('bi-caret-down');

    // ...and if the button is clicked again, the 'expand' class
    // is gone again.
    btn.click();
    expect(btn_parent).not.toHaveClass('expand');
    expect(icon).toHaveClass('bi-caret-right');
  });

  it('should replace "current" with "expand"', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_expanded_menu_ala_sphinx
    ].join('');
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);

    const btn = fixtureEl.querySelector("nav.toc ul li button");
    const btn_parent = btn.parentNode;
    // btn.click();
    expect(btn_parent).toHaveClass('expand');

    const icon = fixtureEl.querySelector("nav.toc ul li.expand button i.bi");
    expect(icon).toHaveClass('bi-caret-down');
  });

  it('types "setup" in the filter field and toc shows only "setup"', () => {
    // Typing "setup" in the filter input text field should
    // trigger the method "_keyupHandler", that will filter
    // the toc li elements and add a 'd-none' to all elements
    // that don't match the filter expression.
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_one_expandable_menu
    ].join('');
    const filter_elem = fixtureEl.querySelector("input[name='filter']");
    filter_elem.value = "set";
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);

    // Dispatch a keyup event, only to trigger
    // the  call to _keyupHandler.
    filter_elem.dispatchEvent(new KeyboardEvent('keyup', { key: ''}));
    expect(filter_elem.value).toEqual('set');

    // Check that only the item of the TOC that matches the
    // regexp in the filter field has not the 'd-none' class.
    // Also "User's guide" should be visible, because it's a
    // parent element of "Setup".
    const without_d_none = new Set(["Users guide", "Setup"]);
    const links = fixtureEl.querySelectorAll("a.reference");
    for (const link of links) {
      if (without_d_none.has(link.textContent.trim())) {
        expect(link.parentElement).not.toHaveClass("d-none");
      } else {
        expect(link.parentElement).toHaveClass("d-none");
      }
    }
  });

  it('filter field left empty, and none of toc elements has d-none', () => {
    fixtureEl.innerHTML = [
      ...toggle_item_template,
      ...toc_with_one_expandable_menu
    ].join('');
    // After emptying filter field, "Users guide"
    // should have 'expand' class.
    const ref = "http://localhost:9876/users-guide/users-guide.html";
    localStorage.setItem("toc-expanded", ref);

    const filter_elem = fixtureEl.querySelector("input[name='filter']");
    filter_elem.value = "";
    const menu_handler = new MenuHandler();
    expect(menu_handler.init()).toBe(1);

    filter_elem.dispatchEvent(new KeyboardEvent('keyup', { key: ''}));
    expect(filter_elem.value).toEqual('');

    const links = fixtureEl.querySelectorAll("a.reference");
    for (const link of links) {
      expect(link.parentElement).not.toHaveClass("d-none");
    }

    const li_item = fixtureEl.querySelector(`li[data-snftt-ref='${ref}']`);
    expect(li_item).toHaveClass('expand');
  });
});
