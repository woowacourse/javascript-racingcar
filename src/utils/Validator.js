const { ERROR_MESSAGE } = require('./constants');

const validator = {
  validateLength(name) {
    if (name.length < 1 || name.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH);
  },

  validateKorEngNum(name) {
    const KOR_ENG_NUM_REGEXP = /^[가-힣|a-z|A-Z|0-9|]+$/;
    if (!KOR_ENG_NUM_REGEXP.test(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_KOR_ENG_NUM);
  },

  validateOverlap(names) {
    const set = new Set(names);
    if (names.length !== set.size) throw new Error(ERROR_MESSAGE.NAME_OVERLAP);
  },

  validateNumericInput(tryCount) {
    const NUMBER_REGEXP = /^[0-9]+$/;
    if (!NUMBER_REGEXP.test(tryCount)) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  },

  validatePositiveNumber(tryCount) {
    if (Number(tryCount) <= 0) throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
  },
};

module.exports = validator;
