export class TableHandler {
  wrapTables() {
    // Wrap tables with responsive container.
    const tables = document.querySelectorAll('table.docutils');
    const central_col = document.querySelector("#content");
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
      const nftt_modal = document.getElementById("nftt-modal");
      if (table.offsetWidth > central_col.offsetWidth && nftt_modal) {
        wrapper.classList.add("nftt-table--expand");
        const anchor_expand = document.createElement("a");
        anchor_expand.innerHTML = "&#xF14A;";
        anchor_expand.classList.add("expand");
        anchor_expand.href = "#";
        anchor_expand.dataset.snfttTableId = table.id;
        table.before(anchor_expand);
        anchor_expand.addEventListener('click', this.openModal);
        nftt_modal.addEventListener('hide.bs.modal', this.emptyModal);
      }
    }
  }

  openModal(event) {
    // Copy the table referred to in the data-snftt-table-id attribute
    // of the anchor clicked to the body of the modal.
    event.preventDefault();
    const target = event.target;
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
    body.append(newtable);
    nftt_modal.show();
    nftt_modal.handleUpdate();
  }

  emptyModal(event) {
    const body = document.getElementById("nftt-modal-body");
    for (const child of body.children) {
      child.remove();
    }
  }
}
