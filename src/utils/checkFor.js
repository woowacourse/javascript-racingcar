const { REGEX } = require('../constant/regex');

const checkForString = {
  isInLengthLimit: (input, limit) => input.length >= 1 && input.length <= limit,
  isValidString: (input) => REGEX.carName.test(input),
  isNumber: (input) => REGEX.onlyNumbers.test(input),
};

module.exports = checkForString;
