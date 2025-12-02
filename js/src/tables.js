export class TableHandler {
  wrapTables() {
    // Wrap tables with responsive container.
    const tables = document.querySelectorAll('table.docutils');
    const central_col = document.querySelector("#content");
    const nftt_modal = document.getElementById("nftt-modal");

    for (const table of tables) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("nftt-table");
      table.before(wrapper);
      wrapper.append(table);

      /*
       * When the width of the table is larger than the width of the
       * central column, display the content of the table in a modal
       * dialog. But only when the width of the central column is
       * smaller than the width of the window (so, do not open a
       * dialog in a phone).
       */
      if (table.offsetWidth > central_col.offsetWidth && nftt_modal) {
        const expand_holder = document.createElement("div");
        expand_holder.classList.add("nftt-expand-container");
        const expand_anchor = document.createElement("a");
        expand_anchor.innerHTML = '<i class="bi bi-arrows-angle-expand"></i>';
        expand_anchor.classList.add("nftt-expand");
        expand_anchor.href = "#";
        if (table.id.length === 0) {
          table.id = crypto.randomUUID();
        }
        expand_anchor.dataset.snfttTableId = table.id;
        expand_holder.append(expand_anchor);
        table.before(expand_holder)
        expand_anchor.addEventListener('click', this.openModal);
        nftt_modal.addEventListener('hidden.bs.modal', this.emptyModal);
      }
    }
  }

  openModal(event) {
    // Copy the table referred to in the data-snftt-table-id attribute
    // of the anchor clicked to the body of the modal.
    event.preventDefault();
    const target = event.currentTarget;
    const nftt_modal = new bootstrap.Modal('#nftt-modal');
    const table = document.getElementById(target.dataset.snfttTableId);
    const newtable = table.cloneNode(true);
    const caption_span = table.querySelector("caption span.caption-text");
    if (caption_span) {
      const title = document.getElementById("nftt-modal-title");
      title.textContent = caption_span.textContent;
      newtable.querySelector("caption")?.remove();
    }
    const body = document.getElementById("nftt-modal-body");
    const body_style = window.getComputedStyle(body);
    const body_width = body_style.getPropertyValue("--nftt-modal-width");
    const modal_body_with = (  // Get the width in number removing the 'px'.
      body_width.endsWith("px") && Number.parseInt(body_width.slice(0, -2))
    );

    // If the modal window is not wide enough to display the table
    // without scrolling, we directly show the modal in fullscreen.
    if (modal_body_with < table.offsetWidth) {
      const modal_dialog = document.querySelector("#nftt-modal .modal-dialog");
      if (modal_dialog) {
        modal_dialog.classList.remove("modal-fullscreen-xxl-down");
        modal_dialog.classList.add("modal-fullscreen");
      }
    }
    body.append(newtable);
    nftt_modal.show();
    nftt_modal.handleUpdate();
  }

  emptyModal(event) {
    const modal_dialog = document.querySelector("#nftt-modal .modal-dialog");
    const body = document.getElementById("nftt-modal-body");
    for (const child of body.children) {
      child.remove();
    }
    modal_dialog.classList.remove("modal-fullscreen");
    modal_dialog.classList.add("modal-fullscreen-xxl-down");
  }
}
