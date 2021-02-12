import { ERROR_MESSAGE } from "../constants/message.js";
import { VALID } from "../constants/constant.js";

class CountValidator {
  isCountNumber(count) {
    if (isNaN(parseInt(count, 10))) {
      return alert(ERROR_MESSAGE.ISNAN_COUNT);
    }

    return true;
  }

  isCountPositive(count) {
    if (parseInt(count, 10) < VALID.COUNT_MIN_NUM) {
      return alert(ERROR_MESSAGE.ZERO_OR_MINUS_COUNT);
    }

    return true;
  }

  isCountInteger(count) {
    if (parseInt(count, 10) !== parseFloat(count)) {
      return alert(ERROR_MESSAGE.FLOAT_COUNT);
    }

    return true;
  }
}

export default CountValidator;
