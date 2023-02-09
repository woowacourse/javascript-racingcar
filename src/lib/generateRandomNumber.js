const { RANDOM_NUMBER_RANGE } = require("./Constant");

const GenerateRandomNumber = {
  generator() {
    return Math.floor(Math.random() * RANDOM_NUMBER_RANGE);
  },
};

module.exports = GenerateRandomNumber;
