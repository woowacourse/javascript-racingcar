const {
  VALID_CHARACTER_REGEX,
  VALID_INTEGER_REGEX,
  ERROR_MESSAGE,
} = require('../constants/validation');

const Validator = {
  validateNameInput(nameInput) {
    if (!this.hasValidCharacter(nameInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }
  },

  hasValidCharacter(nameInput) {
    return VALID_CHARACTER_REGEX.test(nameInput);
  },

  validateTryCountsInput(tryCountsInput) {
    if (!this.isTryCountsInputValid(tryCountsInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_TRY_COUNT);
    }
  },

  isTryCountsInputValid(tryCountsInput) {
    return VALID_INTEGER_REGEX.test(tryCountsInput);
  },
};

module.exports = Validator;
