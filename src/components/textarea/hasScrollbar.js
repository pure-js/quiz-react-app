/*
returns {boolean}
 */
function hasScrollbar(el_id) {
  const el = document.getElementById(el_id);
  return (el.clientHeight < el.scrollHeight);
}

export default hasScrollbar;
