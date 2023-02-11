const { MIN_RANDOM, MAX_RANDOM } = require('./constants');

const Random = {
  makeRandomNumbers(tryCount) {
    const race = Array.from({ length: tryCount }, () =>
      Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM)
    );
    return race;
  },
};

module.exports = Random;
