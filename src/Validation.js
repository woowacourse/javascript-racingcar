const Validation = {
  validateCarNames(names) {
    const namesArray = names.split(",");
    this.validateCarNamesLength(namesArray);
  },

  validateCarNamesLength(namesArray) {
    namesArray.forEach((name) => {
      if (name.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    });
  },
};

module.exports = Validation;
