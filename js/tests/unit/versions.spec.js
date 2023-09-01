import { updateVersion } from "../../src/versions.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';

// This template is missing an element with the attribute
// data-snftt-version-active, what will cause that the title
// does not get updated with the 'latest' string.
const template_1 = [
  '<li>',
  '  <a>',
  // Next <span> represents the content displayed in the visible
  // dropdown in the navbar. If it does not have an attribute
  // data-snftt-version-active its content does not get updated.
  '    <span class="version-title">Title not updated</span>',
  '  </a>',
  '  <ul>',
  '    <li><h6>Versions</h6></li>',
  '    <li>',
  '      <a href="/context.html" ',
  '       data-snftt-version-url="http://localhost:9876/context.html"',
  '       data-snftt-version="latest">Title not updated</a>',
  '    </li>',
  '    <li>',
  '      <a href="/context.html?v=1.0.0" ',
  '       data-snftt-version-url="http://localhost:9876/context.html?v=1.0.0"',
  '       data-snftt-version="v1.0.0">v1.0.0</a>',
  '    </li>',
  '  </ul>',
  '</li>',
];

// This template misses the data-snftt-version-url.
const template_2 = [
  '<li>',
  '  <a>',
  '    <span class="version-title" ',
  '      data-snftt-version-active>Title not updated</span>',
  '  </a>',
  '  <ul>',
  '    <li><h6>Versions</h6></li>',
  '    <li>',
  '      <a href="/context.html" ',
  '       data-snftt-version="latest">Title not updated</a>',
  '    </li>',
  '    <li>',
  '      <a href="/context.html?v=1.0.0" ',
  '       data-snftt-version="v1.0.0">v1.0.0</a>',
  '    </li>',
  '  </ul>',
  '</li>',
];

// This template contains all the expected data attributes:
// * One element with attribute data-snftt-version-active
// * Multiple elements with:
//    * data-snftt-version-url
//    * data-snftt-version
const template_3 = [
  '<li>',
  '  <a>',
  // Next <span> represents the content displayed in the visible
  // dropdown in the navbar. If it does not have an attribute
  // data-snftt-version-active its content does not get updated.
  '    <span class="version-title" ',
  '      data-snftt-version-active>Title not updated</span>',
  '  </a>',
  '  <ul>',
  '    <li><h6>Versions</h6></li>',
  '    <li>',
  '      <a href="/context.html" ',
  '       data-snftt-version-url="http://localhost:9876/context.html"',
  '       data-snftt-version="latest">Title not updated</a>',
  '    </li>',
  '    <li>',
  '      <a href="/context.html?v=1.0.0" ',
  '       data-snftt-version-url="http://localhost:9876/context.html?v=1.0.0"',
  '       data-snftt-version="v1.0.0">v1.0.0</a>',
  '    </li>',
  '  </ul>',
  '</li>',
];

describe('versions', () => {
  let fixtureEl;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  it('checks 1st condition because the title does not get updated', () => {
    fixtureEl.innerHTML = template_1.join('');
    const version_title = document.querySelector(".version-title");

    // Check the title before calling updateVersion.
    expect(version_title.textContent).toEqual("Title not updated");

    // Call updateVersion and check that the title didn't change.
    updateVersion();
    expect(version_title.textContent).toEqual("Title not updated");
  });

  it('checks 2nd condition because the title does not get updated ', () => {
    fixtureEl.innerHTML = template_2.join('');
    const version_title = document.querySelector(".version-title");

    // Check the title before calling updateVersion.
    expect(version_title.textContent).toEqual("Title not updated");

    // Call updateVersion and check that the title didn't change.
    updateVersion();
    expect(version_title.textContent).toEqual("Title not updated");
  });

  it('checks that title gets updated', () => {
    fixtureEl.innerHTML = template_3.join('');
    const version_title = document.querySelector(".version-title");

    // Check the title before calling updateVersion.
    expect(version_title.textContent).toEqual("Title not updated");

    // Call updateVersion and check that the title didn't change.
    updateVersion();
    expect(version_title.textContent).toEqual("latest");
  });
});