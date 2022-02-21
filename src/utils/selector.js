export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => {
  return document.querySelectorAll(selector);
};
