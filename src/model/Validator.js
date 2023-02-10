const { MESSAGE, REGEXR } = require("../lib/Constant");

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
    return string.search(REGEXR.noBlank) !== -1;
  },

  isCarNameLessThenFive(names) {
    return names.every((name) => name.length <= 5);
  },

  isCarNameNull(names) {
    return names.every((name) => name !== "");
  },

  isCarNameLowerCase(names) {
    return names.every((name) => name.search(REGEXR.lowerCase) === -1);
  },

  isDuplicated(names) {
    if (names.length !== new Set(names).size) return true;
  },

  isNumeric(number) {
    if (number === "0") return false;

    return number.search(REGEXR.numeric) === -1;
  },
};

module.exports = Validator;
