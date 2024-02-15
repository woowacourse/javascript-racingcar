import { ERROR } from "./constant/constant.js";
const { DUPLICATE, NAME_RANGE, NATURAL_NUMBER, NOT_A_NUMBER } = ERROR;

class Validation {
  static isDuplicate(carList) {
    if (carList.length === new Set(carList).size) {
      return true;
    }
    throw new Error(DUPLICATE);
  }

  static isRange(carName) {
    if (carName.length >= 5 || carName.length < 1) {
      throw new Error(NAME_RANGE);
    }
    return true;
  }

  static checkRange(carList) {
    carList.forEach((carName) => {
      Validation.isRange(carName);
    });
  }

  static isNaturalNumber(tryNumber) {
    if (tryNumber === "" || isNaN(tryNumber)) {
      throw new Error(NOT_A_NUMBER);
    }
    if (Number(tryNumber) <= 0) {
      throw new Error(NATURAL_NUMBER);
    }
    if (tryNumber.includes(".")) {
      throw new Error(NATURAL_NUMBER);
    }
    return true;
  }
}

export default Validation;
