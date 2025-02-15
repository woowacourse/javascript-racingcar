import ERROR_MESSAGE from '../../constants/ERROR_MESSAGE.js';
import {
  MIN_CAR_NUMBER,
  MAX_CAR_LENGTH,
} from '../../constants/MAGIC_NUMBER.js';

class NameValidator {
  static isNotEmpty(parsedCarName) {
    if (parsedCarName === '') {
      throw new Error(ERROR_MESSAGE.isEmpty);
    }
  }

  static isMoreThanTwo(parsedCarName) {
    if (parsedCarName.length < MIN_CAR_NUMBER) {
      throw new Error(ERROR_MESSAGE.isLessThanTwo);
    }
  }

  static isBelowFive(parsedCarName) {
    parsedCarName.forEach((carName) => {
      if (carName.length > MAX_CAR_LENGTH) {
        throw new Error(ERROR_MESSAGE.isLongerThanFive);
      }
    });
  }

  static isNotDuplicated(parsedCarName) {
    const nameSet = new Set(parsedCarName);
    if (nameSet.size !== parsedCarName.length) {
      throw new Error(ERROR_MESSAGE.isDuplicated);
    }
  }

  static isValid(parsedCarName) {
    this.isNotEmpty(parsedCarName);
    this.isMoreThanTwo(parsedCarName);
    this.isBelowFive(parsedCarName);
    this.isNotDuplicated(parsedCarName);
  }
}

export default NameValidator;
