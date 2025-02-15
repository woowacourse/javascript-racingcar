import ERROR_MESSAGE from '../../constants/ERROR_MESSAGE.js';
import { MAXIMUM_COUNT, MIN_TRY_COUNT } from '../../constants/MAGIC_NUMBER.js';

class CountValidator {
  static isNumber(parsedTryCount) {
    if (Number.isNaN(parsedTryCount)) {
      throw new Error(ERROR_MESSAGE.isNotNumber);
    }
  }

  static isAtLeastOne(parsedTryCount) {
    if (parsedTryCount < MIN_TRY_COUNT) {
      throw new Error(ERROR_MESSAGE.isInvalidNumber);
    }
  }

  static isInteger(parsedTryCount) {
    if (!Number.isInteger(parsedTryCount)) {
      throw new Error(ERROR_MESSAGE.isNotInteger);
    }
  }

  static isNotBigNumber(parsedTryCount) {
    if (parsedTryCount > MAXIMUM_COUNT) {
      throw new Error(ERROR_MESSAGE.isBigNumber);
    }
  }

  static isValid(parsedTryCount) {
    this.isNumber(parsedTryCount);
    this.isAtLeastOne(parsedTryCount);
    this.isInteger(parsedTryCount);
    this.isNotBigNumber(parsedTryCount);
  }
}

export default CountValidator;
