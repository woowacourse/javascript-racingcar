const { MIN_RANDOM, MAX_RANDOM } = require("./constants");

const Random = {
  makeRandomNumbers(numberOfTrial) {
    const race = [];
    while (numberOfTrial) {
      const randomNumber = Math.floor(
        Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM
      );
      race.push(randomNumber);
      numberOfTrial -= 1;
    }
    return race;
  },
};

module.exports = Random;
