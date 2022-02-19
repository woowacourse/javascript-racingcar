const $ = (selector) => document.querySelector(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const isEmptyString = (value) => value === '';
const isPositiveNumber = (number) => number > 0;

export {
    $, generateRandomInRange, isEmptyString, isPositiveNumber,
};
