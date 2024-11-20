import { formatNumber } from "./utils.js";

export async function readFromGitLab(base, project) {
  let stars = "";
  let forks = "";
  const url = `https://${base}/api/v4/projects/${encodeURIComponent(project)}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Rate limit reached.");
  }
  const data = await response.json();
  stars = formatNumber(data.star_count);
  localStorage.setItem(`${base}:${project}:stars`, stars);
  forks = formatNumber(data.forks_count);
  localStorage.setItem(`${base}:${project}:forks`, forks);

  if (stars != "" && forks != "") {
    return {tag: "", stars, forks};
  }
}
