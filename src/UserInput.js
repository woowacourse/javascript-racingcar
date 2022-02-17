import { $ } from './util.js';

const userInput = {
    getCarNames() {
        return $('#car-name-input')
            .value.split(',')
            .map((name) => name.trim());
    },
    getTryCount() {
        return Number($('#try-count-input').value);
    },
    reset() {
        $('#car-name-input').value = '';
        $('#try-count-input').value = '';
    },
};

export default userInput;
