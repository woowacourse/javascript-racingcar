import CarNameValidator from './CarNameValidator.js';
import TryCountValidator from './TryCountValidator.js';
import { CAR_NAME_ERROR_MESSAGE, TRY_COUNT_ERROR_MESSAGE } from '../Constants/constants.js';

export default class Validator {
  validateCarNames(carNames) {
    const carNameValidator = new CarNameValidator(carNames);

    if (carNameValidator.isNotValidLength()) {
      return CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH;
    }
    if (carNameValidator.isIncludingBlank()) {
      return CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK;
    }
    if (carNameValidator.isDuplicated()) {
      return CAR_NAME_ERROR_MESSAGE.DUPLICATED;
    }
    if (carNameValidator.isInCompleteWord()) {
      return CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD;
    }
    return '';
  }

  validateTryCount(tryCount) {
    const tryCountValidator = new TryCountValidator(tryCount);

    if (tryCountValidator.isNotInteger()) {
      return TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER;
    }
    if (tryCountValidator.isNotPositiveNumber()) {
      return TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE;
    }
    return '';
  }
}
