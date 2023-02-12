const { ERROR_MESSAGE, GAME_NUMBER, GAME_STRING } = require('./constants');

const Validation = {
  duplicatedCarName(carNames) {
    const carNamesLowerCase = carNames.map((name) => {
      return name.toLowerCase();
    });
    const isDulicate =
      new Set(carNamesLowerCase).size !== carNamesLowerCase.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  },

  carNameLengthRange(carNames) {
    carNames.forEach((name) => {
      if (
        name.length < GAME_NUMBER.minCarNameLength ||
        name.length > GAME_NUMBER.maxCarNameLength
      ) {
        throw new Error(ERROR_MESSAGE.carNameLengthRange);
      }
    });
  },
  carCountRange(carCount) {
    if (
      carCount < GAME_NUMBER.minCarCount ||
      carCount > GAME_NUMBER.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCountRange);
    }
  },
  onlyAlphabet(carNames) {
    const regex = GAME_STRING.alphabetExpression;
    carNames.forEach((name) => {
      if (regex.test(name)) throw new Error(ERROR_MESSAGE.onlyAlphabet);
    });
  },

  carName(carNames) {
    this.duplicatedCarName(carNames);
    this.carNameLengthRange(carNames);
    this.carCountRange(carNames.length);
    this.onlyAlphabet(carNames);
  },

  attemptRange(attempt) {
    if (attempt < GAME_NUMBER.minAttempt || attempt > GAME_NUMBER.maxAttempt) {
      throw new Error(ERROR_MESSAGE.attemptRange);
    }
  },

  isNotNumber(attempt) {
    return Number.isNaN(attempt);
  },

  isNotInteger(attempt) {
    return !Number.isInteger(attempt);
  },

  onlyInt(attempt) {
    if (Validation.isNotNumber(attempt) || Validation.isNotInteger(attempt)) {
      throw new Error(ERROR_MESSAGE.onlyInt);
    }
  },

  attempt(attempts) {
    this.onlyInt(attempts);
    this.attemptRange(attempts);
  },
};

module.exports = Validation;
