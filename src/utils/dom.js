const $ = (selector, target = document) => target.querySelector(selector);
const $$ = (selector, target = document) => target.querySelectorAll(selector);

const addClass = (element, className) => element.classList.add(className);

const removeClass = (element, className) => element.classList.remove(className);

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
  $,
  $$,
  addClass,
  removeClass,
  getInputValue,
  resetInputValue,
  clearHTML,
  setHTML,
  getEnterEvent,
};
