const { UTIL_NUMBER } = require('../data/constants.js');

class Util {
  static randomValue() {
    return Math.floor(
      Math.random() * (UTIL_NUMBER.CAR_RANDOM_MAXIMUM_NUMBER + 1)
    );
  }
}

module.exports = Util;
