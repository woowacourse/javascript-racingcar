const {
  VALID_CHARACTER_REGEX,
  VALID_INTEGER_REGEX,
  ERROR_MESSAGE,
  MAX_CARNAME_LENGTH,
} = require('../constants/validation');

const Validator = {
  validateNameInput(nameInput) {
    if (!this.hasValidCharacter(nameInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }

    if (!this.isValidCarNameLength(nameInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  },

  hasValidCharacter(nameInput) {
    return VALID_CHARACTER_REGEX.test(nameInput);
  },

  isValidCarNameLength(nameInput) {
    const splittedNames = nameInput.split(',');

    for (let singleName of splittedNames) {
      if (singleName.length > MAX_CARNAME_LENGTH || singleName.length <= 0) return false;
    }

    return true;
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
