export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);
export const $$$ = (selector, baseEl) => baseEl.querySelector(selector);
