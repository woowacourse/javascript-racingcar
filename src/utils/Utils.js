const { StaticValue } = require('../constants/constants');

const Utils = {
  hasWhiteSpace(input) {
    return StaticValue.REGEX_WHITESPACE.test(input);
  },
  generateRandomNumber() {
    return Math.floor(Math.random() * StaticValue.RANDOM_NUMBER_LIMIT);
  },
};

module.exports = Utils;
