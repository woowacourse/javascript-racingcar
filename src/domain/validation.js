const { ERROR_MESSAGE, GAME_NUMBER, REG_EXP } = require('../constants');

const validation = {
  carName: (carNames) => {
    validation.duplicatedCarName(carNames);
    validation.carNameLengthRange(carNames);
    validation.carCountRange(carNames.length);
    validation.onlyAlphabet(carNames);
  },
  attempt: (attempts) => {
    validation.onlyInt(attempts);
    validation.attemptRange(attempts);
  },
  attemptRange: (attempt) => {
    if (attempt < GAME_NUMBER.minAttempt || attempt > GAME_NUMBER.maxAttempt) {
      throw new Error(ERROR_MESSAGE.attemptRange);
    }
  },
  isNotNumber: (attempt) => {
    const parsedNumber = parseInt(attempt);
    return Number.isNaN(parsedNumber);
  },
  isNotInteger: (attempt) => {
    return !Number.isInteger(Number(attempt));
  },
  onlyInt: (attempt) => {
    if (validation.isNotNumber(attempt) || validation.isNotInteger(attempt)) {
      throw new Error(ERROR_MESSAGE.onlyInt);
    }
  },
  carCountRange: (carCount) => {
    if (
      carCount < GAME_NUMBER.minCarCount ||
      carCount > GAME_NUMBER.maxCarCount
    ) {
      throw new Error(ERROR_MESSAGE.carCountRange);
    }
  },
  carNameLengthRange: (carNames) => {
    carNames.forEach((name) => {
      if (
        name.length < GAME_NUMBER.minCarNameLength ||
        name.length > GAME_NUMBER.maxCarNameLength
      ) {
        throw new Error(ERROR_MESSAGE.carNameLengthRange);
      }
    });
  },
  duplicatedCarName: (carNames) => {
    const carNamesLowerCase = carNames.map((name) => {
      return name.toLowerCase();
    });
    const isDulicate =
      new Set(carNamesLowerCase).size !== carNamesLowerCase.length;
    if (isDulicate) {
      throw new Error(ERROR_MESSAGE.duplicatedCarName);
    }
  },
  onlyAlphabet: (carNames) => {
    carNames.forEach((name) => {
      if (REG_EXP.onlyAlphabet.test(name))
        throw new Error(ERROR_MESSAGE.onlyAlphabet);
    });
  },
};

module.exports = validation;
