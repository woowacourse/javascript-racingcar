const TryCountInputValidator = {
  VALID_INTEGER_REGEX: /^[1-9]\d*$/,

  validate(tryCountInput) {
    if (!this.isValidTryCount(tryCountInput)) {
      throw Error('[ERROR] 양의 정수가 아닌 값이 입력되었습니다. 다시 입력해 주세요.');
    }
  },

  isValidTryCount(tryCountInput) {
    return this.VALID_INTEGER_REGEX.test(tryCountInput);
  },
};

module.exports = TryCountInputValidator;
