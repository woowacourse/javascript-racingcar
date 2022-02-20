export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
export const $$$ = (selector, baseEl) => baseEl.querySelector(selector);
export const hideElement = (element) => element.classList.add('d-none');
export const showElement = (element) => element.classList.remove('d-none');
