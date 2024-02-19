import { CONFIG, ERROR_MESSAGE } from '../../constants';

const carValidator = {
  validateCarNameList(carNameList) {
    this.validateCarNameListLength(carNameList.length);
    carNameList.forEach((carName) => {
      this.validateCarNameLength(carName.length);
    });
  },

  validateCarNameListLength(length) {
    if (!this.isValidCarNameListLength(length)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LIST_LENGTH);
    }
  },

  validateCarNameLength(length) {
    if (!this.isValidCarNameLength(length)) {
      throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    }
  },

  isValidCarNameListLength(length) {
    return length >= CONFIG.MIN_CAR_NAME_LIST_LENGTH;
  },

  isValidCarNameLength(length) {
    return CONFIG.MIN_CAR_NAME_LENGTH <= length && length <= CONFIG.MAX_CAR_NAME_LENGTH;
  },
};

export default carValidator;
