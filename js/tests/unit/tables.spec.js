import { TableHandler } from '../../src/tables.js';
import { getFixture, clearFixture } from '../helpers/fixture.js';

describe('tables', () => {
  let fixtureEl;
  let modal;

  beforeAll(() => {
    fixtureEl = getFixture();
  });

  beforeEach(() => {
    spyOn(crypto, "randomUUID").and.returnValue("generated-table-id");
    modal = jasmine.createSpyObj("Modal", ["show", "handleUpdate"]);
    window.bootstrap = {
      Modal: jasmine.createSpy("Modal").and.returnValue(modal)
    };
  });

  afterEach(() => {
    clearFixture();
    delete window.bootstrap;
  });

  it('adds an accessible label to the table expand control', () => {
    fixtureEl.innerHTML = [
      '<div id="nftt-modal"></div>',
      '<table class="docutils">',
      '  <caption><span class="caption-text">Example table</span></caption>',
      '  <tbody>',
      '    <tr><td>value</td></tr>',
      '  </tbody>',
      '</table>'
    ].join('');

    const table_handler = new TableHandler();
    table_handler.wrapTables();

    const expand_anchor = fixtureEl.querySelector("a.nftt-expand");
    const expand_icon = expand_anchor.querySelector("i");

    expect(expand_anchor.getAttribute("aria-label")).toBe("Expand table");
    expect(expand_anchor.getAttribute("title")).toBe("Expand table");
    expect(expand_icon.getAttribute("aria-hidden")).toBe("true");
    expect(expand_anchor.dataset.snfttTableId).toBe("generated-table-id");
  });

  it('uses an existing table id for the expand control target', () => {
    fixtureEl.innerHTML = [
      '<div id="nftt-modal"></div>',
      '<table class="docutils" id="existing-table-id">',
      '  <tbody>',
      '    <tr><td>value</td></tr>',
      '  </tbody>',
      '</table>'
    ].join('');

    const table_handler = new TableHandler();
    table_handler.wrapTables();

    const expand_anchor = fixtureEl.querySelector("a.nftt-expand");

    expect(crypto.randomUUID).not.toHaveBeenCalled();
    expect(expand_anchor.dataset.snfttTableId).toBe("existing-table-id");
  });

  it('opens a table copy in the modal', () => {
    fixtureEl.innerHTML = [
      '<div id="nftt-modal">',
      '  <div class="modal-dialog modal-fullscreen-xxl-down"></div>',
      '</div>',
      '<h2 id="nftt-modal-title"></h2>',
      '<div id="nftt-modal-body" style="--nftt-modal-width: 100px;"></div>',
      '<table class="docutils" id="wide-table">',
      '  <caption><span class="caption-text">Wide table</span></caption>',
      '  <tbody>',
      '    <tr><td>value</td></tr>',
      '  </tbody>',
      '</table>'
    ].join('');
    const table = fixtureEl.querySelector("#wide-table");
    Object.defineProperty(table, "offsetWidth", {value: 200});
    const event = {
      preventDefault: jasmine.createSpy("preventDefault"),
      currentTarget: {
        dataset: {
          snfttTableId: "wide-table"
        }
      }
    };
    const table_handler = new TableHandler();

    table_handler.openModal(event);

    const modal_dialog = fixtureEl.querySelector(".modal-dialog");
    const modal_body = fixtureEl.querySelector("#nftt-modal-body");
    const modal_table = modal_body.querySelector("table");

    expect(event.preventDefault).toHaveBeenCalled();
    expect(window.bootstrap.Modal).toHaveBeenCalledWith("#nftt-modal");
    expect(fixtureEl.querySelector("#nftt-modal-title").textContent)
      .toBe("Wide table");
    expect(modal_table).not.toBeNull();
    expect(modal_table.querySelector("caption")).toBeNull();
    expect(modal_dialog).toHaveClass("modal-fullscreen");
    expect(modal.show).toHaveBeenCalled();
    expect(modal.handleUpdate).toHaveBeenCalled();
  });

  it('leaves compact modal sizing unchanged for narrow tables', () => {
    fixtureEl.innerHTML = [
      '<div id="nftt-modal">',
      '  <div class="modal-dialog modal-fullscreen-xxl-down"></div>',
      '</div>',
      '<div id="nftt-modal-body" style="--nftt-modal-width: 300px;"></div>',
      '<table class="docutils" id="narrow-table">',
      '  <tbody>',
      '    <tr><td>value</td></tr>',
      '  </tbody>',
      '</table>'
    ].join('');
    const table = fixtureEl.querySelector("#narrow-table");
    Object.defineProperty(table, "offsetWidth", {value: 200});
    const event = {
      preventDefault: jasmine.createSpy("preventDefault"),
      currentTarget: {
        dataset: {
          snfttTableId: "narrow-table"
        }
      }
    };
    const table_handler = new TableHandler();

    table_handler.openModal(event);

    const modal_dialog = fixtureEl.querySelector(".modal-dialog");

    expect(modal_dialog).not.toHaveClass("modal-fullscreen");
    expect(modal_dialog).toHaveClass("modal-fullscreen-xxl-down");
  });

  it('empties modal content and restores compact modal sizing', () => {
    fixtureEl.innerHTML = [
      '<div id="nftt-modal">',
      '  <div class="modal-dialog modal-fullscreen"></div>',
      '</div>',
      '<div id="nftt-modal-body">',
      '  <table><tbody><tr><td>value</td></tr></tbody></table>',
      '</div>'
    ].join('');
    const table_handler = new TableHandler();

    table_handler.emptyModal();

    const modal_dialog = fixtureEl.querySelector(".modal-dialog");
    const modal_body = fixtureEl.querySelector("#nftt-modal-body");

    expect(modal_body.children.length).toBe(0);
    expect(modal_dialog).not.toHaveClass("modal-fullscreen");
    expect(modal_dialog).toHaveClass("modal-fullscreen-xxl-down");
  });
});
