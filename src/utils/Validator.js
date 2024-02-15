const Validator = {
  isValidCarNameLengthRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error('이름은 1자이상 5자이하여야 합니다.\n');
    }
  },

  isValidCarNameRule(carName) {
    const regex = /^[가-힣a-zA-Z\s]*$/;
    if (!regex.test(carName)) {
      throw new Error('이름은 한글 또는 영어여야 합니다.\n');
    }
  },

  isValidRoundCountExist(count) {
    if (count === '') {
      throw new Error('이동횟수는 입력되어야 합니다.\n');
    }
  },

  isValidRoundCountRule(count) {
    const countValueToNumber = Number(count);

    if (!Number.isInteger(countValueToNumber)) {
      throw new Error('이동횟수는 정수여야 합니다.\n');
    }
  }
};

export default Validator;
