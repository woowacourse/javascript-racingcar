import { CAR_RULE, DELIMITER, ERROR_MESSAGE } from '../constants/index.js';

const CarValidator = {
  private_validateCarsNameInput(string) {
    const regex = /^([a-zA-Z가-힣]{1,5})+(,([a-zA-Z가-힣]{1,5}))*$/;

    if (!regex.test(string)) {
      throw new Error(ERROR_MESSAGE.carName);
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

    this.private_validateDelimiter(string, nameArray);
    this.private_validateDuplicate(nameArray);
    this.private_validateNumberOfCars(nameArray);
    this.private_validateCarNameArray(nameArray);
  },
};

export default CarValidator;
