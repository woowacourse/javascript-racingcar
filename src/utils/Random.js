const { MIN_RANDOM, MAX_RANDOM } = require('./constants');

const Random = {
  makeRandomNumbers(tryCount) {
    const race = [];
    while (tryCount) {
      const randomNumber = Math.floor(
        Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM
      );
      race.push(randomNumber);
      tryCount -= 1;
    }
    return race;
  },
};

module.exports = Random;
