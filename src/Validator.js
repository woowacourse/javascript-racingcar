const { ERROR_MESSAGE, REGEX } = require('./constants');

const Validator = {
  validateName: (names) => {
    names.forEach((name) => {
      if (!REGEX.CAR_NAME.test(name)) {
        throw new Error(ERROR_MESSAGE.INVALID_NAME);
      }
    });
    if (names.length !== [...new Set(names)].length) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
  },

  validateTryCnt: (inputValue) => {
    if (!REGEX.TRY_CNT.test(inputValue)) {
      throw new Error(ERROR_MESSAGE.INVALID_NUMBER);
    }
  },
};

module.exports = { Validator };
