const addClass = (element, className) => element.classList.add(className);

const removeClass = (element, className) => element.classList.remove(className);

const getElement = (id, target = document) => target.getElementById(id);

const getInputValue = target => target.querySelector('input').value;

const resetInputValue = element => (element.value = '');

const clearHTML = element => (element.innerHTML = '');

const setHTML = (element, html) => {
  clearHTML(element);
  element.insertAdjacentHTML('afterbegin', html);
};

const getEnterEvent = (key, cb) => {
  if (key !== 'Enter') return;
  cb();
};

export {
  addClass,
  removeClass,
  getElement,
  getInputValue,
  resetInputValue,
  clearHTML,
  setHTML,
  getEnterEvent,
};
