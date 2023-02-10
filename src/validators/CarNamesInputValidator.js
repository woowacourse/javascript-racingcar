const CarNamesInputValidator = {
  VALID_CHARACTER_REGEX: /^[a-zA-Z가-힣,]+$/,
  MAX_CARNAME_LENGTH: 5,

  validate(carNamesInput) {
    if (!this.hasOnlyValidCharacters(carNamesInput)) {
      throw Error(
        '[ERROR] 영어, 한글, 쉼표(,)가 아닌 문자가 입력되었습니다. 다시 입력해 주세요.',
      );
    }

    if (!this.hasOnlyValidCarNames(carNamesInput.split(','))) {
      throw Error(
        '[ERROR] 자동차 이름은 1자 이상, 5자 이하여야 합니다. 다시 입력해 주세요.',
      );
    }
  },

  hasOnlyValidCharacters(carNamesInput) {
    return this.VALID_CHARACTER_REGEX.test(carNamesInput);
  },

  hasOnlyValidCarNames(carNames) {
    return carNames.every((carName) => this.isValidCarNameLength(carName.length));
  },

  isValidCarNameLength(carNameLength) {
    return 0 < carNameLength && carNameLength <= this.MAX_CARNAME_LENGTH;
  },
};

module.exports = CarNamesInputValidator;
