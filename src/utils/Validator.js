const { ERROR_MESSAGE } = require('./constants');

const validator = {
  validateLength(names) {
    names.forEach((name) => {
      if (name.length < 1 || name.length > 5) throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    });
  },

  validateOverlap(names) {
    const set = new Set(names);
    if (names.length !== set.size) throw new Error(ERROR_MESSAGE.NAME_OVERLAP);
  },

  validateKorEngNum(names) {
    const KOR_ENG_NUM_REGEXP = /^[가-힣|a-z|A-Z|0-9|]+$/;
    names.forEach((name) => {
      if (!KOR_ENG_NUM_REGEXP.test(name)) throw new Error(ERROR_MESSAGE.NAME_ONLY_KOR_ENG_NUM);
    });
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
