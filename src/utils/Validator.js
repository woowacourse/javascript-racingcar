const { ERROR_MESSAGE, REGEXP, WORD_MIN_LENGTH, WORD_MAX_LENGTH } = require('./constants');

class Validator {
  static validateLength(names) {
    names.forEach((name) => {
      if (name.length < 1 || name.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH(WORD_MIN_LENGTH, WORD_MAX_LENGTH));
    });
  }

  static validateOverLap(names) {
    const set = new Set(names);
    if (names.length !== set.size) throw new Error(ERROR_MESSAGE.NAME_OVERLAP);
  }

  static validateInvalidInput(names) {
    const ALPHA_REGEXP = REGEXP.ALPHA_REGEXP;
    names.forEach((name) => {
      if (!ALPHA_REGEXP.test(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_ALPHABET);
    });
  }

  static validateNumericInput(tryCount) {
    const NUMBER_REGEXP = REGEXP.NUMBER_REGEXP;
    if (!NUMBER_REGEXP.test(tryCount)) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }

  static validatePositiveNumber(tryCount) {
    if (Number(tryCount) <= 0) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
}

module.exports = Validator;
