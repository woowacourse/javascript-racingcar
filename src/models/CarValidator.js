import { CAR_RULE, DELIMITER, ERROR_MESSAGE } from '../constants/index.js';

const CarValidator = {
  private_validateCarName(string) {
    const regex = /^[A-Za-z가-힣]{1,5}$/;

    if (!regex.test(string)) {
      throw new Error(ERROR_MESSAGE.carName);
    }
  },

  private_validateCarNameArray(nameArray) {
    nameArray.forEach((name) => {
      this.private_validateCarName(name);
    });
  },

  private_validateDelimiter(string, nameArray) {
    const delimiterArray = string.matchAll(/,/g);
    const commaCount = delimiterArray[0] ? delimiterArray.length : 0;

    const { length } = nameArray;
    const pass = length > 1 ? nameArray.length - 1 !== commaCount : true;

    if (!pass) {
      throw new Error(ERROR_MESSAGE.delimiter);
    }
  },

  private_isDuplicate(nameArray) {
    return (
      nameArray.length >= 2 && new Set(nameArray).size !== nameArray.length
    );
  },

  private_validateDuplicate(nameArray) {
    if (this.private_isDuplicate(nameArray)) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  },

  private_validateNumberOfCars(nameArray) {
    const { length } = nameArray;
    const { min, max } = CAR_RULE.numberOfCars;
    const pass = length >= min && length <= max;

    if (!pass) {
      throw new Error(ERROR_MESSAGE.numberOfCars);
    }
  },

  validate(string) {
    const nameArray = string.split(DELIMITER);
    console.log('name', nameArray);
    this.private_validateDelimiter(string, nameArray);
    this.private_validateDuplicate(nameArray);
    this.private_validateNumberOfCars(nameArray);
    this.private_validateCarNameArray(nameArray);
  },
};

export default CarValidator;
