import { NUMBER } from '../utils/constants.js';

const Validator = {
  isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    return filtered.length > NUMBER.ZERO;
  },

  isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length > NUMBER.MAX_LENGTH);
    return filtered.length > NUMBER.ZERO;
  },

  isInValidCarNamesInput(carNames) {
    return this.isCarNameBlank(carNames) || this.isInvalidCarNameLength(carNames);
  },

  isFloat(number) {
    return !Number.isInteger(Number(number));
  },

  isNotNaturalNumber(number) {
    return number <= NUMBER.ZERO;
  },

  isString(number) {
    return typeof Number(number) !== 'number';
  },

  isInValidRacingCountInput(number) {
    return this.isFloat(number) || this.isNotNaturalNumber(number) || this.isString(number);
  },
  isNowRacing(carPosition) {
    return !carPosition.every((position) => position === 0);
  },
};

export default Validator;
