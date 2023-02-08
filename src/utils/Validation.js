const Validation = {
  isValidCarNames(carNames) {
    return carNames.every((name) => name.length > 0 && name.length <= 5);
  },
};
module.exports = Validation;
