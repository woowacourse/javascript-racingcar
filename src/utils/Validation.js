const Validation = {
  isValidCarNames(carNames) {
    return carNames.every((name) => name.length > 0 && name.length <= 5);
  },

  isValidTryCount(tryCount) {
    return Number.isInteger(tryCount) && tryCount > 0;
  },
};
module.exports = Validation;
