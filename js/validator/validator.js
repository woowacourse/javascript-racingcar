import { NUMBER, ERROR_MESSAGE } from '../utils/constants.js';

export const validator = {
  isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    if (filtered.length > NUMBER.ZERO) {
      return true;
    }
  },

  isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length > NUMBER.MAX_LENGTH);
    if (filtered.length > NUMBER.ZERO) {
      return true;
    }
  },

  isInvalidCarNamesInput(carNames) {
    return ['isCarNameBlank', 'isInvalidCarNameLength'].some((method) => this[method](carNames));
  },

  isNotNaturalNumber(number) {
    if (number <= NUMBER.ZERO) {
      return true;
    }
  },

  isInvalidRacingCountInput(number) {
    return this.isNotNaturalNumber(number);
  },
};
