const { ErrorMessage, StaticValue } = require('../constants/constants');
const Utils = require('./Utils');

const Exception = {
  checkCarInput(input) {
    this.checkInputLength(input);
    this.checkInputNaming(input);
    this.checkDuplicateInput(input);
  },

  checkInputLength(input) {
    input.forEach((name) => {
      if (name.length > StaticValue.CAR_NAME_LIMIT || Utils.hasWhiteSpace(name)) {
        throw new Error(ErrorMessage.NAME_INPUT);
      }
    });
  },

  checkInputNaming(input) {
    input.forEach((name) => {
      if (Utils.startsWithDigit(name)) {
        throw new Error(ErrorMessage.NAME_FORMAT);
      }
    });
  },

  checkDuplicateInput(input) {
    if (new Set(input).size !== input.length) {
      throw new Error(ErrorMessage.NAME_DUPLICATION);
    }
  },

  checkMoveCountInput(input) {
    const MOVE_COUNT = input.trim();

    if (Utils.hasNonDigit(MOVE_COUNT) || Number(MOVE_COUNT) <= 0) {
      throw new Error(ErrorMessage.MOVE_INPUT);
    }
  },
};

module.exports = Exception;
