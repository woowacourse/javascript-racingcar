import { NAME_DELIMITER, ERROR_MESSAGE, VALIDATOR } from '../constants/index.js';

const Validator = {
  checkBlank(input) {
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.blank);
    }
  },
  checkLastComma(input) {
    if (input[input.length - 1] === NAME_DELIMITER) {
      throw new Error(ERROR_MESSAGE.lastComma);
    }
  },
  checkNameLength(input) {
    if (input.split(NAME_DELIMITER).some((name) => name.length === 0)) {
      throw new Error(ERROR_MESSAGE.nameLength);
    }
  },
  checkDuplicate(input) {
    const value = input.split(NAME_DELIMITER);
    if (new Set(value).size !== value.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  },
  checkNames(input) {
    this.checkBlank(input);
    this.checkLastComma(input);
    this.checkNameLength(input);
    this.checkDuplicate(input);
  },
  checkIntegerNumber(input) {
    input.split('').forEach((char) => {
      if (!VALIDATOR.integerString.includes(char)) {
        throw new Error(ERROR_MESSAGE.notInteger);
      }
    });
  },
};

export default Validator;
