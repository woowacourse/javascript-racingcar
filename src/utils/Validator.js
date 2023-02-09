const Validator = {
  VALID_CHARACTER_REGEX: /^[a-z|A-Z|가-힣|,]+$/g,

  validateNameInput(nameInput) {
    // 영어랑 한글 콤마
    if (!this.hasValidCharacter(nameInput)) {
      throw new Error('invalid character');
    }
  },

  hasValidCharacter(nameInput) {
    return this.VALID_CHARACTER_REGEX.test(nameInput);
  },
  },
};

module.exports = Validator;
