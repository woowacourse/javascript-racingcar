const getElement = (id, target = document) => {
  return target.getElementById(id);
};

const changeActivity = ids => {
  ids.forEach(id => {
    getElement(id).disabled = !getElement(id).disabled;
    getElement(id).classList.toggle('disabled-button');
  });
};

export { getElement, changeActivity };
