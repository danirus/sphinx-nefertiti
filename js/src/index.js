import { fixFigureStyle } from "./figures.js";
import { LuzHandler } from "./lightdark.js";
import { MenuHandler } from "./menu.js";
import { updateRepoMetrics } from "./repometrics.js";
import { TocObserver } from "./pagetoc.js";
import { resizeAsides, updateScrollPaddingTop } from "./tocresize.js";
import { feedVersionsMenu, updateVersion } from "./versions.js";


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

  // Feed the versions dropdown element.
  feedVersionsMenu();

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

  // Wrap tables with responsive container.
  const tables = document.querySelectorAll('table.docutils');
  for (const table of tables) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("nftt-table");
    table.before(wrapper);
    wrapper.append(table);
  }

  // Fix admonitions-like blocks used in Sphinx to display version
  // changes. Such directives are: versionadded, versionchanged,
  // deprecated, and versionremoved.
  const vchanges_selectors = [
    ["div.versionadded", "versionadded", "versionadded-title-only"],
    ["div.versionchanged", "versionchanged", "versionchanged-title-only"],
    ["div.deprecated", "deprecated", "deprecated-title-only"],
    ["div.versionremoved", "versionremoved", "versionremoved-title-only"],
  ];
  for (const lst of vchanges_selectors) {
    const [ selector, src_class, tgt_class ] = lst;
    const elems = document.querySelectorAll(selector);
    if (elems.length > 0) {
      console.log(`I found ${elems.length} elements of selector ${selector}`);
    } else {
      console.log(`I didn't find any ${selector} element.`)
    }

    for (const div of elems) {
      // The 'p' contained in the div might contain just a <span>, or
      // a <span> and a text node. The 2nd case is when the versionadded
      // directive receives additional text, right below the directive.
      // If the directive only gets the version number, without
      // additional text below, then I the selector should
      // change to .versionadded-title-only, so that it
      // does not display an empty block below.

      if (div.querySelector("p").childNodes.length == 1) {
        console.log(`Replacing ${selector} selector...`);
        div.classList.replace(src_class, tgt_class);
      }
    }
  }
});
