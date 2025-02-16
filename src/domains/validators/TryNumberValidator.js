import { ERROR_PREFIX } from "../../constants/message.js";

export default class TryNumberValidator {
  static TRY_NUMBER_SETTING = {
    minTryNumber: 1,
    maxTryNumber: 100,
  };

  static ERROR_MESSAGE = {
    tryNumberRange: `${ERROR_PREFIX} 시도 횟수는 ${TryNumberValidator.TRY_NUMBER_SETTING.minTryNumber}회 이상, ${TryNumberValidator.TRY_NUMBER_SETTING.maxTryNumber}회 이하이어야 합니다.`,
    tryNumberNotPositiveInteger: `${ERROR_PREFIX} 시도 횟수는 양의 정수여야 합니다.`,
  };

  static validateInputTryNumber(tryNumber) {
    this.#validateTryNumberSize(tryNumber);
    this.#validateTryNumberPositiveInteger(tryNumber);
  }

  static #validateTryNumberSize(tryNumber) {
    if (
      tryNumber < TryNumberValidator.TRY_NUMBER_SETTING.minTryNumber ||
      tryNumber > TryNumberValidator.TRY_NUMBER_SETTING.maxTryNumber
    ) {
      throw new Error(TryNumberValidator.ERROR_MESSAGE.tryNumberRange);
    }
  }

  static #validateTryNumberPositiveInteger(tryNumber) {
    if (!Number.isInteger(tryNumber)) {
      throw new Error(
        TryNumberValidator.ERROR_MESSAGE.tryNumberNotPositiveInteger
      );
    }
  }
}
