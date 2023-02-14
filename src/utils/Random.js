const { MIN_RANDOM, MAX_RANDOM } = require("../constants");

const Random = {
  makeRandomNumbers(countOfTrial) {
    let race = [];
    for (let i = 0; i < countOfTrial; i++) {
      const randomNumber = this.generateRandomNumber();
      race = [...race, randomNumber];
    }
    return race;
  },

  generateRandomNumber() {
    return Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);
  },
};

module.exports = Random;
