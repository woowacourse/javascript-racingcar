const utils = require("../Utils/Utils");

const hasError = (validator, callback) => {
  try {
    validator();
  } catch (error) {
    utils.print(error);
    callback();
    return true;
  }
  return false;
};

module.exports = { hasError };
