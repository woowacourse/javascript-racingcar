const { INPUT_CONDITION, ERROR_MESSAGE } = require('../constants/Constant');

class Validation {
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
    return names.length >= INPUT_CONDITION.minimumCarQuantity;
  }

  static #isCarNameLengthValid(names) {
    return names.every((name) => {
      return (
        INPUT_CONDITION.minimumCarNameLength <= name.length &&
        INPUT_CONDITION.maximumCarNameLength >= name.length
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
    return raceRound >= INPUT_CONDITION.minimumRaceRound;
  }
}

module.exports = Validation;
