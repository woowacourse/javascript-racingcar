const { ERROR_MESSAGE } = require('../data/constants.js');

const InputValidator = {
  validateCarName(carName) {
    if (carName.length > 5) throw ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR;
  },

  validateCarNames(carArr) {
    carArr.forEach((car) => InputValidator.validateCarName(car));
  },

  validateTryCount(tryCount) {
    if (isNaN(tryCount)) throw ERROR_MESSAGE.TRY_COUNT_TYPE_ERROR;
  },
};

module.exports = InputValidator;
