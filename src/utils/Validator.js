const CAR_RULE = require('../constants/carRule');
const { ERROR_MESSAGE } = require('../constants/message');

class Validator {
  static checkCarName(carNames) {
    if (!Validator.#isAllowedCharacter(carNames)) {
      throw new Error(ERROR_MESSAGE.nameCharacter);
    }
    if (!Validator.#isAllowedSeparator(carNames)) {
      throw new Error(ERROR_MESSAGE.nameSeparator);
    }
    if (Validator.#isDuplicatedCarName(carNames)) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  }

  static checkMovingCount(movingCount) {
    const numberReg = /^[1-9][0-9]*$/;
    if (!numberReg.test(movingCount)) {
      throw new Error(ERROR_MESSAGE.movingCount);
    }
  }

  static #isAllowedCharacter(carNames) {
    const characterReg = /^([,A-Za-z가-힣])+$/;
    return characterReg.test(carNames);
  }

  static #isAllowedSeparator(carNames) {
    const separatorReg = /([A-Za-z가-힣])+(,([A-Za-z가-힣])+)+/;
    return separatorReg.test(carNames);
  }

  static #isDuplicatedCarName(carNames) {
    const cars = carNames.split(CAR_RULE.separator);
    return cars.length !== new Set(cars).size;
  }
}

module.exports = Validator;
