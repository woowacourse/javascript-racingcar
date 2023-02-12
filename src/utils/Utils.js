const { StaticValue } = require('../constants/constants');

const Utils = {
  hasWhiteSpace(input) {
    return StaticValue.REGEX_WHITESPACE.test(input);
  },

  hasNonDigit(input) {
    return StaticValue.REGEX_NON_DIGIT.test(input);
  },

  generateRandomNumber() {
    return Math.floor(Math.random() * StaticValue.RANDOM_NUMBER_LIMIT);
  },
};

module.exports = Utils;
