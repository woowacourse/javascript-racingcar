const { ErrorMessage } = require("../constants/Constants.js");

const Exception = {
  checkCarInput(input) {
    this.checkInputLength(input);
    this.checkDuplicateInput(input);
  },

  checkWhiteSpace(input) {
    return /\s|^$/.test(input);
  },

  checkInputLength(input) {
    for (let i = 0; i < input.length; i += 1) {
      if (input[i].length > 5 || this.checkWhiteSpace(input[i])) {
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
    if (isNaN(input) || parseInt(input, 10) <= 0 || this.checkWhiteSpace(input))
      throw new Error(ErrorMessage.MOVE_INPUT);
  },
};

module.exports = Exception;
