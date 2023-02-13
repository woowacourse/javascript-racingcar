import { MESSAGE } from '../util/Constant.js';

const Validator = {
  carName(string) {
    const names = string.split(',');

    if (!this.isVaildCarNameExist(names))
      throw new Error('[ERROR] 자동차 이름은 존재하지 않습니다.');

    if (!this.isValidCarNameSpacing(string))
      throw new Error(MESSAGE.error.blank);

    if (!this.isValidCarNameLength(names))
      throw new Error(MESSAGE.error.nameLength);

    if (!this.isValidCarNameCharacter(names))
      throw new Error(MESSAGE.error.lowerCase);

    if (!this.isValidCarNameDuplicated(names))
      throw new Error(MESSAGE.error.duplicatedName);
  },

  tryCount(number) {
    if (!this.isValidTryCountNumeric(number))
      throw new Error(MESSAGE.error.numeric);
  },

  isVaildCarNameExist(names) {
    return names.every((name) => name !== '');
  },

  isValidCarNameSpacing(string) {
    return string.search(/\s/g) === -1;
  },

  isValidCarNameLength(names) {
    return names.every((name) => name.length <= 5);
  },

  isValidCarNameCharacter(names) {
    return names.every((name) => {
      return name.search(/[^a-z]/g) === -1;
    });
  },

  isValidCarNameDuplicated(names) {
    if (names.length === new Set(names).size) return true;
  },

  isValidTryCountNumeric(number) {
    if (number === '0') return false;

    return number.search(/[^0-9]/g) === -1;
  },
};

export default Validator;
