import CarNameValidator from './CarNameValidator.js';
import TryCountValidator from './TryCountValidator.js';
import { CAR_NAME_ERROR_MESSAGE, TRY_COUNT_ERROR_MESSAGE } from '../Utils/constants.js';

export default class RacingCarValidator {
  checkCarNamesValidation(carNames) {
    const carNameValidator = new CarNameValidator(carNames);

    if (!carNameValidator.isValidLength()) {
      return CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH;
    }

    if (carNameValidator.isIncludingBlank()) {
      return CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK;
    }

    if (carNameValidator.isDuplicated()) {
      return CAR_NAME_ERROR_MESSAGE.DUPLICATED;
    }

    if (!carNameValidator.isCompleteWord()) {
      return CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD;
    }
  }

  checkTryCountValidation(tryCount) {
    const tryCountValidator = new TryCountValidator(tryCount);

    if (!tryCountValidator.isInteger()) {
      return TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER;
    }

    if (!tryCountValidator.isPositiveNumber()) {
      return TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE;
    }
  }
}
