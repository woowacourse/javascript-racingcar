import { ERROR_MESSAGE } from '../constants/Message.js';

const CarValidator = {
  private_validateType(string) {
    const regex = /^[A-Za-z가-힣]{1,5}$/;

    if (!regex.test(string)) {
      throw new Error(`${ERROR_MESSAGE} (이름 형식 오류)`);
    }
  },

  private_validateName(nameArray) {
    nameArray.forEach((name) => {
      this.private_validateType(name);
    });
  },

  private_validateComma(string, nameArray) {
    const commaCount = (string.match(/,/g) || []).length;
    const { length } = nameArray;

    if (length >= 1 && nameArray.length - 1 !== commaCount) {
      throw new Error(`${ERROR_MESSAGE} (쉼표 오류)`);
    }
  },

  private_validateDuplicate(nameArray) {
    if (nameArray.length >= 2 && new Set(nameArray).size !== nameArray.length) {
      throw new Error(`${ERROR_MESSAGE} (이름 중복 오류)`);
    }
  },

  private_validateNumberOfCars(nameArray) {
    const { length } = nameArray;
    const pass = length >= 1 && length <= 5;

    if (!pass) {
      throw new Error(`${ERROR_MESSAGE} (참여할 수 자동차 개수 오류)`);
    }
  },

  validate(string) {
    const nameArray = string.split(',');

    this.private_validateComma(string, nameArray);
    this.private_validateDuplicate(nameArray);
    this.private_validateNumberOfCars(nameArray);
    this.private_validateName(nameArray);
  },
};

export default CarValidator;
