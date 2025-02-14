import ErrorMessage from '../../constants/ErrorMessage.js';
import {
  MAX_TRY_COUNT,
  MIN_TRY_COUNT,
} from '../../constants/ValidatorConstants.js';

class CountValidator {
  static isNumber(parsedTryCount) {
    if (Number.isNaN(parsedTryCount)) {
      throw new Error(ErrorMessage.NaNTryCount);
    }
  }

  static isAtLeastOne(parsedTryCount) {
    if (parsedTryCount < MIN_TRY_COUNT) {
      throw new Error(ErrorMessage.invalidRangeTryCount);
    }
  }

  static isInteger(parsedTryCount) {
    if (!Number.isInteger(parsedTryCount)) {
      throw new Error(ErrorMessage.notInteger);
    }
  }

  static isNotBigNumber(parsedTryCount) {
    if (parsedTryCount > MAX_TRY_COUNT) {
      throw new Error(ErrorMessage.exceedTryCount);
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
