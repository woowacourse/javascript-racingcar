const { MIN_RANDOM, MAX_RANDOM } = require("../constants");

const Random = {
  makeRandomNumbers(countOfTrial) {
    const race = [];
    while (countOfTrial) {
      const randomNumber = this.generateRandomNumber();
      race.push(randomNumber);
      countOfTrial -= 1;
    }
    return race;
  },

  generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);
  },
};

module.exports = Random;
