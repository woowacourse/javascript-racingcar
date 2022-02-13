const getElement = (id, target = document) => target.getElementById(id);

const getInputValue = target => target.querySelector('input').value;

const resetInputValue = element => (element.value = '');

const clearHTML = element => (element.innerHTML = '');

const setHTML = (element, html) => {
  clearHTML(element);
  element.insertAdjacentHTML('afterbegin', html);
};

export { getElement, getInputValue, resetInputValue, clearHTML, setHTML };
