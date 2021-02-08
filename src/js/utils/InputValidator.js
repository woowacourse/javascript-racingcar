import {
  ALERT_OVERLAP,
  ALERT_VALID_LENGTH,
  ALERT_VALID_LETTER,
  ALERT_VALID_NUMBER_OF_CARS,
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
    if (names.length < 2) {
      throw new Error(ALERT_VALID_NUMBER_OF_CARS);
    }

    return true;
  }

  checkValidLength(names) {
    const isValid = names.every(name => name.length >= 1 && name.length <= 5);
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
}
