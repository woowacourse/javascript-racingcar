const $ = (selector, target = document) => target.querySelector(selector);

const $$ = (selector, target = document) => target.querySelectorAll(selector);

const disableElement = element => (element.disabled = true);

const enableElement = element => (element.disabled = false);

const addClass = (element, className) => element.classList.add(className);

const removeClass = (element, className) => element.classList.remove(className);

const getInputValue = target => target.value;

const resetInputValue = element => (element.value = '');

const clearHTML = element => (element.innerHTML = '');

const setHTML = (element, html) => {
  clearHTML(element);
  element.insertAdjacentHTML('afterbegin', html);
};

const appendHTML = (element, html) => {
  element.insertAdjacentHTML('beforeend', html);
};

const getEnterEvent = (key, cb) => {
  if (key !== 'Enter') return;
  cb();
};

export {
  $,
  $$,
  disableElement,
  enableElement,
  addClass,
  removeClass,
  getInputValue,
  resetInputValue,
  clearHTML,
  setHTML,
  appendHTML,
  getEnterEvent,
};
