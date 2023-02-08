const Validator = {
  carName(names) {
    names = names.split(",");

    if (!this.isCarNameLessThenFive(names))
      throw new Error("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");
  },

  isCarNameLessThenFive(names) {
    return names.every((name) => {
      if (!(name.length <= 5)) return false;
      return true;
    });
  },
};

module.exports = Validator;

// Validator.carName("aaa, bbb, ccc");
