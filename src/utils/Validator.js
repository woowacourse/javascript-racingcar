const Validator = {
  validCarNameLengthRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error('이름은 1자이상 5자이하여야 합니다.\n');
    }
  },

  validCarNameRule(carName) {
    const regex = /^[가-힣a-zA-Z\s]*$/;
    if (!regex.test(carName)) {
      throw new Error('이름은 한글 또는 영어여야 합니다.\n');
    }
  },

  validRoundCountExist(count) {
    if (count === '') {
      throw new Error('이동횟수는 입력되어야 합니다.\n');
    }
  },

  validRoundCountRule(count) {
    const countValueToNumber = Number(count);

    if (!Number.isInteger(countValueToNumber)) {
      throw new Error('이동횟수는 정수여야 합니다.\n');
    }
  },

  validRoundCountRange(count) {
    const countValueToNumber = Number(count);

    if (countValueToNumber < 1 || countValueToNumber > 10) {
      throw new Error('이동횟수는 1이상 10이하여야 합니다.\n');
    }
  },

  validCarNameDuplicate(cars) {
    const uniqueCarNames = new Set();
    cars.forEach((car) => {
      uniqueCarNames.add(car.getName());
    });

    if (uniqueCarNames.size !== cars.length) {
      throw new Error('차 이름은 중복되지 않아야 합니다.');
    }
  },
};

export default Validator;
