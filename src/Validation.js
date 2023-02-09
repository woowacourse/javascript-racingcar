const { GAME_NUMBER, ERROR_MESSAGE } = require('./constants');

class Validation {
  static carName(carNames) {
    Validation.duplicatedCarName(carNames);
    Validation.carNameLengthRange(carNames);
    Validation.carCountRange(carNames.length);
  }

  static attempt(attempts) {
    Validation.onlyInt(attempts);
    Validation.attemptRange(attempts);
  }

  static attemptRange(attempt) {
    if (attempt < GAME_NUMBER.minAttempt || attempt > GAME_NUMBER.maxAttempt) {
      throw new Error(ERROR_MESSAGE.attemptRange);
    }
  }

  static isNotNumber(attempt) {
    return Number.isNaN(attempt);
  }

  static isNotInteger(attempt) {
    return !Number.isInteger(attempt);
  }

  static onlyInt(attempt) {
    if (Validation.isNotNumber(attempt) || Validation.isNotInteger(attempt)) {
      throw new Error(ERROR_MESSAGE.onlyInt);
    }
  }

  static carCountRange(carCount) {
    if (
      carCount < GAME_NUMBER.minCarCount ||
      carCount > GAME_NUMBER.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCountRange);
    }
  }

  static carNameLengthRange(carNames) {
    carNames.forEach((name) => {
      if (
        name.length < GAME_NUMBER.minCarNameLength ||
        name.length > GAME_NUMBER.maxCarNameLength
      ) {
        throw new Error(ERROR_MESSAGE.carNameLengthRange);
      }
    });
  }

  static duplicatedCarName(carNames) {
    const carNamesLowerCase = carNames.map((name) => {
      return name.toLowerCase();
    });
    const isDulicate =
      new Set(carNamesLowerCase).size !== carNamesLowerCase.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  }
}

module.exports = Validation;
