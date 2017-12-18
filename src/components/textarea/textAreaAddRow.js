import hasScrollbar from './hasScrollbar';

function addRow(elementId) {
  if (hasScrollbar(elementId)) {
    const el = document.getElementById(elementId);
    el.rows = Number(el.rows) + 1;
  }
}

export default addRow;
