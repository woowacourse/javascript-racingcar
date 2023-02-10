const { ERROR_MESSAGE, UTIL_NUMBER } = require('../data/constants.js');

class Validator {
  static validateCarName(carName) {
    if (carName.length > UTIL_NUMBER.CAR_NAME_LENGTH_LIMIT)
      throw ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR;
  }

  static validateCarNames(carArr) {
    carArr.forEach(Validator.validateCarName);
  }

  static validateTryCount(tryCount) {
    if (isNaN(tryCount)) throw ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR;
  }
}

module.exports = Validator;
