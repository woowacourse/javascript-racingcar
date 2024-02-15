import { ERROR_MESSAGE } from '../constants/Message.js';

const CarValidator = {
  private_confirmType(string) {
    const regex = /^[A-Za-z가-힣]{1,5}$/;

    if (!regex.test(string)) {
      throw new Error(ERROR_MESSAGE);
    }
  },

  private_confirmName(nameArray) {
    nameArray.forEach((name) => {
      this.private_confirmType(name);
    });
  },

  private_confirmComma(string, nameArray) {
    const commaCount = (string.match(/,/g) || []).length;
    const { length } = nameArray;

    if (length >= 1 && nameArray.length - 1 !== commaCount) {
      throw new Error(ERROR_MESSAGE);
    }
  },

  private_confirmDuplicate(nameArray) {
    if (nameArray.length >= 2 && new Set(nameArray).size !== nameArray.length) {
      throw new Error(ERROR_MESSAGE);
    }
  },

  private_confirmNumberOfCars(nameArray) {
    const { length } = nameArray;
    const pass = length >= 1 && length <= 5;

    if (!pass) throw new Error(ERROR_MESSAGE);
  },

  confirm(string) {
    const nameArray = string.split(',');

    this.private_confirmComma(string, nameArray);
    this.private_confirmDuplicate(nameArray);
    this.private_confirmNumberOfCars(nameArray);
    this.private_confirmName(nameArray);
  },
};

export default CarValidator;
