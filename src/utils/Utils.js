const { StaticValue } = require('../constants/constants');

const Utils = {
  haskWhiteSpace(input) {
    return StaticValue.REGEX_WHITESPACE.test(input);
  },
};

module.exports = Utils;
