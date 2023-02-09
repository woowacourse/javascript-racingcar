const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

class Validator {
  static validateNumOfCar(number) {
    if (number < CONSTANTS.minNumberOfNames) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }
  }

  static validateCarName(name) {
    if (
      name.length < CONSTANTS.minNameLength ||
      name.length > CONSTANTS.maxNameLength
    ) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }

    if (!/^[A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/.test(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }
  }

  static valdateTryCount(count) {
    if (!/^[0-9]+$/.test(count)) {
      throw new Error(RACE_ERROR_MESSAGE.isNotNumber);
    }
  }
}

module.exports = Validator;
