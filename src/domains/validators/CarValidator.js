import { ERROR_PREFIX } from "../../constants/message.js";

export default class CarValidator {
  static CAR_SETTING = {
    maxCarName: 5,
    minCarName: 1,
    minCarCount: 2,
    maxCarCount: 100,
    numberLength: 6,
  };

  static ERROR_MESSAGE = {
    carNameLength: `${ERROR_PREFIX} 자동차 이름은 ${CarValidator.CAR_SETTING.maxCarName}글자 이하, ${CarValidator.CAR_SETTING.minCarName}이상이어야 합니다.`,
    carCount: `${ERROR_PREFIX} 자동차 갯수는 ${CarValidator.CAR_SETTING.minCarCount}개 이상, ${CarValidator.CAR_SETTING.maxCarCount}개 이하이어야 합니다.`,
    duplicateCarName: `${ERROR_PREFIX} 중복된 자동차 이름은 입력할 수 없습니다.`,
  };

  static validateCarNameLength(name) {
    if (
      name.length < CarValidator.CAR_SETTING.minCarName ||
      name.length > CarValidator.CAR_SETTING.maxCarName
    ) {
      throw new Error(CarValidator.ERROR_MESSAGE.carNameLength);
    }
  }

  static validateInputCarName(names) {
    this.#validateCarCount(names);
    this.#validateDuplicateCarName(names);
  }

  static #validateCarCount(names) {
    if (
      names.length < CarValidator.CAR_SETTING.minCarCount ||
      names.length > CarValidator.CAR_SETTING.maxCarCount
    ) {
      throw new Error(CarValidator.ERROR_MESSAGE.carCount);
    }
  }

  static #validateDuplicateCarName(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(CarValidator.ERROR_MESSAGE.duplicateCarName);
    }
  }
}
