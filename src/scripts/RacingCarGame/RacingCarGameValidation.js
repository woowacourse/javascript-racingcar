import { 
  MAX_CAR_NAME_LENGTH,
  MAX_CAR_NAME_EXCEEDED,
  CAR_NAME_EMPTY,
  SHOULD_BE_INTEGER,
  SHOULD_GREATER_THAN_ZERO
  } from '../constants.js';

export default class RacingCarGameValidation {
  static isCarNameValid(carName) {
    let isValid = true;
    if (carName.length > MAX_CAR_NAME_LENGTH) {
      alert(MAX_CAR_NAME_EXCEEDED);
      isValid = false;
    } else if (carName.length === 0) {
      alert(CAR_NAME_EMPTY);
      isValid = false;
    }

    return isValid;
  }

  static isInteger(number) {
    return number === parseInt(number);
  }

  static isTryCountValid(tryCount) {
    let isValid = true;
    if (!RacingCarGameValidation.isInteger(tryCount)) {
      alert(SHOULD_BE_INTEGER);
      isValid = false;
    }
    if (tryCount <= 0) {
      alert(SHOULD_GREATER_THAN_ZERO);
      isValid = false;
    }

    return isValid
  }
}