const getElement = (id, target = document) => target.getElementById(id);

const getElements = (className, target = document) =>
  target.getElementsByClassName(className);

const toggleDisable = ids => {
  ids.forEach(id => {
    getElement(id).disabled = !getElement(id).disabled;
    getElement(id).classList.toggle('disabled-button');
  });
};

export { getElement, getElements, toggleDisable };
