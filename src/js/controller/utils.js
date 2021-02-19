export const getRandomNumber = function () {
  return Math.floor(Math.random() * 10);
};

export const $ = (selector) => document.querySelector(selector);
