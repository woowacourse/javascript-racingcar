const CarValidator = require('./CarValidator');
const Outputs = require('../view/Outputs');

const InputsValidator = {
  readCarName(names, { onError: errorCallback }) {
    try {
      return CarValidator.checkName(names);
    } catch (error) {
      Outputs.printError(error);
      return errorCallback({ onError: errorCallback });
    }
  },

  readTryCount(count, { onError: errorCallback }) {
    try {
      return CarValidator.checkTryCount(count);
    } catch (error) {
      Outputs.printError(error);
      return errorCallback({ onError: errorCallback });
    }
  },
};

module.exports = InputsValidator;
