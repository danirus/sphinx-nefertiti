import { TocObserver } from "../../src/pagetoc.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';

/*
 * The following content is taken from the index_long.html in the dist
 * directory. Only that the paragraphs have been cut out to have less
 * content. This test file does not test that the IntersectionObserver
 * works, it tests only the code in the pagetoc.js module.
 */
const doc_content = [ // The .nftt-content element.
  '<article class="nftt-content" role="main">',
  '  <section id="tutorial">',
  '    <span id="id1"></span>',
  '    <h1>Tutorial<a class="headerlink" href="#tutorial" ',
  '      title="Permalink to this heading">¶</a></h1>',
  '    <p>Paragraph belonging to section with header Tutorial</p>',
  '    <section id="setup-a-new-project">',
  '      <h2>Setup a new project<a class="headerlink" ',
  '        href="#setup-a-new-project" title="Permalink to this heading"',
  '        >¶</a></h2>',
  '      <p>Paragraph belonging to section with header Setup a new project</p>',
  '      <section id="update-the-index-rst">',
  '        <h3>Update the index.rst<a class="headerlink" ',
  '          href="#update-the-index-rst" title="Permalink to this heading"',
  '          >¶</a></h3>',
  '<p>Paragraph belonging to section with header Update the index.rst</p>',
  '      </section>',
  '      <section id="create-tutorial-rst">',
  '        <h3>Create tutorial.rst<a class="headerlink" ',
  '          href="#create-tutorial-rst" title="Permalink to this heading"',
  '          >¶</a></h3>',
  '<p>Paragraph belonging to section with header Create tutorial.rst</p>',
  '      </section>',
  '      <section id="create-examples-rst">',
  '        <h3>Create examples.rst<a class="headerlink" ',
  '          href="#create-examples-rst" title="Permalink to this heading"',
  '          >¶</a></h3>',
  '<p>Paragraph belonging to section with header Create examples.rst</p>',
  '      </section>',
  '      <section id="build-the-site-and-serve-it">',
  '        <h3>Build the site and serve it<a class="headerlink" ',
  '          href="#build-the-site-and-serve-it" ',
  '          title="Permalink to this heading"',
  '          >¶</a></h3>',
  '<p>Paragraph belonging to section with header ',
  'Build the site and serve it</p>',
  '      </section>',
  '    </section>',
  '    <section id="installation">',
  '      <h2>Installation<a class="headerlink" href="#installation" ',
  '        title="Permalink to this heading">¶</a></h2>',
  '      <p>Paragraph belonging to section with header Installation</p>',
  '    </section>',
  '    <section id="customization">',
  '      <h2>Customization<a class="headerlink" href="#customization" ',
  '        title="Permalink to this heading">¶</a></h2>',
  '      <p>Paragraph belonging to section with header Customization</p>',
  '      <section id="fonts">',
  '        <h3>Fonts<a class="headerlink" href="#fonts" ',
  '          title="Permalink to this heading">¶</a></h3>',
  '          <p>Paragraph belonging to section with header Fonts</p>',
  '      </section>',
  '    </section>',
  '  </section>',
  '</article>',
];

/*
 * The following content is taken from the index_long.html file.
 */
const toc_content = [ // The #TableOfContents element.
  '<nav id="TableOfContents">',
  '  <ul>',
  '    <li><a class="reference internal" href="#">Tutorial</a>',
  '      <ul>',
  '        <li>',
  '          <a class="reference internal active" ',
  '            href="#setup-a-new-project">Setup a new project</a>',
  '          <ul>',
  '            <li><a class="reference internal" ',
  '              href="#update-the-index-rst">Update the index.rst</a>',
  '            </li>',
  '            <li><a class="reference internal" ',
  '              href="#create-tutorial-rst">Create tutorial.rst</a></li>',
  '            <li><a class="reference internal" ',
  '              href="#create-examples-rst">Create examples.rst</a></li>',
  '            <li><a class="reference internal" ',
  '              href="#build-the-site-and-serve-it"',
  '              >Build the site and serve it</a></li>',
  '          </ul>',
  '        </li>',
  '        <li><a class="reference internal" ',
  '          href="#installation">Installation</a></li>',
  '        <li><a class="reference internal" ',
  '          href="#customization">Customization</a>',
  '          <ul>',
  '            <li><a class="reference internal" href="#fonts">Fonts</a></li>',
  '          </ul>',
  '        </li>',
  '      </ul>',
  '    </li>',
  '  </ul>',
  '</nav>',
];

describe('pagetoc', () => {
  let fixtureEl;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  it('returns -1 when no .nftt-content element found', () => {
    fixtureEl.innerHTML = toc_content.join('');  // Only a toc, but no doc.
    const toc_observer = new TocObserver();
    const result = toc_observer.init();
    expect(result).toBe(-1);
  });

  it('returns -1 when no #TableOfContents element found', () => {
    fixtureEl.innerHTML = doc_content.join('');  // Only a doc, but no toc.
    const toc_observer = new TocObserver();
    const result = toc_observer.init();
    expect(result).toBe(-1);
  });

  it('returns 0 and fixes first reference in toc (sphinx issue)', () => {
    fixtureEl.innerHTML = [
      ...doc_content,
      ...toc_content
    ].join('');
    const toc = fixtureEl.querySelector("#TableOfContents");
    let toc_1a = toc.querySelector("a.reference");

    // Check that toc_1a is the first <a> in the toc, and that
    // its href is only "#". That is the case in Sphinx' toc.
    expect(toc_1a).toBeDefined(); // The 1st link in the toc is only '#'.
    expect(toc_1a.getAttribute("href")).toEqual("#");

    const toc_observer = new TocObserver();
    const result = toc_observer.init();
    expect(result).toBe(0);

    // Check that first link in toc with href="#" has been modified
    // to be #tutorial. That is done by the init method.
    toc_1a = toc.querySelector("a.reference");
    expect(toc_1a).toBeDefined();
    expect(toc_1a.getAttribute("href")).toEqual("#tutorial");
  });
});