const { MIN_RANDOM, MAX_RANDOM } = require("../constants");

const MakeRandomNumber = {
  getRandomNUmber() {
    return Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM) + MIN_RANDOM);
  },
};

module.exports = MakeRandomNumber;
