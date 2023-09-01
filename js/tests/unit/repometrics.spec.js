import { updateRepoMetrics } from "../../src/repometrics.js";
import { getFixture, clearFixture } from '../helpers/fixture.js';
import { github_url_1, mock_v2_fetch_github } from "../helpers/mocks.js";

const repo_github_widget_template = [
  '<div class="repo" data-snftt-repo-url=',
  '  "https://github.com/user/repo">user/repo',
  '  <div data-snftt-repo-metrics>',
  '    <span data-snftt-repo-tag></span>',
  '    <span data-snftt-repo-stars></span>',
  '    <span data-snftt-repo-forks></span>',
  '  </div>',
  '</div>',
];

const repo_gitlab_widget_template = [
  '<div class="repo" data-snftt-repo-url=',
  '  "https://gitlab.com/inkscape/inkscape">user/repo',
  '  <div data-snftt-repo-metrics>',
  '    <span data-snftt-repo-tag></span>',
  '    <span data-snftt-repo-stars></span>',
  '    <span data-snftt-repo-forks></span>',
  '  </div>',
  '</div>',
];

describe('repometrics', () => {
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

  it('checks that there is no [data-snftt-repo-url]', async () => {
    const result = await updateRepoMetrics();
    expect(result).toBe(-1);
  });

  it('gets data from a GitHub URL, with a mocked fetch', async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // mock_v2_fetch_github will make calling to readFromGitHub
    // to return an object with {tag: "1.0", stars: 24, forks: 12}.
    spyOn(window, 'fetch').and.callFake(mock_v2_fetch_github);
    const result = await updateRepoMetrics();
    expect(result).toBe(3);

    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("1.0");
    expect(stars.textContent).toEqual("24");
    expect(forks.textContent).toEqual("12");
  });

  it('gets data from a GitLab URL, with a mocked fetch', async () => {
    fixtureEl.innerHTML = repo_gitlab_widget_template.join('');
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      status: 200,
      json: () => {
        return {
          star_count: 24,
          forks_count: 12
        }
      }
    }));

    const result = await updateRepoMetrics();
    expect(result).toBe(2);

    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("");
    expect(tag.parentNode).toHaveClass("d-none");
    expect(stars.textContent).toEqual("24");
    expect(forks.textContent).toEqual("12");
  });

  it('gets data from localStorage after GitHub fetch failed', async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // Calling fetch will fail, and will cause _getRepoMetrics to
    // process the 'catch' branch of the try..catch.
    spyOn(window, 'fetch').withArgs(github_url_1).and.returnValue(
      Promise.resolve({status: 404})
    );

    // The catch branch of _getRepoMetrics will read
    // the metrics from the localStorage.
    localStorage.setItem('user:repo:stars', '2400');
    localStorage.setItem('user:repo:forks', '1200');

    const result = await updateRepoMetrics();
    expect(result).toBe(2);

    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("");
    expect(tag.parentNode).toHaveClass("d-none");
    expect(stars.textContent).toEqual("2400");
    expect(forks.textContent).toEqual("1200");
  });

  it("gets non-valid stars from localStorage", async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // Calling fetch will fail, and will cause _getRepoMetrics to
    // process the 'catch' branch of the try..catch.
    spyOn(window, 'fetch').withArgs(github_url_1).and.returnValue(
      Promise.resolve({status: 404})
    );

    // Bad number of stars.
    localStorage.setItem('user:repo:tag', '1.0');
    localStorage.setItem('user:repo:stars', 'not a number');
    localStorage.setItem('user:repo:forks', '1200');

    const result = await updateRepoMetrics();
    expect(result).toBe(0);

    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("");
    expect(tag.parentNode).toHaveClass("d-none");
    expect(stars.textContent).toEqual("");
    expect(stars.parentNode).toHaveClass("d-none");
    expect(forks.textContent).toEqual("");
    expect(forks.parentNode).toHaveClass("d-none");
  });

  it("gets non-valid forks from localStorage", async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // Calling fetch will fail, and will cause _getRepoMetrics to
    // process the 'catch' branch of the try..catch.
    spyOn(window, 'fetch').withArgs(github_url_1).and.returnValue(
      Promise.resolve({status: 404})
    );

    // Bad number of stars.
    localStorage.setItem('user:repo:tag', '1.0');
    localStorage.setItem('user:repo:stars', '2400');
    localStorage.setItem('user:repo:forks', 'not a number');

    const result = await updateRepoMetrics();
    expect(result).toBe(0);

    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("");
    expect(tag.parentNode).toHaveClass("d-none");
    expect(stars.textContent).toEqual("");
    expect(stars.parentNode).toHaveClass("d-none");
    expect(forks.textContent).toEqual("");
    expect(forks.parentNode).toHaveClass("d-none");
  });

  it("checks last_access < 60 s. then read from localStorage", async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // mock_v2_fetch_github will make calling to readFromGitHub
    // to return an object with {tag: "1.0", stars: 24, forks: 12}.
    // But this test will use the values stored in localStorage.
    spyOn(window, 'fetch').and.callFake(mock_v2_fetch_github);

    localStorage.setItem('user:repo:lastaccess', `${Date.now()}`);
    localStorage.setItem('user:repo:tag', '2.0');
    localStorage.setItem('user:repo:stars', '2400');
    localStorage.setItem('user:repo:forks', '1200');

    const result = await updateRepoMetrics();

    expect(result).toEqual(3);

    // As last_access is < 60 secs, it has been retrieved
    // from localStorage. Mocked fetch from GitHub has not been called.
    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("2.0");
    expect(stars.textContent).toEqual("2400");
    expect(forks.textContent).toEqual("1200");
  });

  it("checks last_access > 60 s. then read from fetch", async () => {
    fixtureEl.innerHTML = repo_github_widget_template.join('');
    // mock_v2_fetch_github will make calling to readFromGitHub
    // to return an object with {tag: "1.0", stars: 24, forks: 12}.
    // But this test will use the values stored in localStorage.
    spyOn(window, 'fetch').and.callFake(mock_v2_fetch_github);

    const now = Date.now();
    const ts = new Date();
    ts.setTime(now + 60_000);
    localStorage.setItem('user:repo:lastaccess', `${ts}`);
    localStorage.setItem('user:repo:tag', '2.0');
    localStorage.setItem('user:repo:stars', '2400');
    localStorage.setItem('user:repo:forks', '1200');

    const result = await updateRepoMetrics();

    expect(result).toEqual(3);

    // As last_access is < 60 secs, it has been retrieved
    // from localStorage. Mocked fetch from GitHub has not been called.
    const tag = fixtureEl.querySelector("[data-snftt-repo-tag]");
    const stars = fixtureEl.querySelector("[data-snftt-repo-stars]");
    const forks = fixtureEl.querySelector("[data-snftt-repo-forks]");
    expect(tag.textContent).toEqual("1.0");
    expect(stars.textContent).toEqual("24");
    expect(forks.textContent).toEqual("12");
  });
});