const Validator = {
  isAllowedCharacter(string) {
    const characterReg = /^([,A-Za-z가-힣])+$/;
    return characterReg.test(string);
  },

  isNaturalNumber(number) {
    const numberReg = /^[1-9][0-9]*$/;
    return numberReg.test(number);
  },

  hasDuplicatedElements(array) {
    return array.length !== new Set(array).size;
  },
};

module.exports = Validator;
