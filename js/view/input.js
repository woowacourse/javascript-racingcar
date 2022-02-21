import { $ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';

export const input = {
  getCarNamesInput() {
    return $(SELECTOR.CAR_NAMES_INPUT)
      .value.split(',')
      .map((carName) => carName.trim());
  },

  getRacingCountInput() {
    return $(SELECTOR.CAR_RACING_COUNT_INPUT).value;
  },
};
