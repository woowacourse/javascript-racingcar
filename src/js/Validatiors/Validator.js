import CarNameValidator from './CarNameValidator.js';
import TryCountValidator from './TryCountValidator.js';
import { CAR_NAME_ERROR_MESSAGE, TRY_COUNT_ERROR_MESSAGE } from '../Utils/constants.js';

export default class Validator {
  validateCarNames(carNames) {
    const carNameValidator = new CarNameValidator(carNames);

    if (carNameValidator.isNotValidLength()) {
      alert(CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH);
      return false;
    }
    if (carNameValidator.isIncludingBlank()) {
      alert(CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK);
      return false;
    }
    if (carNameValidator.isDuplicated()) {
      alert(CAR_NAME_ERROR_MESSAGE.DUPLICATED);
      return false;
    }
    if (carNameValidator.isInCompleteWord()) {
      alert(CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD);
      return false;
    }
    return true;
  }

  validateTryCount(tryCount) {
    const tryCountValidator = new TryCountValidator(tryCount);

    if (tryCountValidator.isNotInteger()) {
      alert(TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER);
      return false;
    }
    if (tryCountValidator.isNotPositiveNumber()) {
      alert(TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE);
      return false;
    }
    return true;
  }
}
