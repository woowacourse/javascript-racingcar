import { $ } from './util.js';
import { SELECTOR } from './constant.js';

export default class UserInput {
    static getCarNames() {
        return $(SELECTOR.car_name_input)
            .value.split(',')
            .map((name) => name.trim());
    }

    static getTryCount() {
        return Number($(SELECTOR.try_count_input).value);
    }

    static reset() {
        $(SELECTOR.car_name_input).value = '';
        $(SELECTOR.try_count_input).value = '';
    }
}
