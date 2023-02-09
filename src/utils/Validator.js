const Validator = {
  VALID_CHARACTER_REGEX: /^[a-z|A-Z|가-힣|,]+$/g,
  VALID_INTEGER_REGEX: /^[1-9]\d*$/,

  validateNameInput(nameInput) {
    if (!this.hasValidCharacter(nameInput)) {
      throw new Error('invalid character');
    }
  },

  hasValidCharacter(nameInput) {
    return this.VALID_CHARACTER_REGEX.test(nameInput);
  },

  validateTryCountsInput(tryCountsInput) {
    if (!this.isTryCountsInputValid(tryCountsInput)) {
      throw new Error('invalid tryCountsInput');
    }
  },

  isTryCountsInputValid(tryCountsInput) {
    return this.VALID_INTEGER_REGEX.test(tryCountsInput);
  },
};

module.exports = Validator;
