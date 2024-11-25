import { CSchemeHandler } from "../../src/cschemes.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';

const dropdown = [
  '<li class="nav-item dropdown">',
  '  <a class="dropdown-toggle" id="snftt-luz" role="button"',
  '     data-bs-toggle="dropdown">',
  '    <i class="bi bi-circle-half" data-snftt-luz-icon-active></i>',
  '    <span>Toggle mode</span>',
  '  </a>',
  '  <ul class="dropdown-menu dropdown-menu-end">',
  '    <li>',
  '      <a class="dropdown-item" data-snftt-luz="light" href="#">',
  '        <span>',
  '          <i class="bi bi-sun" data-snftt-luz-icon="light"></i>',
  '        </span>',
  '        <span>Light</span><i class="bi bi-check"></i>',
  '      </a>',
  '    </li>',

  '    <li>',
  '      <a class="dropdown-item" data-snftt-luz="dark" href="#">',
  '        <span>',
  '          <i class="bi bi-moon-stars" data-snftt-luz-icon="dark"></i>',
  '        </span>',
  '        <span>Dark</span><i class="bi bi-check"></i>',
  '      </a>',
  '    </li>',

  '    <li>',
  '      <a class="dropdown-item" data-snftt-luz="default" href="#">',
  '        <span>',
  '          <i class="bi bi-circle-half" data-snftt-luz-icon="default">',
  '          </i>',
  '        </span>',
  '        <span>Default</span><i class="bi bi-check"></i>',
  '      </a>',
  '    </li>',
  '  </ul>',
  '</li>'
];

describe('lightdark', () => {
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

  it('checks stored (getter) to be default', () => {
    const color_scheme_handler = new CSchemeHandler({auto: false});

    // Checks that 'getter' preferred method returns
    // either 'light' or 'dark' (ultimately depends on OS prefs).
    const stored = color_scheme_handler.stored;
    expect(stored).toBeDefined;
    expect(stored).toEqual('default');

    // Checks that applyScheme does work.
    expect(document.documentElement.classList.contains(stored));
  });

  it('checks stored (getter) loads "default" and applies "light"', () => {
    // Force 'default' scheme.
    localStorage.setItem('snftt-color-scheme', 'default');
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return {
          matches: false,    // prefers-color-scheme: light
          addEventListener: (evt_name, evt_obj) => {},
        };
      }
    );

    const color_scheme_handler = new CSchemeHandler({auto: false});

    // And so, 'stored' (getter) should return 'default'.
    const stored = color_scheme_handler.stored;
    expect(stored).toBeDefined;
    expect(stored).toBe('default');

    // Check that applyScheme applied 'light'.
    expect(document.documentElement.classList.contains('light'));
  });

  it('checks stored (getter) loads default and applies dark', () => {
    // Force 'default' scheme.
    localStorage.setItem('snftt-color-scheme', 'default');
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return {
          matches: true,  // prefers-color-scheme: dark
          addEventListener: (evt_name, evt_obj) => {},
        };
      }
    );

    const color_scheme_handler = new CSchemeHandler({auto: false});

    // And so, stored should return 'default'.
    const stored = color_scheme_handler.stored;
    expect(stored).toBeDefined;
    expect(stored).toBe('default');

    // Check that applyScheme applied 'dark'.
    expect(document.documentElement.classList.contains('dark'));
  });

  it('checks that updateDropdown does update elements', () => {
    const scheme = "dark";
    fixtureEl.innerHTML = dropdown.join('');
    localStorage.setItem('snftt-color-scheme', scheme);

    const color_scheme_handler = new CSchemeHandler({auto: false});
    color_scheme_handler.updateDropdown(scheme, focus=true);

    const prefix = "data-snftt-luz";
    const sel_icon = document.querySelector(`[${prefix}-icon-active]`);
    const sch_item = document.querySelector(`[${prefix}="${scheme}"]`);
    const sch_icon = document.querySelector(`[${prefix}-icon="${scheme}"]`);

    expect(sel_icon.classList).toEqual(sch_icon.classList);
    expect(sch_item).toHaveClass("current");
  });

  it('checks that clicking on another color-scheme changes it', () => {
    // Setup up the fixtureEl and store 'light' in the
    // localStorage as the preferred color-scheme.
    const scheme = "light";
    fixtureEl.innerHTML = dropdown.join('');
    localStorage.setItem('snftt-color-scheme', scheme);
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return {
          matches: true,
          addEventListener: (evt_name, evt_obj) => {},
        };
      }
    );

    const color_scheme_handler = new CSchemeHandler({auto: false});
    color_scheme_handler.registerClickEvents();

    const prefix = "data-snftt-luz";
    const sch_item = document.querySelector(`[${prefix}="${scheme}"]`);

    let sel_icon = document.querySelector(`[${prefix}-icon-active]`);
    let sch_icon = document.querySelector(`[${prefix}-icon="${scheme}"]`);

    // Check that the current selected color-scheme is "light".
    expect(sel_icon.classList).toEqual(sch_icon.classList);
    expect(sch_item).toHaveClass("current");

    // Click on the "dark" entry.
    const dark_entry = document.querySelector(`[${prefix}="dark"]`);
    dark_entry.click();

    // Check that now the selected color-scheme is "dark".
    sel_icon = document.querySelector(`[${prefix}-icon-active]`);
    sch_icon = document.querySelector(`[${prefix}-icon="dark"]`);
    expect(sel_icon.classList).toEqual(sch_icon.classList);
    expect(dark_entry).toHaveClass("current");
  });
});
