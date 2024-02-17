import { ERROR } from "./constant/constant.js";
const { DUPLICATE, NAME_RANGE, NATURAL_NUMBER, NOT_A_NUMBER } = ERROR;

class Validation {
  static isDuplicate(carList) {
    if (carList.length === new Set(carList).size) {
      return;
    }
    throw new Error(DUPLICATE);
  }

  static isRange(carName) {
    if (1 <= carName.length && carName.length <= 5) {
      return;
    }
    throw new Error(NAME_RANGE);
  }

  static checkRange(carList) {
    carList.forEach((carName) => {
      Validation.isRange(carName);
    });
  }

  static isNaturalNumber(tryNumber) {
    if (Number.isInteger(tryNumber)) return;
    throw new Error(NATURAL_NUMBER);
  }
}

export default Validation;
