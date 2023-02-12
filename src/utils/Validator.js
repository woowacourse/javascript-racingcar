const { ERROR_MESSAGE, REGEXP, WORD_MIN_LENGTH, WORD_MAX_LENGTH } = require('./constants');

const Validator = {
  validateLength(names) {
    names.forEach((name) => {
      if (name.length < 1 || name.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH(WORD_MIN_LENGTH, WORD_MAX_LENGTH));
    });
  },

  validateOverLap(names) {
    const set = new Set(names);
    if (names.length !== set.size) throw new Error(ERROR_MESSAGE.NAME_OVERLAP);
  },

  validateInvalidInput(names) {
    names.forEach((name) => {
      if (!REGEXP.ALPHA_REGEXP.test(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_ALPHABET);
    });
  },

  validateNumericInput(tryCount) {
    if (!REGEXP.NUMBER_REGEXP.test(tryCount)) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  },

  validatePositiveNumber(tryCount) {
    if (Number(tryCount) <= 0) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  },
};

module.exports = Validator;
