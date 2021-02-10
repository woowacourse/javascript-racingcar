export const getRandomNumber = function () {
    return Math.floor(Math.random() * 10);
};

export const isAlphanumeric = function (input) {
    return /^[a-zA-Z0-9]+$/.test(input);
};

export const isNotDuplicatedArray = function (array) {
    return Array.from(new Set(array)).length === array.length;
};

export const $ = selector => document.querySelector(selector);
