import { ERROR_MESSAGE, MAX_CAR_LENGTH } from "./const.js";

class Validate {
  #throwIfInValid({ condition, errorMessage }) {
    if (condition) {
      throw new Error(errorMessage);
    }
    return this;
  }

  isLimitLength(name) {
    return this.#throwIfInValid({
      condition: name.length > MAX_CAR_LENGTH,
      errorMessage: ERROR_MESSAGE.belowLimit,
    });
  }

  isPositiveLength(name) {
    return this.#throwIfInValid({
      condition: name.length <= 0,
      errorMessage: ERROR_MESSAGE.positiveLength,
    });
  }

  isPositiveNumber(number) {
    return this.#throwIfInValid({
      condition: number <= 0,
      errorMessage: ERROR_MESSAGE.positiveNumber,
    });
  }

  isNumeric(number) {
    return this.#throwIfInValid({
      condition: Number.isNaN(number),
      errorMessage: ERROR_MESSAGE.numeric,
    });
  }

  isInteger(number) {
    return this.#throwIfInValid({
      condition: !Number.isInteger(number),
      errorMessage: ERROR_MESSAGE.integer,
    });
  }
}

export default Validate;
