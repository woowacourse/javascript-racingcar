import SELECTOR from '../constants/selectors.js';

const $ = (selector) => document.querySelector(selector);

const generateRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const userInputValue = {
    carNames() {
        const carNames = $(SELECTOR.CAR_NAME_INPUT)
            .value.split(',')
            .map((name) => name.trim());
        return carNames;
    },
    tryCount() {
        return Number($(SELECTOR.TRY_COUNT_INPUT).value);
    },
    reset() {
        $(SELECTOR.CAR_NAME_INPUT).value = '';
        $(SELECTOR.TRY_COUNT_INPUT).value = '';
    },
};

export { $, generateRandomInRange, userInputValue };
