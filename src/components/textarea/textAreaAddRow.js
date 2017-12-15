import hasScrollbar from './hasScrollbar';

function addRow(el_id) {
  if (hasScrollbar(el_id)) {
    const el = document.getElementById(el_id);
    el.rows = Number(el.rows) + 1;
  }
}

export default addRow;
