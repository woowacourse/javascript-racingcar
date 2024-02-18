import REGEX_CONFIG from '../../constants/configs/regexConfig';
import AppError from '../../errors/AppError';
import ERROR_MESSAGE from '../../constants/messages/errorMessage';
import VALID_CONSTANTS_CONFIG from '../../constants/configs/validConstantsConfig';

export default class Validator {
  static validateCarNames(carNames) {
    carNames.forEach((car) => {
      Validator.validateSpecialCharacter(car);
      Validator.validateOutOfRange(car);
    });
    Validator.validateDuplication(carNames);

    return carNames;
  }

  static validateCountOfAttempt(count) {
    Validator.validateIntegerNumber(count);
    Validator.validateOverLimitCountRange(count);
    return count;
  }

  static validateSpecialCharacter(car) {
    if (REGEX_CONFIG.SPECIAL_CHARACTER.test(car)) {
      throw new AppError(ERROR_MESSAGE.HAVE_SPECIAL_CHARACTERS);
    }
  }

  static validateOutOfRange(car) {
    if (car.length > VALID_CONSTANTS_CONFIG.CAR_NAME_LIMIT_RANGE) {
      throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
    }
  }

  static validateDuplication(carNames) {
    if (new Set(carNames).size !== carNames.length) {
      throw new AppError(ERROR_MESSAGE.HAVE_DUPLICATION);
    }
  }

  static validateIntegerNumber(count) {
    if (!Number.isInteger(count)) {
      throw new AppError(ERROR_MESSAGE.NOT_INTEGER);
    }
  }

  static validateOverLimitCountRange(count) {
    if (count < VALID_CONSTANTS_CONFIG.ATTEMPT_MIN_LIMIT_RANGE || count > VALID_CONSTANTS_CONFIG.ATTEMPT_MAX_LIMIT_RANGE) {
      throw new AppError(ERROR_MESSAGE.OVER_LIMIT_COUNT_RANGE);
    }
  }
}
