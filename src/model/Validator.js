const Validator = {
  carName(string) {
    const names = string.split(",");

    if (this.isCarNameHasBlank(string))
      throw new Error("[ERROR] 자동차 이름에 공백이 포함되어서는 안됩니다.");

    if (!this.isCarNameLessThenFive(names))
      throw new Error("[ERROR] 자동차 이름은 5자 이하이어야 합니다.");

    if (!this.isCarNameLowerCase(names))
      throw new Error("[ERROR] 자동차 이름은 영소문자로 이루어져야 합니다.");
  },

  isCarNameHasBlank(string) {
    return string.search(/\s/g) !== -1;
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
