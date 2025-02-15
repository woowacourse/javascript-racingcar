import { ERROR_MESSAGE } from "../constants/ErrorMessage.js";
class TryCountValidator {
  validateNumber(tryCount) {
    if (isNaN(tryCount) === true) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_NUMBERIC);
    }

    if (Number(tryCount) <= 0) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT_NOT_POSITIVE);
    }
  }
}

export default TryCountValidator;
