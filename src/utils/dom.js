const getElement = (id, target = document) => target.getElementById(id);

const getInputValue = target => target.querySelector('input').value;

export { getElement, getInputValue };
