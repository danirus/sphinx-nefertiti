import { resizeAsides, updateScrollPaddingTop } from "../../src/tocresize.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';

const html_template_1 = [
  '<header style="height: 64px">',
  '  <nav><h1>This is the header</h1></nav>',
  '</header>',
];

const nftt_template = [
  '<div>',
  '  <div class="nftt-content">',
  '    <p>Nothing important here</p>',
  '  </div>',
  '</div>',
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
    fixtureEl.innerHTML = html_template_1.join('');

    const scroll_padding_top = updateScrollPaddingTop();
    expect(scroll_padding_top).toEqual(24 + 64);

    const html = document.querySelector('html');
    const html_style = html.getAttribute('style');
    expect(html_style).toEqual('scroll-padding-top: 88px');
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
    fixtureEl.innerHTML = nftt_template.join('');
    const body = document.querySelector("body");
    const nftt_content = document.querySelector(".nftt-content");

    // Make nftt_content height greater than the body's.
    nftt_content.setAttribute("style", `height: ${body.clientHeight + 10}px`);

    // Fake matchMedia('min-width: 992px) to return true'.
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: true };
      }
    );

    const resulting_height = resizeAsides();
    expect(resulting_height).toEqual("height: calc(100vh - 7rem)");
  });

  it('checks resizeAsides when nftt_content shorter than body', () => {
    fixtureEl.innerHTML = nftt_template.join('');
    const body = document.querySelector("body");
    const nftt_content = document.querySelector(".nftt-content");
    const expected_height = `height: ${nftt_content.clientHeight}px`;

    // Make body height greater than the body's.
    body.setAttribute("style", `height: ${nftt_content.clientHeight + 10}px`);

    // Fake matchMedia('min-width: 992px) to return true'.
    spyOn(window, 'matchMedia').and.callFake(
      (_) => {
        return { matches: true };
      }
    );

    const resulting_height = resizeAsides();
    expect(resulting_height).toEqual(expected_height);
  });
});