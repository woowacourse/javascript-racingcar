const {
  VALID_CHARACTER_REGEX,
  VALID_INTEGER_REGEX,
  ERROR_MESSAGE,
} = require('../constants/validation');
const { MAX_CARNAME_LENGTH } = require('../constants/numbers');

const Validator = {
  validateNameInput(nameInput) {
    if (!this.hasValidCharacter(nameInput)) {
      throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
    }

    nameInput.split(',').forEach((name) => {
      if (!this.isValidCarNameLength(name)) {
        throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
      }
    });
  },

  hasValidCharacter(nameInput) {
    return VALID_CHARACTER_REGEX.test(nameInput);
  },

  isValidCarNameLength(name) {
    return name.length <= MAX_CARNAME_LENGTH && name.length > 0;
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
