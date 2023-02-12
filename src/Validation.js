const { ERROR_MESSAGE, GAME_NUMBER, GAME_STRING } = require('./constants');

const Validation = {
  duplicatedCarName(carNames) {
    const carNamesLowerCase = carNames.map((carName) => {
      return carName.toLowerCase();
    });
    const isDulicate =
      new Set(carNamesLowerCase).size !== carNamesLowerCase.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  },

  carNameLengthRange(carNames) {
    carNames.forEach((carName) => {
      if (
        carName.length < GAME_NUMBER.minCarNameLength ||
        carName.length > GAME_NUMBER.maxCarNameLength
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
    carNames.forEach((carName) => {
      if (regex.test(carName)) throw new Error(ERROR_MESSAGE.onlyAlphabet);
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

  isNumber(attempt) {
    return !Number.isNaN(attempt);
  },

  isInteger(attempt) {
    return Number.isInteger(attempt);
  },

  onlyInt(attempt) {
    if (!Validation.isNumber(attempt) || !Validation.isInteger(attempt)) {
      throw new Error(ERROR_MESSAGE.onlyInt);
    }
  },

  attempt(attempts) {
    this.onlyInt(attempts);
    this.attemptRange(attempts);
  },
};

module.exports = Validation;
