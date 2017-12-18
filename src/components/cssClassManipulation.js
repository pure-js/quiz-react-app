function cssClassManipulation() {

}

function clearTextAreaClasses(el, classes) {
  for (let i = 0; i < classes.length; i++) {
    const cssClass = classes[i];
    el.classList.remove(cssClass);
  }
}

export {
  cssClassManipulation,
  clearTextAreaClasses,
};
