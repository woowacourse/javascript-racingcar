import { NUMBER, ERROR_MSG } from '../utils/constants.js';

export default class Validator {
  static isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    if (filtered.length > NUMBER.ZERO) {
      alert(ERROR_MSG.BLANK_NAME);
      return true;
    }
  }

  static isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length > NUMBER.MAX_LENGTH);
    if (filtered.length > NUMBER.ZERO) {
      alert(ERROR_MSG.INVALID_NAME_LENGTH);
      return true;
    }
  }

  static isInValidCarNamesInput(carNames) {
    if (this.isCarNameBlank(carNames)) {
      return true;
    }
    if (this.isInvalidCarNameLength(carNames)) {
      return true;
    }
    return false;
  }

  static isFloat(number) {
    if (!Number.isInteger(Number(number))) {
      alert(ERROR_MSG.INVALID_RACING_COUNT);
      return true;
    }
  }

  static isNotNaturalNumber(number) {
    if (number <= NUMBER.ZERO) {
      alert(ERROR_MSG.INVALID_RACING_COUNT);
      return true;
    }
  }

  static isString(number) {
    if (typeof Number(number) !== 'number') {
      alert(ERROR_MSG.INVALID_RACING_COUNT);
      return true;
    }
  }

  static isInValidRacingCountInput(number) {
    if (this.isFloat(number)) {
      return true;
    }
    if (this.isNotNaturalNumber(number)) {
      return true;
    }
    if (this.isString(number)) {
      return true;
    }
    return false;
  }
}
