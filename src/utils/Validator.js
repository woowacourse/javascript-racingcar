const Validator = {
  INVALID_CHARACTER_REGEX: /[^a-z|^A-Z|^가-힣|,]/g,

  validateNameInput(nameInput) {
    // 영어랑 한글 콤마
    if (this.hasInvalidCharacter(nameInput)) {
      throw new Error('invalid character');
    }
  },

  hasInvalidCharacter(nameInput) {
    return this.INVALID_CHARACTER_REGEX.test(nameInput);
  },
};

module.exports = Validator;
