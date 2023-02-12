const { MESSAGE, REGEXR } = require("../util/Constant");

const Validator = {
  carName(string) {
    const names = string.split(",");

    if (this.isCarName.hasBlank(string)) throw new Error(MESSAGE.error.blank);

    if (!this.isCarName.lessThenFive(names))
      throw new Error(MESSAGE.error.nameLength);

    if (!this.isCarName.null(names)) throw new Error(MESSAGE.error.null);

    if (!this.isCarName.lowerCase(names))
      throw new Error(MESSAGE.error.lowerCase);

    if (this.isCarName.duplicated(names))
      throw new Error(MESSAGE.error.duplicatedName);
  },

  tryCount(number) {
    if (!this.isTryCount.numeric(number))
      throw new Error(MESSAGE.error.numeric);
  },

  isCarName: {
    hasBlank(string) {
      return string.search(REGEXR.noBlank) !== -1;
    },

    lessThenFive(names) {
      return names.every((name) => name.length <= 5);
    },

    null(names) {
      return names.every((name) => name !== "");
    },

    lowerCase(names) {
      return names.every((name) => name.search(REGEXR.lowerCase) === -1);
    },

    duplicated(names) {
      if (names.length !== new Set(names).size) return true;
    },
  },

  isTryCount: {
    numeric(number) {
      if (number === "0") return false;

      return number.search(REGEXR.numeric) === -1;
    },
  },
};

module.exports = Validator;
