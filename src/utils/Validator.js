import { NAME_DELIMITER, ERROR_MESSAGE, VALIDATOR } from '../Template/index.js';

const Validator = {
  checkInputHasBlank(input) {
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.blank);
    }
  },
  checkInputHasLastComma(input) {
    if (input[input.length - 1] === NAME_DELIMITER) {
      throw new Error(ERROR_MESSAGE.lastComma);
    }
  },
  checkInputNameLength(input) {
    if (input.split(NAME_DELIMITER).some((name) => name.length === 0)) {
      throw new Error(ERROR_MESSAGE.nameLength);
    }
  },
  checkInputDuplicate(input) {
    const value = input.split(NAME_DELIMITER);
    if (new Set(value).size !== value.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  },
  checkNames(input) {
    this.checkInputHasBlank(input);
    this.checkInputHasLastComma(input);
    this.checkInputNameLength(input);
    this.checkInputDuplicate(input);
  },
  checkIntegerNumber(number) {
    if (!Number.isInteger(Number(number))) {
      throw new Error(ERROR_MESSAGE.notInteger);
    }
  },
};

export default Validator;
