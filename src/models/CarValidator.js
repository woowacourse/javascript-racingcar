import { CAR_RULE, DELIMITER, ERROR_MESSAGE } from '../constants/index.js';

const CarValidator = {
  private_validateCarName(nameArray) {
    const regex = /^[A-Za-z가-힣]{1,5}$/;
    const pass = nameArray.every((name) => regex.test(name));

    if (!pass) {
      throw new Error(ERROR_MESSAGE.carName);
    }
  },

  private_validateDelimiter(string) {
    const regex = /^([\w]*)(,[\w]*)*$/;

    if (!regex.test(string)) {
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
    this.private_validateDelimiter(string);

    const nameArray = string.split(DELIMITER);

    this.private_validateCarName(nameArray);
    this.private_validateDuplicate(nameArray);
    this.private_validateNumberOfCars(nameArray);
  },
};

export default CarValidator;
