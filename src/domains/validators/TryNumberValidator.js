import { ERROR_MESSAGE } from "../../constants/message.js";
import { TRY_NUMBER_SETTING } from "../../constants/setting.js";

export default class TryNumberValidator {
  static validateInputTryNumber(tryNumber) {
    this.#validateTryNumberSize(tryNumber);
    this.#validateTryNumberPositiveInteger(tryNumber);
  }

  static #validateTryNumberSize(tryNumber) {
    if (
      tryNumber < TRY_NUMBER_SETTING.minTryNumber ||
      tryNumber > TRY_NUMBER_SETTING.maxTryNumber
    ) {
      throw new Error(ERROR_MESSAGE.tryNumberRange);
    }
  }

  static #validateTryNumberPositiveInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error(ERROR_MESSAGE.tryNumberNotPositiveInteger);
    }
  }
}
