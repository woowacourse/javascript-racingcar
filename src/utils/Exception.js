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
    input.forEach((name) => {
      if (
        name.length > StaticValue.CAR_NAME_LIMIT ||
        this.checkWhiteSpace(name)
      ) {
        throw new Error(ErrorMessage.NAME_INPUT);
      }
    });
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
};

module.exports = Exception;
