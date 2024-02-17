import { CONFIG, ERROR_MESSAGE } from '../../constants';

const turnCountValidator = {
  validateTurnCount(turnCountInput) {
    const turnCount = parseFloat(turnCountInput);

    this.validateNumber(turnCount);
    this.validateFloatNumber(turnCount);
    this.validateNaturalNumber(turnCount);
  },

  validateFloatNumber(turnCount) {
    if (!Number.isInteger(turnCount)) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_FLOAT_NUMBER);
    }
  },

  validateNumber(turnCount) {
    if (Number.isNaN(turnCount)) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NUMBER);
    }
  },

  validateNaturalNumber(turnCount) {
    if (turnCount < CONFIG.MIN_TURN_COUNT) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NATURAL_NUMBER);
    }
  },
};

export default turnCountValidator;
