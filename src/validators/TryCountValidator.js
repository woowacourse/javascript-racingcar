import { ERROR } from '../constants/message.js';

class TryCountValidator {
  validateNumber(tryCount) {
    if (isNaN(tryCount) === true) {
      throw new Error(ERROR.TRY_COUNT.INVALID_TYPE);
    }

    if (Number(tryCount) <= 0) {
      throw new Error(ERROR.TRY_COUNT.INVALID_RANGE);
    }
  }
}

export default TryCountValidator;
