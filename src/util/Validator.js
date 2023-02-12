const { Settings, Messages } = require('../Config');

const Validator = {
  validateCarNames(carNameList) {
    carNameList.forEach((carName) => {
      this.numberInRange(carName.length, Settings.MIN_NAME_LENGTH, Settings.MAX_NAME_LENGTH);
    });
  },

  validateAttempts(value) {
    this.isNumber(value);
    this.numberInRange(Number(value), Settings.MIN_ATTEMPTS, Settings.MAX_ATTEMPTS);
  },

  isNumber(value) {
    const positiveIntegerFormat = /^\+?\d+$/;
    if (!positiveIntegerFormat.test(value)) {
      throw new Error(Messages.ERROR_NUMBER);
    }
  },

  numberInRange(value, min, max) {
    if (value < min || value > max) {
      throw new Error(Messages.ERROR_RANGE);
    }
  },
};

module.exports = Validator;
