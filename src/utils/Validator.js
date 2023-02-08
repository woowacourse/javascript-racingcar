const { ERROR_MESSAGE } = require('../data/constants.js');

class Validator {
  static validateCarName(carName) {
    if (carName.length > 5) throw ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR;
  }

  static validateCarNames(carArr) {
    carArr.forEach((car) => Validator.validateCarName(car));
  }
}

module.exports = Validator;
