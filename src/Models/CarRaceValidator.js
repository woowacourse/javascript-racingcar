const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');
const Validator = require('../Utils/Validator');

const CarRaceValidator = {
  validateNamesOfCars(names) {
    if (
      Validator.isDuplicate(names) ||
      names.length < CONSTANTS.minNumberOfNames
    ) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }
  },

  validateCarName(name) {
    if (!name.length || name.length > CONSTANTS.maxNameLength) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }
  },

  validateTryCount(count) {
    if (!Validator.isNumeric(count) || count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  },
};

module.exports = CarRaceValidator;
