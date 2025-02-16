import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
import { NUMBER } from "../constants/Number.js";
class TryCountValidator {
  validateNumber(tryCount) {
    if (isNaN(tryCount)) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_NUMBERIC);
    }

    if (Number(tryCount) > NUMBER.MAX_TRY_COUNT) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_UPPER_THEN_100);
    }

    if (Number(tryCount) < NUMBER.MIN_TRY_COUNT) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_POSITIVE);
    }
  }
}

export default TryCountValidator;
