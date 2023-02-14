const { ERROR_MESSAGE, NUMBERS } = require('../data/constants.js');

class InputValidator {
  static validateCarName(carName) {
    if (carName.length > NUMBERS.CAR_NAME_LENGTH_LIMIT_NUMBER)
      throw ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR;
  }

  static validateBlank(inputValue) {
    if (inputValue.length <= NUMBERS.BLANK_CHECK_NUMBER)
      throw ERROR_MESSAGE.BLANK_ERROR;
  }

  static validateCarNames(carArr) {
    carArr.forEach(InputValidator.validateCarName);
    carArr.forEach(InputValidator.validateBlank);
  }

  static validateTypeNumber(inputValue) {
    if (isNaN(inputValue)) throw ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR;
  }

  static validateTryCount(tryCount) {
    InputValidator.validateBlank(tryCount);
    InputValidator.validateTypeNumber(tryCount);
  }
}

module.exports = InputValidator;
