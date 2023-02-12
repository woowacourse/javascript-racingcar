const CAR_RULE = require('../constants/carRule');
const { ERROR_MESSAGE } = require('../constants/message');

class Validator {
  static checkCarName(carNames) {
    if (!Validator.#isAllowedCharacter(carNames)) {
      throw new Error(ERROR_MESSAGE.NAME_CHARACTER);
    }
    if (!Validator.#isAllowedSeparator(carNames)) {
      throw new Error(ERROR_MESSAGE.NAME_SEPARATOR);
    }
    if (Validator.#isDuplicatedCarName(carNames)) {
      throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
    }
  }

  static checkMovingCount(movingCount) {
    const numberReg = /^[1-9][0-9]*$/;
    if (!numberReg.test(movingCount)) {
      throw new Error(ERROR_MESSAGE.MOVING_COUNT);
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
    const cars = carNames.split(CAR_RULE.SEPARATOR);
    return cars.length !== new Set(cars).size;
  }
}

module.exports = Validator;
