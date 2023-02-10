const { MESSAGE } = require("../lib/Constant");

const Validator = {
  carName(string) {
    const names = string.split(",");

    if (this.isCarNameHasBlank(string)) throw new Error(MESSAGE.error.blank);

    if (!this.isCarNameLessThenFive(names))
      throw new Error(MESSAGE.error.nameLength);

    if (!this.isCarNameNull(names)) throw new Error(MESSAGE.error.null);

    if (!this.isCarNameLowerCase(names))
      throw new Error(MESSAGE.error.lowerCase);

    if (this.isDuplicated(names)) throw new Error(MESSAGE.error.duplicatedName);
  },

  tryCount(number) {
    if (!this.isNumeric(number)) throw new Error(MESSAGE.error.numeric);
  },

  isCarNameHasBlank(string) {
    return string.search(/\s/g) !== -1;
  },

  isCarNameLessThenFive(names) {
    return names.every((name) => name.length <= 5);
  },

  isCarNameLowerCase(names) {
    return names.every((name) => name.search(/[^a-z]/g) === -1);
  },

  isCarNameNull(names) {
    return names.every((name) => name !== "");
  },

  isDuplicated(names) {
    if (names.length !== new Set(names).size) return true;
  },

  isNumeric(number) {
    if (number === "0") return false;

    return number.search(/[^0-9]/g) === -1;
  },
};

module.exports = Validator;
