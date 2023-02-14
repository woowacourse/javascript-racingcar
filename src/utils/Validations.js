const Constants = require('../Constants');

const Validations = {
  isCarNameUnderMax(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length > Constants.CAR_NAME_MAX) {
        return false;
      }
    }
    return true;
  },

  isCarNameOverMin(carNames) {
    for (let i = 0; i < carNames.length; i++) {
      if (carNames[i].length <= Constants.CAR_NAME_MIN) {
        return false;
      }
    }
    return true;
  },

  isCorrectRoundNumber(num) {
    if (!Number.isInteger(num) || num <= 0) {
      return false;
    }
    return true;
  },
};

module.exports = Validations;
