import { NAME_DELIMITER, ERROR_MESSAGE, VALIDATOR } from '../constants';

const Validator = {
  checkName(input) {
    if (input.includes(' ')) {
      throw new Error(ERROR_MESSAGE.blank);
    }
    if (input[input.length - 1] === NAME_DELIMITER) {
      throw new Error(ERROR_MESSAGE.lastComma);
    }
  },
  checkDuplicate(input) {
    const value = input.split(NAME_DELIMITER);
    if (new Set(value).size !== value.length) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
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
