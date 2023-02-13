const StringValidator = {
  isAlphabetOrKorean(string) {
    const languageReg = /^([A-Z|a-z|가-힣])+$/;
    return languageReg.test(string);
  },

  hasFrontAndBackSpaces(string) {
    return string.trim().length !== string.length;
  },

  isNumber(string) {
    const numberReg = /^-?[1-9]\d*(\.\d*)?$/;
    return numberReg.test(string);
  },
};

const ArrayValidator = {
  isLengthMoreThanOne(array) {
    return array.length > 1;
  },

  hasDuplicatedElement(array) {
    return array.length !== new Set(array).size;
  },
};

module.exports = { StringValidator, ArrayValidator };
