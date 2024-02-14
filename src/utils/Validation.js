const Validation = {
  carNamesArrayValidate(carNamesArray) {
    carNamesArray.every((carName) => {
      if (carName.length <= 0 || carName.length > 5) {
        throw new Error(
          '[ERROR] 각 자동차의 이름은 1 ~ 5자 이내로 입력해주세요.'
        );
      }
    });
  },
};
export default Validation;
