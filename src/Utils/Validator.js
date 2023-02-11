const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

const Validator = {
  validateNamesOfCars(names) {
    if (new Set(names).size !== names.length) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }

    if (names.length < CONSTANTS.minNumberOfNames) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }
  },

  validateCarName(name) {
    if (name.length > CONSTANTS.maxNameLength) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }

    if (!/^[A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }

    if ([CONSTANTS.empty, CONSTANTS.undefinedType].includes(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }
  },

  validateTryCount(count) {
    if (count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }

    if (!/^[0-9]+$/.test(count)) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  },
};

module.exports = Validator;
