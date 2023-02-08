const { ErrorMessage, StaticValue } = require("../constants/Constants.js");

const Exception = {
  checkCarInput(input) {
    this.checkInputLength(input);
    this.checkDuplicateInput(input);
  },

  checkWhiteSpace(input) {
    return StaticValue.REGEX_WHITESPACE.test(input);
  },

  checkInputLength(input) {
    for (let i = 0; i < input.length; i += 1) {
      if (
        input[i].length > StaticValue.CAR_NAME_LIMIT ||
        this.checkWhiteSpace(input[i])
      ) {
        throw new Error(ErrorMessage.NAME_INPUT);
      }
    }
  },

  checkDuplicateInput(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ErrorMessage.NAME_DUPLICATION);
    }
  },

  checkMoveCountInput(input) {
    if (isNaN(input) || Number(input) <= 0 || this.checkWhiteSpace(input))
      throw new Error(ErrorMessage.MOVE_INPUT);
  },
};

module.exports = Exception;
