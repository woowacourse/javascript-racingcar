import {
  ALERT_DECIMAL,
  ALERT_OVERLAP,
  ALERT_VALID_COUNT_RANGE,
  ALERT_VALID_LENGTH,
  ALERT_VALID_LETTER,
  ALERT_VALID_NUMBER_OF_CARS,
  MAX_NAME_LENGTH,
  MIN_NAMES_NUMBER,
  MIN_NAME_LENGTH,
} from '../constants/index.js';

export default class InputValidator {
  constructor() {}

  checkNameInput(value) {
    const names = value.split(',');

    return (
      this.hasMoreThan2Cars(names) &&
      this.checkValidLetter(names) &&
      this.checkValidLength(names) &&
      this.checkOverlap(names)
    );
  }

  hasMoreThan2Cars(names) {
    if (names.length < MIN_NAMES_NUMBER) {
      throw new Error(ALERT_VALID_NUMBER_OF_CARS);
    }

    return true;
  }

  checkValidLength(names) {
    const isValid = names.every(
      name => name.length >= MIN_NAME_LENGTH && name.length <= MAX_NAME_LENGTH
    );

    if (!isValid) {
      throw new Error(ALERT_VALID_LENGTH);
    }

    return true;
  }

  checkValidLetter(names) {
    const rExeption = /[^0-9a-z가-힣]/i;
    const isValid = names.every(name => !rExeption.test(name));

    if (!isValid) {
      throw new Error(ALERT_VALID_LETTER);
    }

    return true;
  }

  checkOverlap(names) {
    const hash = {};

    for (const name of names) {
      if (hash.hasOwnProperty(name)) {
        throw new Error(ALERT_OVERLAP);
      }
      hash[name] = true;
    }

    return true;
  }

  checkCountInput(value) {
    return this.isMoreThanZero(value) && this.isInteger(value);
  }

  isMoreThanZero(value) {
    if (value <= 0) {
      throw new Error(ALERT_VALID_COUNT_RANGE);
    }

    return true;
  }

  isInteger(value) {
    if (value % 1 !== 0) {
      throw new Error(ALERT_DECIMAL);
    }

    return true;
  }
}
