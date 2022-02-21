export const convertToNumber = (value) => parseInt(value, 10);

export const generateRandomNumber = () => Math.floor(Math.random() * 10);

export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);
