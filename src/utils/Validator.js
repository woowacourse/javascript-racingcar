import { NAME_DELIMITER, ERROR_MESSAGE } from '../Template/index.js';

const InputValidator = {
  checkHasWhitespace(input) {
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.blank);
    }
  },
  checkHasLastComma(input) {
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
    this.checkHasWhitespace(input);
    this.checkHasLastComma(input);
    this.checkNameLength(input);
    this.checkDuplicate(input);
  },
  checkIntegerNumber(number) {
    if (!Number.isInteger(Number(number))) {
      throw new Error(ERROR_MESSAGE.notInteger);
    }
  },
};

export default InputValidator;
