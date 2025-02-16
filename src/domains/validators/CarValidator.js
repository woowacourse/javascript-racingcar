import { CAR_SETTING } from "../../constants/setting.js";
import { ERROR_MESSAGE } from "../../constants/message.js";

export default class CarValidator {
  static validateCarNameLength(name) {
    if (
      name.length < CAR_SETTING.minCarName ||
      name.length > CAR_SETTING.maxCarName
    ) {
      throw new Error(ERROR_MESSAGE.carNameLength);
    }
  }

  static validateInputCarName(names) {
    this.#validateCarCount(names);
    this.#validateDuplicateCarName(names);
  }

  static #validateCarCount(names) {
    if (
      names.length < CAR_SETTING.minCarCount ||
      names.length > CAR_SETTING.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCount);
    }
  }

  static #validateDuplicateCarName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(ERROR_MESSAGE.duplicateCarName);
    }
  }
}
