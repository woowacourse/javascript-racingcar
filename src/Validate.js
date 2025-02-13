import { ERROR_MESSAGE, MAX_CAR_LENGTH } from "./Const.js";

class Validate {
  #throwIfInValid(condition, errorMessage) {
    if (condition) {
      throw new Error(errorMessage);
    }
    return this;
  }

  isBelowLimit(name) {
    return this.#throwIfInValid(
      name.length > MAX_CAR_LENGTH,
      ERROR_MESSAGE.belowLimit
    );
  }

  isPositiveLength(name) {
    return this.#throwIfInValid(
      name.length <= 0,
      ERROR_MESSAGE.positiveLength
    );
  }

  isPositiveNumber(number) {
    return this.#throwIfInValid(number <= 0, ERROR_MESSAGE.positiveNumber);
  }

  isNumeric(number) {
    return this.#throwIfInValid(Number.isNaN(number), ERROR_MESSAGE.numeric);
  }

  isInteger(number) {
    return this.#throwIfInValid(
      !Number.isInteger(number),
      ERROR_MESSAGE.integer
    );
  }
}

export default Validate;
