const { MIN_CAR_NAME_LENGTH, MAX_CAR_NAME_LENGTH } = require("../constants/value");

const Validation = {
  isValidCarNames(carNames) {
    return carNames.every((name) => name.length >= MIN_CAR_NAME_LENGTH && name.length <= MAX_CAR_NAME_LENGTH);
  },

  isValidTryCount(tryCount) {
    return Number.isInteger(tryCount) && tryCount > 0;
  },
};
module.exports = Validation;
