const { ErrorMessage, StaticValue } = require("../constants/Constants");

const Exception = {
  checkCarInput(input) {
    this.checkInputLength(input);
    this.checkDuplicateInput(input);
  },

  checkWhiteSpace(input) {
    return StaticValue.REGEX_WHITESPACE.test(input);
  },

  checkInputLength(input) {
    if (
      this.isNameLengthSmallerThanLimit(input) ||
      this.isNameIncludesSpace(input)
    ) {
      throw new Error(ErrorMessage.NAME_INPUT);
    }
  },

  checkDuplicateInput(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ErrorMessage.NAME_DUPLICATION);
    }
  },

  checkMoveCountInput(input) {
    if (isNaN(input) || Number(input) <= 0 || this.checkWhiteSpace(input)) {
      throw new Error(ErrorMessage.MOVE_INPUT);
    }
  },

  isNameLengthSmallerThanLimit(input) {
    return input.some((name) => name.length > StaticValue.CAR_NAME_LIMIT);
  },

  isNameIncludesSpace(input) {
    return input.some((name) => this.checkWhiteSpace(name));
  },
};

module.exports = Exception;
