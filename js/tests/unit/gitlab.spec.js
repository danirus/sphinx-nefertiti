import { readFromGitLab } from "../../src/gitlab.js";

const base = "gitlab.com";
const project = "inkscape";

describe('gitlab', () => {
  it('fetches the correct URL', () => {
    const url = "https://gitlab.com/inkscape/inkscape";
    const match = url.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i);
    const [, base,] = match;
    expect(base).toEqual("gitlab.com");
  });

  it('fetches the correct URL', () => {
    const encoded = encodeURIComponent(project);
    const expected_url = `https://${base}/api/v4/projects/${encoded}`;
    spyOn(window, 'fetch').and.returnValue(new Promise(() => {}));
    readFromGitLab(base, project);
    expect(window.fetch).toHaveBeenCalledWith(expected_url);
  });

  it('gets a non http-200 response in the fetch call', async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({status: 404}));
    let error_msg = "";
    try {
      await readFromGitLab(base, project);
    } catch (error) {
      error_msg = error.message;
    }
    expect(error_msg).toBe("Rate limit reached.");
  });

  it('works and returns {tag: "", stars, forks} object', async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      status: 200,
      json: () => {
        return {
          star_count: 24,
          forks_count: 12
        }
      }
    }));

    const result = await readFromGitLab(base, project);
    expect(result).toEqual({tag: '', stars: 24, forks: 12});
    expect(localStorage.getItem(`${base}:${project}:stars`)).toBe('24');
    expect(localStorage.getItem(`${base}:${project}:forks`)).toBe('12');
  });
});
