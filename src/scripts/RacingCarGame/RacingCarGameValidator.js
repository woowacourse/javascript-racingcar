import {
  MAX_CAR_NAME_EXCEEDED_MESSAGE,
  CAR_NAME_EMPTY_MESSAGE,
  SHOULD_NOT_DECIMAL_MESSAGE,
  SHOULD_GREATER_THAN_ZERO_MESSAGE,
  SHOULD_REGISTER_CAR_FIRST_MESSAGE,
  MAX_CAR_NAME_LENGTH_NUMBER,
} from '../constants.js';

import { racingCarGameModel } from '../store.js';

export default class RacingCarGameValidator {
  static isCarNameTooLong(carName) {
    return carName.length > MAX_CAR_NAME_LENGTH_NUMBER;
  }

  static isCarNameEmpty(carName) {
    return carName.length === 0;
  }

  static checkCarNameWithAlert(carName) {
    if (RacingCarGameValidator.isCarNameTooLong(carName)) {
      alert(MAX_CAR_NAME_EXCEEDED_MESSAGE);
      return false;
    } else if (RacingCarGameValidator.isCarNameEmpty(carName)) {
      alert(CAR_NAME_EMPTY_MESSAGE);
      return false;
    }

    return true;
  }

  static isInteger(number) {
    return number === parseInt(number);
  }

  static isTryCountValid(tryCount) {
    let isValid = true;
    if (!RacingCarGameValidator.isInteger(tryCount)) {
      alert(SHOULD_NOT_DECIMAL_MESSAGE);
      isValid = false;
    }
    if (tryCount <= 0) {
      alert(SHOULD_GREATER_THAN_ZERO_MESSAGE);
      isValid = false;
    }

    return isValid;
  }

  static isCarListEmpty() {
    if (racingCarGameModel.carList.length === 0) {
      alert(SHOULD_REGISTER_CAR_FIRST_MESSAGE);
      return true;
    }

    return false;
  }
}
