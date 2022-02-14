export const $ = (selector) => document.querySelector(`.${selector}`);

export const trimInArray = (array) => {
  return array.map((element) => element.trim());
};

export const makeDOMDisplayNone = (element, classNameForDisplayNone) => {
  element.classList.add(classNameForDisplayNone);
};

export const makeDOMDisplayNotNone = (element, classNameForDisplayNone) => {
  element.classList.remove(classNameForDisplayNone);
};
