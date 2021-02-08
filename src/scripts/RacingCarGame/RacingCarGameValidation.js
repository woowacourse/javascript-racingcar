import { MAX_CAR_NAME_LENGTH, MAX_CAR_NAME_EXCEEDED, CAR_NAME_EMPTY } from '../constants.js';

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
}