import ErrorMessage from '../../constants/ErrorMessage.js';
import { MAXIMUM_COUNT, MIN_TRY_COUNT } from '../../constants/MagicNumber.js';

class CountValidator {
  static isNumber(parsedTryCount) {
    if (Number.isNaN(parsedTryCount)) {
      throw new Error(ErrorMessage.isNotNumber);
    }
  }

  static isAtLeastOne(parsedTryCount) {
    if (parsedTryCount < MIN_TRY_COUNT) {
      throw new Error(ErrorMessage.isInvalidNumber);
    }
  }

  static isInteger(parsedTryCount) {
    if (!Number.isInteger(parsedTryCount)) {
      throw new Error(ErrorMessage.isNotInteger);
    }
  }

  static isNotBigNumber(parsedTryCount) {
    if (parsedTryCount > MAXIMUM_COUNT) {
      throw new Error(ErrorMessage.isBigNumber);
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
