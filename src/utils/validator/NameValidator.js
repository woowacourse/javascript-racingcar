import ErrorMessage from '../../constants/ErrorMessage.js';
import { MIN_CAR_NUMBER, MAX_CAR_LENGTH } from '../../constants/MagicNumber.js';

class NameValidator {
  static isNotEmpty(parsedCarName) {
    if (parsedCarName === '') {
      throw new Error(ErrorMessage.isEmpty);
    }
  }

  static isMoreThanTwo(parsedCarName) {
    if (parsedCarName.length < MIN_CAR_NUMBER) {
      throw new Error(ErrorMessage.isLessThanTwo);
    }
  }

  static isBelowFive(parsedCarName) {
    parsedCarName.forEach((carName) => {
      if (carName.length > MAX_CAR_LENGTH) {
        throw new Error(ErrorMessage.isLongerThanFive);
      }
    });
  }

  static isNotDuplicated(parsedCarName) {
    const nameSet = new Set(parsedCarName);
    if (nameSet.size !== parsedCarName.length) {
      throw new Error(ErrorMessage.isDuplicated);
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
