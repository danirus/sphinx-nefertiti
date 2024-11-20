const qs_version_url = "[data-snftt-version-url]";

function _getCurrentVersion() {
  const all_version_elems = document.querySelectorAll(qs_version_url);
  for (const version_elem of all_version_elems) {
    let version_url = version_elem.dataset?.snfttVersionUrl;
    version_url = version_url.replace("?", "\\?");
    if (new RegExp(version_url).test(window.location.href)) {
      return version_elem.dataset?.snfttVersion;
    };
  }
  return "";
}

export function updateVersion() {
  const version = _getCurrentVersion();
  const qs_version_active = "[data-snftt-version-active]";
  const version_active = document.querySelector(qs_version_active);
  const qs_version_item = `[data-snftt-version="${version}"]`;
  const version_item = document.querySelector(qs_version_item);

  for (const element of document.querySelectorAll('[data-snftt-version]')) {
    element.classList.remove('active', 'current');
    element.setAttribute('aria-pressed', 'false');
  }

  if (version_item != undefined) {
    version_item.classList.add('active', 'current');
    version_item.setAttribute('aria-pressed', 'true');
    if (version_active != undefined) {
      version_active.textContent = version_item.dataset.snfttVersion;
    }
  }
}

export function feedVersionsMenu() {
  const vermenu = document.getElementById("versions-dropdown-menu");
  if (!vermenu) {
    console.log("Did not find the versions dropdown menu.");
    return false;
  }
  // Use the variable 'doc_versions', loaded as a script in layout.html.
  // The file doc_versions.js is produced by versions.py when building
  // the site (make html).
  for (const item of doc_versions) {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.classList.add(
      "dropdown-item", "d-flex", "align-items-center",
      "justify-content-between"
    );
    anchor.setAttribute("aria-pressed", "false");
    anchor.setAttribute("href", item.url);
    anchor.dataset.snfttVersionUrl = item.url;
    anchor.dataset.snfttVersion = item.name;
    const span = document.createElement("span");
    span.classList.add("small", "ms-2");
    span.textContent = item.name;
    const i = document.createElement("i");
    i.classList.add("bi", "bi-check", "ms-auto");
    anchor.append(span);
    anchor.append(i);
    li.append(anchor);
    vermenu.append(li);
  }

  return true;
}
