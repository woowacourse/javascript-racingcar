import SELECTOR from '../constants/selectors.js';

const $ = (selector) => document.querySelector(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const userInputValue = {
    carNames() {
        return $(SELECTOR.car_name_input)
            .value.split(',')
            .map((name) => name.trim());
    },
    tryCount() {
        return Number($(SELECTOR.try_count_input).value);
    },
    reset() {
        $(SELECTOR.car_name_input).value = '';
        $(SELECTOR.try_count_input).value = '';
    },
};

export { $, generateRandomInRange, userInputValue };
