import { MIN_NAME_LENGTH, MAX_NAME_LENGTH, MIN_NAME_COUNT, MIN_CAR_COUNT, MAX_CAR_COUNT, MIN_COMMA_COUNT, ERROR_MESSAGE } from '../constants/index.js';


const CarValidator = {
  private_confirmType(string) {    
    const regex = new RegExp(`^[A-Za-z가-힣]{${MIN_NAME_LENGTH},${MAX_NAME_LENGTH}}$`);

    if (!regex.test(string)) {
      throw new Error(`${ERROR_MESSAGE} (이름 형식 오류)`);
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

    if (length >= MIN_COMMA_COUNT && nameArray.length - MIN_NAME_COUNT !== commaCount) {
      throw new Error(`${ERROR_MESSAGE} (쉼표 오류)`);
    }
  },

  private_confirmDuplicate(nameArray) {
    if (nameArray.length >= MIN_CAR_COUNT && new Set(nameArray).size !== nameArray.length) {
      throw new Error(`${ERROR_MESSAGE} (이름 중복 오류)`);
    }
  },

  private_confirmNumberOfCars(nameArray) {
    const { length } = nameArray;
    const pass = length > MIN_CAR_COUNT && length <= MAX_CAR_COUNT;

    if (!pass) throw new Error(`${ERROR_MESSAGE} (참여할 수 자동차 개수 오류)`);
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