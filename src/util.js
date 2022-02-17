const $ = (selector) => document.querySelector(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

export { $, generateRandomInRange };
