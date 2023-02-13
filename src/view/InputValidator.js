const { ERROR_MESSAGE } = require('./utils/constants/message');

class InputValidator {
  static #MIN_CAR_NAME_LENGTH = 1;
  static #MAX_CAR_NAME_LENGTH = 5;

  static validateCarNameList(carNameList) {
    if (this.#hasCarNameListEmpty(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameEmpty);
    }

    if (!this.#isCarNameListInRange(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameListInRange);
    }

    if (!this.#isCarNameListNotDuplicated(carNameList)) {
      throw new Error(ERROR_MESSAGE.carNameListDuplicated);
    }
  }

  static validateNumberOfTrials(numberOfTrials) {
    if (isNaN(numberOfTrials)) {
      throw new Error(ERROR_MESSAGE.numberOfTrials);
    }
  }

  static #hasCarNameListEmpty(carNameList) {
    return carNameList.some((carName) => carName.length === 0);
  }

  static #isCarNameListInRange(carNameList) {
    return carNameList.every(
      (carName) =>
        carName.length >= this.#MIN_CAR_NAME_LENGTH && carName.length <= this.#MAX_CAR_NAME_LENGTH
    );
  }

  static #isCarNameListNotDuplicated(carNameList) {
    return new Set(carNameList).size === carNameList.length;
  }
}

module.exports = InputValidator;
