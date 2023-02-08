const { GAME_NUMBER, ERROR_MESSAGE } = require('./constants');

class Validation {
  static carName(carNames) {
    Validation.duplicatedCarName(carNames);
    Validation.possibleCarNameLength(carNames);
    Validation.possibleCarCount(carNames.length);
  }

  static attempt(attempts) {
    Validation.onlyInt(attempts);
    Validation.maxAttempt(attempts);
  }

  static maxAttempt(attempt) {
    if (attempt > GAME_NUMBER.maxAttempt) {
      throw new Error(ERROR_MESSAGE.maxAttempt);
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

  static possibleCarCount(carCount) {
    if (
      carCount < GAME_NUMBER.minCarCount ||
      carCount > GAME_NUMBER.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.possibleCarCount);
    }
  }

  static possibleCarNameLength(carNames) {
    carNames.forEach((name) => {
      if (
        name.length < GAME_NUMBER.minCarNameLength ||
        name.length > GAME_NUMBER.maxCarNameLength
      ) {
        throw new Error(ERROR_MESSAGE.possibleCarCount);
      }
    });
  }

  static duplicatedCarName(carNames) {
    const isDulicate = new Set(carNames).size !== carNames.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  }
}

module.exports = Validation;
