import { $ } from './util.js';

export default class UserInput {
    static getCarNames() {
        return $('#car-name-input')
            .value.split(',')
            .map((name) => name.trim());
    }

    static getTryCnt() {
        return Number($('#try-count-input').value);
    }

    static reset() {
        $('#car-name-input').value = '';
        $('#try-count-input').value = '';
    }
}
