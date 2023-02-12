const utils = require("../Utils/Utils");

const ErrorHandler = ({ validator, nextStep, afterError }) => {
  try {
    validator();
    nextStep();
  } catch (error) {
    utils.print(error);
    afterError();
  }
};

module.exports = ErrorHandler;
