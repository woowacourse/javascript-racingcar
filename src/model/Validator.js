const Validator = {
  carName(names) {
    names = names.split(",");

    if (!this.isCarNameLessThenFive(names))
      throw new Error("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");

    if (!this.isCarNameLowerCase(names))
      throw new Error("[ERROR] 자동차 이름은 영소문자로 이루어져야 합니다.");
  },

  isCarNameLessThenFive(names) {
    return names.every((name) => {
      return name.length <= 5;
    });
  },

  isCarNameLowerCase(names) {
    return names.every((name) => {
      return name.search(/[^a-z]/g) === -1;
    });
  },
};

module.exports = Validator;
