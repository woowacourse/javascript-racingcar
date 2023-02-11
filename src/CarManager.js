const Car = require('./Car');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');
const { RANDOM_LOWER_INCLUSIVE, RANDOM_UPPER_INCLUSIVE } = require('./constants/numbers');

class OverallRacingGameManager {
  #cars;

  constructor(carNames) {
    this.#cars = [];

    carNames.forEach((singleCarName) => {
      this.#cars.push(new Car(singleCarName));
    });
  }

  progress() {
    this.#cars.forEach((singleCar) => {
      singleCar.tryProgress(
        RandomNumberGenerator.generate(RANDOM_LOWER_INCLUSIVE, RANDOM_UPPER_INCLUSIVE),
      );
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxProgressCount = Math.max(
      ...this.#cars.map((singleCar) => singleCar.progressCount),
    );

    return this.#cars
      .filter((singleCar) => singleCar.progressCount === maxProgressCount)
      .map((winner) => winner.name);
  }
}

module.exports = OverallRacingGameManager;
