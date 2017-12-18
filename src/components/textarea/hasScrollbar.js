/*
returns {boolean}
 */
function hasScrollbar(elementId) {
  const el = document.getElementById(elementId);
  return (el.clientHeight < el.scrollHeight);
}

export default hasScrollbar;
