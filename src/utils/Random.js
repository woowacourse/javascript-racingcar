const MakeRandomNumber = require("./MakeRandomNumber");

const Random = {
  makeRandomNumbers(countOfTrial) {
    const race = [];
    while (countOfTrial) {
      const randomNumber = MakeRandomNumber.getRandomNUmber();
      race.push(randomNumber);
      countOfTrial -= 1;
    }
    return race;
  },
};

module.exports = Random;
