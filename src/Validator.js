const { Settings, Messages } = require('./Config');

const Validator = {
  invalidCarNames(input) {
    Validator.carNameLength(input);
  },

  carNameLength(input) {
    input.forEach((carName) => {
      if (
        carName.length < Settings.MIN_NAME_LENGTH
        || carName.length > Settings.MAX_NAME_LENGTH
      ) {
        throw new Error(Messages.ERROR_CAR_NAME);
      }
    });
  },

  invalidAttempts(attempts) {
    Validator.notNumber(attempts);
    Validator.bigNumber(Number(attempts));
    Validator.notInteger(Number(attempts));
  },

  notNumber(attempts) {
    if (!/^\d+$/g.test(attempts)) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },

  bigNumber(attempts) {
    if (attempts > Settings.MAX_ATTEMPTS || attempts < Settings.MIN_ATTEMPTS) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },

  notInteger(attempts) {
    if (attempts % 1 !== 0) {
      throw new Error(Messages.ERROR_ATTRMPTS);
    }
  },
};

module.exports = Validator;
