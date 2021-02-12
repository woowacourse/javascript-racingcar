import { ERROR_MESSAGE } from "../constants/message.js";
import { VALID } from "../constants/constant.js";

class CarValidator {
  isCarNameOverMaxLength(carNames) {
    if (carNames.some(carName => carName.length > VALID.CARNAME_MAX_LENGTH)) {
      return alert(ERROR_MESSAGE.OVER_CARNAME_MAX_LENGTH);
    }

    return true;
  }

  isCarNameBlank(carNames) {
    if (carNames.some(carName => carName.length < VALID.CARNAME_MIN_LENGTH)) {
      return alert(ERROR_MESSAGE.BLANK_CARNAME);
    }

    return true;
  }

  isCarNameDuplicate(carNames) {
    if (carNames.length !== new Set(carNames).size) {
      return alert(ERROR_MESSAGE.DUPLICATE_CARNAME);
    }

    return true;
  }
}

export default CarValidator;
