import { CONFIG, ERROR_MESSAGE } from '../constants';

const carValidator = {
  validateCarNameList(carNameList) {
    this.validateCarNameListLength(carNameList.length);
    carNameList.forEach((carName) => {
      this.validateCarNameLength(carName.length);
    });
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
};

export default carValidator;
