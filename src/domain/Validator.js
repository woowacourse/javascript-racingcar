const Validator = {
  validateCarNamesLength(namesArray) {
    namesArray.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    });
  },

  validateCarNames(names) {
    const namesArray = names.split(",");
    this.validateCarNamesLength(namesArray);
  },

  validateTryCountIsNumber(tryCount) {
    if (isNaN(tryCount)) throw new Error("[ERROR] 시도 횟수는 숫자만 입력 가능합니다.");
  },

  validateTryCountIsNaturalNumber(tryCount) {
    if (Number(tryCount) < 1) throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자를 입력해야 합니다.");
  },

  validateTryCount(tryCount) {
    this.validateTryCountIsNumber(tryCount);
    this.validateTryCountIsNaturalNumber(tryCount);
  },
};

export default Validator;
