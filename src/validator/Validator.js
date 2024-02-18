import CONFIG from '../constant/config';
import { ERROR_MESSAGE } from '../constant/message';

const Validator = {
  validateCarNameList(carNameList) {
    this.validateCarNameListLength(carNameList.length);
    carNameList.forEach((carName) => {
      this.validateCarNameLength(carName.length);
    });
  },

  validateTurnCount(turnCountInput) {
    this.validateNumber(turnCountInput);
    this.validateFloatNumber(turnCountInput);
    this.validateNaturalNumber(turnCountInput);
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

  validateFloatNumber(turnCountInput) {
    const turnCount = parseFloat(turnCountInput, 10);
    if (!Number.isInteger(turnCount)) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_NOT_INTEGER);
    }
  },

  validateNumber(turnCountInput) {
    const turnCount = parseFloat(turnCountInput, 10);
    if (Number.isNaN(turnCount)) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NUMBER);
    }
  },

  validateNaturalNumber(turnCountInput) {
    const turnCount = parseFloat(turnCountInput, 10);
    if (turnCount < CONFIG.MIN_TURN_COUNT) {
      throw new Error(ERROR_MESSAGE.TURN_COUNT_IS_NOT_NATURAL_NUMBER);
    }
  },
};

export default Validator;
