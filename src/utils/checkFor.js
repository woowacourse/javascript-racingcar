const { REGEX } = require('../constant/regex');

const checkFor = {
  isInLengthLimit: (input, limit) => input.length <= limit,
  isValidString: (input) => REGEX.carName.test(input),
  isNumber: (input) => REGEX.onlyNumbers.test(input),
};

module.exports = checkFor;
