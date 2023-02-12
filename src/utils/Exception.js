const { ErrorMessage, StaticValue } = require('../constants/constants');
const Utils = require('./Utils');

const Exception = {
  checkCarInput(input) {
    this.checkInputLength(input);
    this.checkDuplicateInput(input);
  },

  checkInputLength(input) {
    input.forEach((name) => {
      if (name.length > StaticValue.CAR_NAME_LIMIT || Utils.hasWhiteSpace(name)) {
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
    if (isNaN(input) || input <= 0) {
      throw new Error(ErrorMessage.MOVE_INPUT);
    }
  },
};

module.exports = Exception;
