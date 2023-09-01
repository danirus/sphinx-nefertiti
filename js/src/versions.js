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
    element.classList.remove('current');
    element.setAttribute('aria-pressed', 'false');
  }

  if (version_item != undefined) {
    version_item.classList.add('current');
    version_item.setAttribute('aria-pressed', 'true');
    if (version_active != undefined) {
      version_active.textContent = version_item.dataset.snfttVersion;
    }
  }
}
