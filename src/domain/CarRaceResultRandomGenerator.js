const randomNumbersGenerator = require("../util/randomNumbersGenerator");
const { RANDOMS, RESULT } = require("../constant/Constant");

const CarRaceResultRandomGenerator = {
  generate(carCount) {
    const randomNumbers = randomNumbersGenerator.getRandomNumbers(carCount, RANDOMS.maximumNumber);
    const raceRoundResult = randomNumbers.map((randomNumber) =>
      randomNumber >= RANDOMS.minimumRunNumber ? RESULT.run : RESULT.stay
    );

    return raceRoundResult;
  },
};

module.exports = CarRaceResultRandomGenerator;
