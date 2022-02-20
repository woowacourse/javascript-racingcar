const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const onSubmitAfterPreventDefault = (onSubmit) => (e) => {
    e.preventDefault();
    onSubmit();
};

const passedOneSecond = (time) => time + 1000 <= new Date().getTime();

export { $, $$, generateRandomInRange, onSubmitAfterPreventDefault, passedOneSecond };
