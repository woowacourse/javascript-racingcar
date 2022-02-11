export const $ = (selector) => document.querySelector(selector);

export const trimInArray = (array) => {
  return array.map((element) => element.trim());
};

export const makeDOMHidden = (array) => {
  array.forEach((element) => (element.style.display = 'none'));
};

export const makeDOMVisible = (array, type) => {
  array.forEach((element) => (element.style.display = type));
};
