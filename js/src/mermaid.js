export class MermaidHandler {
  constructor() {
    this._observer_map = new Map();  // To keep MutationObservers.
    this._anchor_map = new Map();  // target: bool (true when anchor added).
    this._config = { attributes: true, childList: true, subtree: true };
    this._modal = document.getElementById("nftt-modal");
  }

  /* Create a MutationObserver for every mermaid element. The observer
   * goal is to call the method wrapMermaid as soon as the the svg
   * firstChild of the mermaid element appears (it takes a bit), and
   * it has an id. Once the firstChild (which a SVG) is loaded in the
   * DOM, we can add the anchor to expand the mermaid graph into a
   * modal window.
   */
  start = () => {
    const elements = document.querySelectorAll(".mermaid");
    for (const target of elements) {
      const observer = new MutationObserver(this.wrapMermaid);
      observer.observe(target, this._config);
      this._observer_map.set(observer, target);
      this._anchor_map.set(target, false);
    }
  }

  wrapMermaid = (mutation_list, observer) => {
    const target = this._observer_map.get(observer);
    for (const mutation of mutation_list) {
      if (target.firstChild && target.firstChild.nodeName !== "svg") {
        // Iterate so long as the target does not have the <svg>.
        continue;
      }
      if (
        mutation.type === "childList"
        && target.firstChild
        && target.firstChild.id
        && this._anchor_map.get(target) == false
      ) {
        this._anchor_map.set(target, true);
        observer.disconnect();
        this._observer_map.delete(observer);
        this.addExpandAnchor(target);
      }
    }
  }

  addExpandAnchor = (target) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("nftt-table");
    target.before(wrapper);
    wrapper.append(target);

    const anchor_expand = document.createElement("a");
    anchor_expand.innerHTML = "&#xF14A;";
    anchor_expand.classList.add("expand");
    anchor_expand.href = "#";

    // Obtain the `id` of the svg, which is the first child:
    // <pre class="mermaid"><svg id="the-id">...</svg></pre>
    anchor_expand.dataset.snfttMermaidId = target.firstChild.id;
    target.before(anchor_expand);
    anchor_expand.addEventListener('click', this.openModal);
    this._modal.addEventListener('hide.bs.modal', this.emptyModal);
  }

  openModal = (event) => {
    // Copy the table referred to in the data-snftt-table-id attribute
    // of the anchor clicked to the body of the modal.
    event.preventDefault();
    const target = event.target;
    const nftt_modal = new bootstrap.Modal('#nftt-modal');
    const mm = document.getElementById(target.dataset.snfttMermaidId);

    // The parent can be either a figure or a div.
    let mm_parent = mm.closest("figure");
    if (!mm_parent) {
      mm_parent = mm.closest("div");
    }

    const mm_pre = mm_parent.querySelector("pre");
    const mm_svg = mm_pre.querySelector("svg");
    const new_mm_svg = mm_svg.cloneNode(true);
    new_mm_svg.removeAttribute("style");

    // Change the ID of the original element. It will
    // be reestablish when the modal is closes.
    mm_svg.id = mm_svg.id + "-tmp";

    const new_mm_div = document.createElement("div");
    new_mm_div.classList.add("mermaid");
    new_mm_div.append(new_mm_svg);

    const caption_span = mm_parent.querySelector(
      "figcaption span.caption-text"
    );
    const title = document.getElementById("nftt-modal-title");
    if (caption_span) {
      title.textContent = caption_span.textContent;
    } else {
      title.textContent = target.dataset.snfttMermaidId;
      console.warn("Use mermaid's attribute :caption: to provide a title");
    }

    const body = document.getElementById("nftt-modal-body");
    body.append(new_mm_div);
    nftt_modal.show();
    nftt_modal.handleUpdate();

    if (mm_pre.dataset.zoomId) {  // Activate zoom.
      const svg_d3 = d3.select(new_mm_svg);
      const inner = svg_d3.select("g");
      const zoomf = d3.zoom().on("zoom", function(event) {{
        inner.attr("transform", event.transform)
      }});
      svg_d3.call(zoomf);
    }
  }

  emptyModal = (event) => {
    const body = document.getElementById("nftt-modal-body");
    const mm_svg = body.querySelector("svg");
    const original_mm_svg = document.getElementById(`${mm_svg.id}-tmp`);
    if (original_mm_svg.id.includes("-tmp")) {
      original_mm_svg.id = original_mm_svg.id.slice(0, -4);
    }
    for (const child of body.children) {
      child.remove();
    }
  }
}
