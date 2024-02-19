import { ERROR_MESSAGES } from "../constants/car-race";

class Random {
  static #validateRange(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
      throw new Error(ERROR_MESSAGES.invalidRandomNumberType);
    }

    if (min > max) {
      throw new Error(ERROR_MESSAGES.invalidRandomNumberRange);
    }
  }

  static pickNumberInRange(min, max) {
    Random.#validateRange(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default Random;
