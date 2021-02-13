export const $ = (...params) => document.querySelector(...params);
export const $all = (...params) => document.querySelectorAll(...params);

export const isButton = (element) => {
  const tagName = element.tagName.toLowerCase();
  return tagName === 'button' || (tagName === 'input' && element.type === 'button');
};

export const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
};
