import { ERROR_MESSAGE, MAX_CAR_LENGTH } from "../const.js";

class NameValidate {
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
}

export default NameValidate;
