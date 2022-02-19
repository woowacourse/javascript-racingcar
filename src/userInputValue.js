import { $ } from './util/util.js';
import SELECTOR from './constant/selectors.js';

const userInputValue = {
    carNames() {
        const carNames = $(SELECTOR.CAR_NAME_INPUT)
            .value.split(',')
            .map((name) => name.trim());
        return carNames;
    },
    turnCount() {
        return Number($(SELECTOR.TURN_COUNT_INPUT).value);
    },
    reset() {
        $(SELECTOR.CAR_NAME_INPUT).value = '';
        $(SELECTOR.TURN_COUNT_INPUT).value = '';
    },
};

export default userInputValue;
