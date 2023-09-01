import { fixFigureStyle } from "./figures.js";
import { LuzHandler } from "./lightdark.js";
import { MenuHandler } from "./menu.js";
import { updateRepoMetrics } from "./repometrics.js";
import { TocObserver } from "./pagetoc.js";
import { resizeAsides, updateScrollPaddingTop } from "./tocresize.js";
import { updateVersion } from "./versions.js";


function agentHas(keyword) {
  return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
}

function isFirefox() {
  return agentHas("Firefox") || agentHas("FxiOS") || agentHas("Focus");
}

function isSafari() {
  return (
    !!window.ApplePaySetupFeature
    || !!window.safari
  ) && agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");
}


window.addEventListener('DOMContentLoaded', (_) => {
  // docutils figures that receive specific dimension styling
  // (basically: width or height) apply the styling to the <img> element
  // instead of to the <figure>. That makes the <figcaption> to have
  // a width wider than the image. The fixFigureStyle function
  // moves the style when it contains a specific value for the
  // "width" dimension.
  fixFigureStyle();

  const menu_handler = new MenuHandler();
  if (menu_handler.init() == -1) {
    console.log("Could not find the <template data-toggle-item-template>.");
    console.log("Therefore left side nested menu entries will not be visible.")
  };

  // --------------------------------------------------
  // On every page load, adjust height of nftt-sidebar
  // and nftt-toc, based on height of nftt-content.
  //
  updateScrollPaddingTop();
  resizeAsides(); // Resize just after DOM content is loaded.
  // And register the function for every height change of the body.
  const resize_observer = new ResizeObserver(entries => resizeAsides());
  resize_observer.observe(document.body);
  window.addEventListener("resize", resizeAsides);

  // The LuzHandler controls the selection of the 3 possible
  // options (light, dark, default) and the switching between
  // them.
  const luz_handler = new LuzHandler();
  luz_handler.registerClickEvents();

  // The updateVersion function controls the display of the version
  // in the header, adding the CSS class "current" to display the
  // tick symbol near the version selected.
  updateVersion();

  // The function updateRepoMetrics updates the details related to the
  // repository in the header.
  if(updateRepoMetrics() == -1) {
    console.log("Could not find an element with [data-snftt-repo-url]");
  };

  // Create the table of contents out of the content
  // of the nftt-content.
  const toc_observer = new TocObserver();
  toc_observer.init();

  if (isSafari() || isFirefox()) {
    let css_content;
    const head = document.head;

    if (isSafari()) {
      css_content = (
        ".nftt-toc nav ul ul {" +
        "   padding-left: 0.8rem;" +
        "}"
      );
    } else if (isFirefox()) {
      css_content = (
        ".nftt-toc nav ul ul {" +
        "   padding-left: 0.55rem;" +
        "}"
      );
    }

    const style = document.createElement("style");
    style.append(document.createTextNode(css_content));
    head.append(style);
  }

  // Fix accessibility in each input element
  // with class 'task-list-item-checkbox'.
  const task_list_elems_qs = "input.task-list-item-checkbox";
  const task_list_elems = document.querySelectorAll(task_list_elems_qs);
  console.log(`Found ${task_list_elems.length} elements to update!`);
  for (const element of task_list_elems) {
    // Add a title to each input element.
    element.setAttribute('title', `Is task done? ${element.checked}`);
  }
});
