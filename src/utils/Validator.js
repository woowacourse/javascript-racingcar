const Validator = {
  isValidCarNameLengthRange(carName) {
    if (carName.length < 1 || carName.length > 5) {
      throw new Error('이름은 1자이상 5자이하여야 합니다.');
    }
  },
};

export default Validator;
