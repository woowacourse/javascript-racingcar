const Validator = {
  validateCarNameList(carNameList) {
    this.validateCarNameListLength(carNameList.length);
    carNameList.forEach((carName) => {
      this.validateCarNameLength(carName.length);
    });
  },

  validateTurnCount(turnCountInput) {
    const turnCount = parseFloat(turnCountInput, 10);
    this.validateFloatNumber(turnCount);
    this.validateNumber(turnCount);
    this.validateNaturalNumber(turnCount);
  },

  validateCarNameListLength(length) {
    if (length <= 1) {
      throw new Error('[ERROR] 자동차 목록은 2대 이상 입력해주세요.');
    }
  },

  validateCarNameLength(length) {
    if (length === 0 || length > 5) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
    }
  },

  validateFloatNumber(turnCount) {
    if (!Number.isInteger(turnCount)) {
      throw new Error('[ERROR] 시도할 횟수는 실수로 입력할 수 없습니다. 다시 입력해주세요.');
    }
  },

  validateNumber(turnCount) {
    if (Number.isNaN(turnCount)) {
      throw new Error('[ERROR] 시도할 횟수는 숫자로만 입력해주세요.');
    }
  },

  validateNaturalNumber(turnCount) {
    if (turnCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 1 이상의 자연수로만 입력해주세요.');
    }
  },
};

export default Validator;
