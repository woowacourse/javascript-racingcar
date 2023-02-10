const { MIN_RANDOM, MAX_RANDOM } = require('./constants');

const Random = {
  generateRandomNumbers(length) {
    const arr = Array.from({ length: length }, () =>
      this.generateRandomNumber(MAX_RANDOM, MIN_RANDOM)
    );
    return arr;
  },

  generateRandomNumber(maxNumber, minNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  },
};

module.exports = Random;
