import hasScrollbar from './hasScrollbar';

function addRow(elId) {
  if (hasScrollbar(elId)) {
    const el = document.getElementById(elId);
    el.rows = Number(el.rows) + 1;
  }
}

export default addRow;
