export const $ = (selector) => document.querySelector(selector);

export const trimInArray = (array) => {
  return array.map((element) => element.trim());
};
