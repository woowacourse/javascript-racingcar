const CONSTANTS = require('../Constant/Constants');

const ValidatorConditions = {
  isOverlap(names) {
    if (new Set(names).size !== names.length) {
      return true;
    }
    return false;
  },

  isCountSmallerThanTwo(cars) {
    if (cars.length < CONSTANTS.minNumberOfCars) {
      return true;
    }
    return false;
  },

  isNameLengthBiggerThanMaxLength(name) {
    if (name.length > CONSTANTS.maxNameLength) {
      return true;
    }
    return false;
  },

  isOnlyNumberInName(name) {
    if (/^[0-9]+$/.test(name) || !/^[A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]*$/.test(name)) {
      return true;
    }
    return false;
  },

  isBlankOrUndefinedTypeInName(name) {
    if (['', CONSTANTS.undefinedType].includes(name)) {
      return true;
    }
    return false;
  },

  isTryCountSmallerThanOne(count) {
    if (count < 1) {
      return true;
    }
    return false;
  },

  isNotNumber(count) {
    if (!/^[0-9]+$/.test(count)) {
      return true;
    }
    return false;
  },
};

module.exports = ValidatorConditions;
