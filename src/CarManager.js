const Car = require('./Car');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');
const { RANDOM_LOWER_INCLUSIVE, RANDOM_UPPER_INCLUSIVE } = require('./constants/numbers');

class OverallRacingGameManager {
  #cars = [];

  constructor(carNames) {
    this.#cars = this.createInitialCars(carNames);
  }

  createInitialCars(carNames) {
    return (this.#cars = carNames.map((carName) => new Car(carName)));
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
