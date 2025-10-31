import { resizeAsides, updateScrollPaddingTop } from "../../src/tocresize.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';

const header_height = 30;
const html_header = [
  `<header style="height: ${header_height}px">`,
  '  <nav><h1>This is the header</h1></nav>',
  '</header>',
];

const nftt_template = [
  '<div>',
  '  <div class="nftt-content">',
  '    <div style="height: 250px">',
  '      <p>Nothing important here</p>',
  '    </div>',
  '  </div>',
  '</div>',
];

const html_footer = [
  '<footer style="height: 30px">',
  '  <p>This is the footer</p>',
  '</footer>',
];

describe('resize', () => {
  let fixtureEl;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  afterEach(() => {
    clearFixture();
  });

  it('checks that karma page does not have a header', () => {
    const scroll_padding_top = updateScrollPaddingTop();
    expect(scroll_padding_top).toEqual(-1);
  });

  it('checks updateScrollPaddingTop', () => {
    fixtureEl.innerHTML = html_header.join('');

    const scroll_padding_top = updateScrollPaddingTop();
    // 24 is aprox. amount of pixels in margin-top of nftt-page.
    expect(scroll_padding_top).toEqual(24 + header_height);

    const html = document.querySelector('html');
    const html_style = html.getAttribute('style');
    expect(html_style).toEqual('scroll-padding-top: 54px');
  });

  it('checks resizeAsides skips changes', () => {
    // resizeAsides applies changes only when min-width >= 992px.
    // I mock matchMedia to make resizeAsides get false when
    // checking that condition, so that it does no change.
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: false };
      }
    );
    const result = resizeAsides();
    expect(result).toEqual("");
  });

  it('checks resizeAsides when nftt_content higher than body', () => {
    fixtureEl.innerHTML = (
      html_header.join('') + nftt_template.join('') + html_footer.join('')
    );
    const body = document.querySelector("body");
    const nftt_content = document.querySelector(".nftt-content > div");

    // Make nftt_content height greater than the body's.
    nftt_content.setAttribute("style", `height: ${body.clientHeight + 10}px`);

    // Fake matchMedia('min-width: 992px) to return true'.
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: true };
      }
    );

    const result = resizeAsides();
    expect(result).toEqual("height: calc(100vh - 70px); top: 70px;");
  });

  it('checks resizeAsides when nftt_content shorter than body', () => {
    fixtureEl.innerHTML = (
      html_header.join('') + nftt_template.join('') + html_footer.join('')
    );
    const body = document.querySelector("body");
    const nftt_content = document.querySelector(".nftt-content > div");
    const expected_height = "height: 250px; top: 70px;";

    // Make body height greater than the body's.
    body.setAttribute("style", `height: ${nftt_content.clientHeight + 10}px`);

    // Fake matchMedia('min-width: 992px) to return true'.
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: true };
      }
    );

    const result = resizeAsides();
    expect(result).toEqual(expected_height);
  });
});
