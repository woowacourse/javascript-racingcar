import ErrorMessage from '../../constants/ErrorMessage.js';

class CountValidator {
  static isNumber(parsedTryCount) {
    if (Number.isNaN(parsedTryCount)) {
      throw new Error(ErrorMessage.isNotNumber);
    }
  }

  static isMoreThanZero(parsedTryCount) {
    if (parsedTryCount <= 0) {
      throw new Error(ErrorMessage.isInvalidNumber);
    }
  }

  static isInteger(parsedTryCount) {
    if (!Number.isInteger(parsedTryCount)) {
      throw new Error(ErrorMessage.isNotInteger);
    }
  }

  static isNotBigNumber(parsedTryCount) {
    const MAXIMUM_COUNT = 1000000;
    if (parsedTryCount > MAXIMUM_COUNT) {
      throw new Error(ErrorMessage.isBigNumber);
    }
  }

  static isValid(parsedTryCount) {
    this.isNumber(parsedTryCount);
    this.isMoreThanZero(parsedTryCount);
    this.isInteger(parsedTryCount);
    this.isNotBigNumber(parsedTryCount);
  }
}

export default CountValidator;
