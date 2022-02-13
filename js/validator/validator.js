import { NUMBER } from '../utils/constants.js';

export default class Validator {
  static isCarNameBlank(carNames) {
    const filtered = carNames.filter((name) => name === '');
    return filtered.length > NUMBER.ZERO;
  }

  static isInvalidCarNameLength(carNames) {
    const filtered = carNames.filter((name) => name.length > NUMBER.MAX_LENGTH);
    return filtered.length > NUMBER.ZERO;
  }

  static isInValidCarNamesInput(carNames) {
    return this.isCarNameBlank(carNames) || this.isInvalidCarNameLength(carNames);
  }

  static isFloat(number) {
    return !Number.isInteger(Number(number));
  }

  static isNotNaturalNumber(number) {
    return number <= NUMBER.ZERO;
  }

  static isString(number) {
    return typeof Number(number) !== 'number';
  }

  static isInValidRacingCountInput(number) {
    return this.isFloat(number) || this.isNotNaturalNumber(number) || this.isString(number);
  }
}
