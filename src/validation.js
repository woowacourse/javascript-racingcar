import { ERROR } from "./constant/constant.js";
const { DUPLICATE, NAME_RANGE, NATURAL_NUMBER } = ERROR;

class Validation {
  static #isDuplicate(carNames) {
    if (carNames.length === new Set(carNames).size) {
      return;
    }
    throw new Error(DUPLICATE);
  }

  static #isRange(carName) {
    if (1 <= carName.length && carName.length <= 5) {
      return;
    }
    throw new Error(NAME_RANGE);
  }

  static #checkRange(carNames) {
    carNames.forEach((carName) => {
      Validation.#isRange(carName);
    });
  }

  static #isNaturalNumber(tryNumber) {
    if (Number.isInteger(tryNumber)) return;
    throw new Error(NATURAL_NUMBER);
  }

  static validateCarNames(carNames) {
    Validation.#isDuplicate(carNames);
    Validation.#checkRange(carNames);
  }

  static validateTryNumber(tryNumber) {
    Validation.#isNaturalNumber(tryNumber);
  }
}

export default Validation;
