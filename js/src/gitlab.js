export async function readFromGitLab(base, project) {
  let stars = -1;
  let forks = -1;
  const url = `https://${base}/api/v4/projects/${encodeURIComponent(project)}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    throw new Error("Rate limit reached.");
  }
  const data = await response.json();
  stars = data.star_count;
  localStorage.setItem(`${base}:${project}:stars`, `${stars}`);
  forks = data.forks_count;
  localStorage.setItem(`${base}:${project}:forks`, `${forks}`);

  if (stars > -1 && forks > -1) {
    return {tag: "", stars, forks};
  }
}
