import CarNameValidator from './CarNameValidator.js';
import TryCountValidator from './TryCountValidator.js';
import { CAR_NAME_ERROR_MESSAGE, TRY_COUNT_ERROR_MESSAGE } from '../Utils/constants.js';

export default class Validator {
  checkCarNamesValidation(carNames) {
    const carNameValidator = new CarNameValidator(carNames);

    return {
      lengthCheck: () => (carNameValidator.isNotValidLength()
        ? alert(CAR_NAME_ERROR_MESSAGE.INVALID_LENGTH) : true),
      blankCheck: () => (carNameValidator.isIncludingBlank()
        ? alert(CAR_NAME_ERROR_MESSAGE.INCLUDE_BLANK) : true),
      duplicateCheck: () => (carNameValidator.isDuplicated()
        ? alert(CAR_NAME_ERROR_MESSAGE.DUPLICATED) : true),
      incompleteWordCheck: () => (carNameValidator.isInCompleteWord()
        ? alert(CAR_NAME_ERROR_MESSAGE.INCOMPLETE_WORD) : true),
    };
  }

  checkTryCountValidation(tryCount) {
    const tryCountValidator = new TryCountValidator(tryCount);

    return {
      integerCheck: () => (tryCountValidator.isNotInteger()
        ? alert(TRY_COUNT_ERROR_MESSAGE.NOT_INTEGER) : true),
      positiveCheck: () => (tryCountValidator.isNotPositiveNumber()
        ? alert(TRY_COUNT_ERROR_MESSAGE.NOT_POSITIVE) : true),
    };
  }

  validateCarNames(carNames) {
    const checkNames = this.checkCarNamesValidation(carNames);
    return Object.keys(checkNames).every((checker) => checkNames[checker]());
  }

  validateTryCount(tryCount) {
    const checkTryCount = this.checkTryCountValidation(tryCount);
    return Object.keys(checkTryCount).every((checker) => checkTryCount[checker]());
  }
}
