const { Settings, Messages } = require('../Config');

const Validator = {
  validateCarNames(carNameList) {
    carNameList.forEach((carName) => {
      this.validateNumberRange(carName.length, Settings.MIN_NAME_LENGTH, Settings.MAX_NAME_LENGTH);
    });
  },

  validateAttempts(value) {
    this.validateNumber(value);
    this.validateNumberRange(Number(value), Settings.MIN_ATTEMPTS, Settings.MAX_ATTEMPTS);
  },

  validateNumber(value) {
    const positiveIntegerFormat = /^\+?\d+$/;
    if (!positiveIntegerFormat.test(value)) {
      throw new Error(Messages.ERROR_NUMBER);
    }
  },

  validateNumberRange(value, min, max) {
    if (value < min || value > max) {
      throw new Error(Messages.ERROR_RANGE);
    }
  },
};

module.exports = Validator;
