export const getRandomNumber = function () {
  return Math.floor(Math.random() * 10);
};

export const isAlphanumeric = function (input) {
  return /^[a-zA-Z0-9]+$/.test(input);
};

export const isNotDuplicatedNames = function (carNamesInput) {
  return new Set(carNamesInput).size === carNamesInput.length;
};

export const $ = (selector) => document.querySelector(selector);
