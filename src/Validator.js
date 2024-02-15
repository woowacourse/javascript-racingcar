const Validator = {
  validateCarNameList(carNameList) {
    if (carNameList.length <= 1) {
      throw new Error('[ERROR] 자동차 목록은 2대 이상 입력해주세요.');
    }

    carNameList.forEach((carName) => {
      if (carName.length === 0 || carName.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      }
    });
  },
};

export default Validator;
