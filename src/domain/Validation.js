import { MAGIC_NUMBER } from '../constants/Constant.js';

export default class Validation {
  static validateCarNames(names) {
    if (!Validation.#isCarQuantityValid(names)) {
      throw new Error(ERROR_MESSAGE.invalidCarQuantity);
    }

    if (!Validation.#isCarNameLengthValid(names)) {
      throw new Error(ERROR_MESSAGE.invalidCarNameLength);
    }

    if (!Validation.#isCarNameUnique(names)) {
      throw new Error(ERROR_MESSAGE.duplicateCarName);
    }
  }

  static #isCarQuantityValid(names) {
    return names.length >= MAGIC_NUMBER.minimumCarQuantity;
  }

  static #isCarNameLengthValid(names) {
    return names.every((name) => {
      return (
        MAGIC_NUMBER.minimumCarNameLength <= name.length &&
        MAGIC_NUMBER.maximumCarNameLength >= name.length
      );
    });
  }

  static #isCarNameUnique(names) {
    const duplicateCheck = new Set(names);

    return names.length === duplicateCheck.size;
  }

  static validateRaceRound(raceRound) {
    if (!Validation.#isRaceRoundValid(raceRound)) {
      throw new Error(ERROR_MESSAGE.invalidGameRound);
    }
  }

  static #isRaceRoundValid(raceRound) {
    return raceRound >= MAGIC_NUMBER.minimumRaceRound;
  }
}

const ERROR_MESSAGE = {
  invalidCarQuantity: `[ERROR] 2개 이상의 차이름을 입력하세요.`,
  invalidCarNameLength: `[ERROR] 1자 이상, 5자 이하의 이름을 입력하세요.`,
  duplicateCarName: `[ERROR] 중복되는 차 이름이 존재합니다.`,
  invalidGameRound: `[ERROR] 1 이상의 숫자를 입력하세요.`,
};
