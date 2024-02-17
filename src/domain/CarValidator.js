import { CAR_RULE, DELIMITER, ERROR_MESSAGE } from '../constant/index.js';

const CarValidator = {
  private_validateCarNameAndDelimiter(string) {
    const { min, max } = CAR_RULE.numberOfName;
    const regex = new RegExp(
      `^[A-Za-z가-힣]{${min},${max}}(${DELIMITER}[A-Za-z가-힣]{${min},${max}})*$`,
    );
    const pass = regex.test(string);

    if (!pass) {
      throw new Error(ERROR_MESSAGE.carNameAndDelimiter);
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
    this.private_validateCarNameAndDelimiter(string);

    const nameArray = string.split(DELIMITER);

    this.private_validateDuplicate(nameArray);
    this.private_validateNumberOfCars(nameArray);
  },
};

export default CarValidator;
