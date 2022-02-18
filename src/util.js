import { KEYCODE_ENTER } from './constant.js';

const $ = (selector) => document.querySelector(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const onSubmitClickedEnter = (onSubmit) => (e) => {
    if (e.keyCode === KEYCODE_ENTER) {
        onSubmit();
    }
};

export { $, generateRandomInRange, onSubmitClickedEnter };
