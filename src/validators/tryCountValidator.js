// TODO

// 1. 정수형 숫자인지
// 2. 음수, 실수

const tryCountValidator = {
  isNumeric(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new Error('[ERROR] 1');
    }
  },

  isPositive(tryCount) {
    if (tryCount <= 0) {
      throw new Error('[ERROR] 2');
    }
  },

  validate(tryCount) {
    const convertToNumber = Number(tryCount);
    this.isNumeric(convertToNumber);
    this.isPositive(convertToNumber);
  },
};

export default tryCountValidator;
