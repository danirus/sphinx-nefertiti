export const github_url_1 = "https://api.github.com/repos/user/repo";
export const github_url_2 = "https://api.github.com/repos/user/repo/releases/latest";

/*
 * This function mocks the fetch function when used by github.js module,
 * function readFromGitHub. Fetch is called twice.
 *  1st call: returns 200 and data.
 *  2nd call: returns 404.
 */
export function mock_v1_fetch_github(url) {
  if (url == github_url_1) {  // 1st fetch call is made with github_url_1.
    return Promise.resolve({
      status: 200,
      json: function() {
        return {
          stargazers_count: 24,
          forks_count: 12
        };
      }
    });
  }
  else if (url == github_url_2) {  // 2nd call is made with github_url_2.
    return Promise.resolve({status: 404});
  }
}

export function mock_v2_fetch_github(url) {
  if (url == github_url_1) {  // 1st call is made with url_1.
    return Promise.resolve({
      status: 200,
      json: function() {
        return {
          stargazers_count: 24,
          forks_count: 12
        };
      }
    });
  }
  else if (url == github_url_2) {  // 2nd call is made with url_2.
    return Promise.resolve({
      status: 200,
      json: function() {
        return {
          tag_name: '1.0'
        }
      }
    });
  }
}