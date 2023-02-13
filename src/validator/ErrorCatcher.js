const Utils = require("../util/Utils");

const errorCatcher = (validator, readInput, acceptValidInput) => {
  try {
    validator();
    acceptValidInput();
  } catch (error) {
    Utils.print(error);
    readInput();
  }
};

module.exports = errorCatcher;
