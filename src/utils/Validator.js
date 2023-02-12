const { ERROR_MESSAGE } = require('./constants');

class Validator {
  static validateLength(names) {
    names.forEach((name) => {
      if (name.length < 1 || name.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    });
  }

  static validateOverlap(names) {
    const set = new Set(names);
    if (names.length !== set.size) throw new Error(ERROR_MESSAGE.NAME_OVERLAP);
  }

  static validateInvalidInput(names) {
    names.forEach((name) => {
      if (!Validator.validateKorEngNum(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_KOR_ENG_NUM);
    });
  }

  static validateKorEngNum(names) {
    const KOR_ENG_NUM_REGEXP = /^[가-힣|a-z|A-Z|0-9|]+$/;
    names.forEach((name) => {
      if (!KOR_ENG_NUM_REGEXP.test(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_KOR_ENG_NUM);
    });
  }

  static validateNumericInput(tryCount) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    if (!NUMBER_REGEXP.test(tryCount)) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }

  static validatePositiveNumber(tryCount) {
    if (Number(tryCount) <= 0) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  }
}

module.exports = Validator;
