import {
  MAX_CAR_NAME_LENGTH,
  MAX_CAR_NAME_EXCEEDED,
  CAR_NAME_EMPTY,
  SHOULD_BE_INTEGER,
  SHOULD_GREATER_THAN_ZERO,
  SHOULD_REGISTER_CAR_FIRST,
} from "../constants.js";

import { getRacingCarGameModel } from "../store.js";

export default class RacingCarGameValidation {
  static isCarNameValid(carName) {
    if (carName.length > MAX_CAR_NAME_LENGTH) {
      alert(MAX_CAR_NAME_EXCEEDED);
      return false;
    } else if (carName.length === 0) {
      alert(CAR_NAME_EMPTY);
      return false;
    }

    return true;
  }

  static isInteger(number) {
    return number === parseInt(number);
  }

  static isTryCountValid(tryCount) {
    if (!RacingCarGameValidation.isInteger(tryCount)) {
      alert(SHOULD_BE_INTEGER);
      return false;
    }
    if (tryCount <= 0) {
      alert(SHOULD_GREATER_THAN_ZERO);
      return false;
    }

    return true;
  }

  static isCarListEmpty() {
    if (getRacingCarGameModel().carList.length === 0) {
      alert(SHOULD_REGISTER_CAR_FIRST);
      return true;
    }

    return false;
  }
}
