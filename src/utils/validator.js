const CharacterValidator = {
  isOnlyAlphabet(string) {
    const alphabetReg = /^([A-Z|a-z])+$/;
    return alphabetReg.test(string);
  },

  isOnlyKorean(string) {
    const koreanReg = /^([가-힣])+$/;
    return koreanReg.test(string);
  },

  isAlphabetOrKorean(string) {
    const languageReg = /^([A-Z|a-z|가-힣])+$/;
    return languageReg.test(string);
  },
};

const ArrayValidator = {
  isLengthMoreThanOne(array) {
    return array.length > 1;
  },

  isDuplicated(array) {
    return array.length !== new Set(array).size;
  },
};

const NumberValidator = {
  isNaturalNumber(number) {
    const numberReg = /^[1-9][0-9]*$/;
    return numberReg.test(number);
  },
};

module.exports = { CharacterValidator, ArrayValidator, NumberValidator };
