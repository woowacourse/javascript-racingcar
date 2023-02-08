const { Settings, Messages } = require('./Config');
const Console = require('./UI/Console');

const Validator = {
  invalidCarNames(input) {
    try {
      Validator.carNameLength(input);
      return false;
    } catch (error) {
      Console.print(error);
      return true;
    }
  },

  carNameLength(input) {
    input.forEach((carName) => {
      if (carName.length < Settings.MIN_NAME_LENGTH || carName.length > Settings.MAX_NAME_LENGTH) {
        throw new Error(Messages.ERROR_CAR_NAME);
      }
    });
  }
};

module.exports = Validator;
