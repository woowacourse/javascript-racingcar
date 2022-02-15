export const $ = (selector, node = document) => node.querySelector(selector);

export const $$ = (selector, node = document) => node.querySelectorAll(selector);
