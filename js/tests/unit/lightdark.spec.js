import { LuzHandler } from "../../src/lightdark.js";
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

  it('checks preferredLuz to be default', () => {
    const color_scheme_handler = new LuzHandler();

    // Checks that 'getter' preferredLuz method returns
    // either 'light' or 'dark' (ultimately depends on OS prefs).
    const preferred = color_scheme_handler.preferredLuz;
    expect(preferred).toBeDefined;
    expect(preferred).toEqual('default');

    // Checks that applyScheme does work.
    expect(document.documentElement.classList.contains(preferred));
  });

  it('checks preferredLuz loads default and applies light', () => {
    // Force 'default' scheme.
    localStorage.setItem('snftt-luz', 'default');
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: false };  // prefers-color-scheme: light
      }
    );

    const color_scheme_handler = new LuzHandler();

    // And so, preferredLuz should return 'default'.
    const preferred = color_scheme_handler.preferredLuz;
    expect(preferred).toBeDefined;
    expect(preferred).toBe('default');

    // Check that applyScheme applied 'light'.
    expect(document.documentElement.classList.contains('light'));
  });

  it('checks preferredLuz loads default and applies dark', () => {
    // Force 'default' scheme.
    localStorage.setItem('snftt-luz', 'default');
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: true };  // prefers-color-scheme: dark
      }
    );

    const color_scheme_handler = new LuzHandler();

    // And so, preferredLuz should return 'default'.
    const preferred = color_scheme_handler.preferredLuz;
    expect(preferred).toBeDefined;
    expect(preferred).toBe('default');

    // Check that applyScheme applied 'dark'.
    expect(document.documentElement.classList.contains('dark'));
  });

  it('checks that updateDropdown does update elements', () => {
    const scheme = "dark";
    fixtureEl.innerHTML = dropdown.join('');
    localStorage.setItem('snftt-luz', scheme);

    const color_scheme_handler = new LuzHandler();
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
    localStorage.setItem('snftt-luz', scheme);

    const color_scheme_handler = new LuzHandler();
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