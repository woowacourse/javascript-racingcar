const CarRaceResultRandomGenerator = {
  generate(carCount) {
    const randomNumbers = Array(carCount)
      .fill("")
      .map(() => this.getSingleRandomNumber());
    const raceResults = randomNumbers.map((randomNumber) => (randomNumber >= 4 ? 1 : 0));
    return raceResults;
  },

  getSingleRandomNumber() {
    const MAXIMUM_RANDOM_NUMBER = 10;
    return Math.floor(Math.random() * MAXIMUM_RANDOM_NUMBER);
  },
};

module.exports = CarRaceResultRandomGenerator;
