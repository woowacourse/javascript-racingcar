const CarRaceResultRandomGenerator = {
  generate(carCount) {
    const randomNumbers = Array(carCount)
      .fill("")
      .map(() => this.getSingleRandomNumber());
    const raceRoundResults = randomNumbers.map((randomNumber) => (randomNumber >= 4 ? 1 : 0));
    return raceRoundResults;
  },

  getSingleRandomNumber() {
    const MAXIMUM_RANDOM_NUMBER = 9;
    return Math.floor(Math.random() * MAXIMUM_RANDOM_NUMBER);
  },
};

module.exports = CarRaceResultRandomGenerator;
