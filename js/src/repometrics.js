import { readFromGitHub } from "./github.js";
import { readFromGitLab } from "./gitlab.js";


const ls = localStorage;  // Aliasing localStorage.

const qs_repo_url = "[data-snftt-repo-url]";
const qs_repo_facts = "[data-snftt-repo-metrics]";
const qs_repo_tag = "[data-snftt-repo-tag]";
const qs_repo_stars = "[data-snftt-repo-stars]";
const qs_repo_forks = "[data-snftt-repo-forks]";


function _updateFactsComponent(metrics) {
  let num_updated_facts = 0;
  const facts_element = document.querySelector(qs_repo_facts);
  const tag_element = document.querySelector(qs_repo_tag);
  const stars_element = document.querySelector(qs_repo_stars);
  const forks_element = document.querySelector(qs_repo_forks);

  if (metrics.tag != undefined && metrics.tag.length > 0) {
    tag_element.textContent = metrics.tag;
    num_updated_facts++;
  } else {
    tag_element.parentElement.classList.remove("d-flex");
    tag_element.parentElement.classList.add("d-none");
  }

  if (metrics.stars > -1) {
    stars_element.textContent = `${metrics.stars}`;
    num_updated_facts++;
  } else {
    stars_element.parentElement.classList.remove("d-flex");
    stars_element.parentElement.classList.add("d-none");
  }

  if (metrics.forks > -1) {
    forks_element.textContent = `${metrics.forks}`;
    num_updated_facts++;
  } else {
    forks_element.parentElement.classList.remove("d-flex");
    forks_element.parentElement.classList.add("d-none");
  }

  facts_element.classList.add("ready");
  return num_updated_facts;
}


function _readFromLocalStorage(p1, p2) {
  const tag = ls.getItem(`${p1}:${p2}:tag`);
  const stars = Number.parseInt(ls.getItem(`${p1}:${p2}:stars`));
  const forks = Number.parseInt(ls.getItem(`${p1}:${p2}:forks`));
  if (!stars || !forks) {
    return {tag: "", stars: -1, forks: -1};
  }
  return {tag, stars, forks};
}


export async function _getRepoMetrics(host, p1, p2) {
  let metrics;
  const last_access = ls.getItem(`${p1}:${p2}:lastaccess`);

  if (last_access) {
    const now = Date.now();
    const ts = new Date();
    ts.setTime(Number.parseInt(last_access) + 60_000);
    if (ts.getTime() > now) {
      // Now is still under last_access + 60 secs.
      // Go get metrics from localStorage...
      metrics = _readFromLocalStorage(p1, p2);
    }
  }

  if (!metrics) {
    try {
      switch (host) {
        case "github": {
          metrics = await readFromGitHub(p1, p2);
          break;
        }
        case "gitlab": {
          metrics = await readFromGitLab(p1, p2);
          break;
        }
      }
      localStorage.setItem(`${p1}:${p2}:lastaccess`, `${Date.now()}`);
    } catch {
      metrics = _readFromLocalStorage(p1, p2);
    }
  }

  return metrics;
}


export async function updateRepoMetrics() {
  const repo_url_element = document.querySelector(qs_repo_url);
  const url = repo_url_element ? repo_url_element.dataset.snfttRepoUrl : "";

  /* Try to match GitHub repository */
  let github_match = url.match(/^.+github\.com\/([^/]+)\/?([^/]+)?/i);
  if (github_match) {
    const [, user, repo] = github_match;
    const metrics = await _getRepoMetrics("github", user, repo);
    if (metrics) {
      return _updateFactsComponent(metrics);
    }
  }

  /* Try to match GitLab repository */
  let gitlab_match = url.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i)
  if (gitlab_match) {
    const [, base, slug] = gitlab_match;
    const metrics = await _getRepoMetrics("gitlab", base, slug);
    if (metrics) {
      return _updateFactsComponent(metrics);
    }
  }

  return -1;
}