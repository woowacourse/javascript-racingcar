import { ERROR_MESSAGE, MAX_CAR_LENGTH } from "../const.js";
import throwIfInValid from "./throwIfInvalid.js";

class NumberValidate {
  #throwIfInValid({ condition, errorMessage }) {
    if (condition) {
      throw new Error(errorMessage);
    }
    return this;
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

export default NumberValidate;
