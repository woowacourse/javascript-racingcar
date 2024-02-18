const CustomError = require('./customError.js');

const throwErrorIfFalse = (validateResult, errorMessage) => {
  if (!validateResult) {
    throw new CustomError(errorMessage);
  }
};

module.exports = throwErrorIfFalse;
