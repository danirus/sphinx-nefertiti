import { readFromGitHub } from "../../src/github.js";
import {
  mock_v1_fetch_github,
  mock_v2_fetch_github
} from "../helpers/mocks.js";

describe('github', () => {
  it('fetches the correct URL', () => {
    const expected_url = "https://api.github.com/repos/user/repo";
    spyOn(window, 'fetch').and.returnValue(new Promise(() => {}));
    readFromGitHub("user", "repo");
    expect(window.fetch).toHaveBeenCalledWith(expected_url);
  });

  it('gets a non http-200 response in the 1st fetch call', async () => {
    const url = "https://api.github.com/repos/user/repo";
    spyOn(window, 'fetch').withArgs(url).and.returnValue(
      Promise.resolve({status: 404})
    );
    let error_msg = "";
    try {
      await readFromGitHub("user", "repo");
    } catch (error) {
      error_msg = error.message;
    }
    expect(error_msg).toBe("Rate limit reached.");
  });

  it('gets a non http-200 response in the 2nd fetch catch', async () => {
    spyOn(window, 'fetch').and.callFake(mock_v1_fetch_github);

    let error_msg = "";
    try {
      await readFromGitHub("user", "repo");
    } catch (error) {
      error_msg = error.message;
    }
    expect(error_msg).toBe('Rate limit reached.');
    expect(localStorage.getItem('user:repo:stars')).toBe('24');
    expect(localStorage.getItem('user:repo:forks')).toBe('12');
  });

  it('works and returns {tag, stars, forks} object', async () => {
    spyOn(window, 'fetch').and.callFake(mock_v2_fetch_github);

    const result = await readFromGitHub("user", "repo");
    expect(result).toEqual({tag: '1.0', stars: 24, forks: 12});
    expect(localStorage.getItem('user:repo:stars')).toBe('24');
    expect(localStorage.getItem('user:repo:forks')).toBe('12');
    expect(localStorage.getItem('user:repo:tag')).toBe('1.0');
  });
});
