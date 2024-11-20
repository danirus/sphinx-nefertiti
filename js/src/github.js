import { formatNumber } from "./utils.js";

export async function readFromGitHub(user, repo) {
  let tag = "";
  let stars = "";
  let forks = "";
  const url = `https://api.github.com/repos/${user}/${repo}`;

  const response1 = await fetch(url);
  if (response1.status !== 200) {
    throw new Error("Rate limit reached.");
  }
  const data1 = await response1.json();

  stars = formatNumber(data1.stargazers_count);
  localStorage.setItem(`${user}:${repo}:stars`, stars);
  forks = formatNumber(data1.forks_count);
  localStorage.setItem(`${user}:${repo}:forks`, forks);

  const response2 = await fetch(`${url}/releases/latest`);
  if (response2.status !== 200) {
    throw new Error("Rate limit reached.");
  }
  const data2 = await response2.json();
  tag = data2.tag_name;
  localStorage.setItem(`${user}:${repo}:tag`, tag);

  if (tag !== "" && stars != "" && forks != "") {
    return {tag, stars, forks};
  }
}
