import ErrorMessage from '../../constants/ErrorMessage.js';
import {
  MIN_CAR_NUMBER,
  MAX_CAR_LENGTH,
} from '../../constants/ValidatorConstants.js';

class NameValidator {
  static isNotEmpty(parsedCarNameList) {
    parsedCarNameList.forEach((carName) => {
      if (carName === '') {
        throw new Error(ErrorMessage.emptyInput);
      }
    });
  }

  static isMoreThanTwo(parsedCarNameList) {
    if (parsedCarNameList.length < MIN_CAR_NUMBER) {
      throw new Error(ErrorMessage.lessThanTwo);
    }
  }

  static isBelowFive(parsedCarNameList) {
    parsedCarNameList.forEach((carName) => {
      if (carName.length > MAX_CAR_LENGTH) {
        throw new Error(ErrorMessage.longerThanFive);
      }
    });
  }

  static isNotDuplicated(parsedCarNameList) {
    const nameSet = new Set(parsedCarNameList);
    if (nameSet.size !== parsedCarNameList.length) {
      throw new Error(ErrorMessage.duplicatedName);
    }
  }

  static isValid(parsedCarNameList) {
    this.isNotEmpty(parsedCarNameList);
    this.isMoreThanTwo(parsedCarNameList);
    this.isBelowFive(parsedCarNameList);
    this.isNotDuplicated(parsedCarNameList);
  }
}

export default NameValidator;
