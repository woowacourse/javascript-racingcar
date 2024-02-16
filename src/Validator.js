import CONFIG from './constants/config';
import { ERROR_MESSAGE } from './constants/message';

const Validator = {
  validateCarNameList(carNameList) {
    this.validateCarNameListLength(carNameList.length);
    carNameList.forEach((carName) => {
      this.validateCarNameLength(carName.length);
    });
  },

  validateTurnCount(turnCountInput) {
    const turnCount = parseFloat(turnCountInput);

    this.validateNumber(turnCount);
    this.validateFloatNumber(turnCount);
    this.validateNaturalNumber(turnCount);
  },

  validateCarNameListLength(length) {
    if (length < CONFIG.MIN_CAR_NAME_LIST_LENGTH) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LIST_LENGTH);
    }
  },

  validateCarNameLength(length) {
    if (length < CONFIG.MIN_CAR_NAME_LENGTH || length > CONFIG.MAX_CAR_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }
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

export default Validator;
