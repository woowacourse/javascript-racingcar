const Car = require('./Car');

const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const {
  RANDOM_LOWER_INCLUSIVE,
  RANDOM_UPPER_INCLUSIVE,
} = require('../constants/numbers');

class OverallRacingGameManager {
  #cars = [];
  #app;

  constructor(app) {
    this.#app = app;
    this.#cars = [];
  }

  createInitialCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  startRace(tryCounts) {
    for (let i = 0; i < tryCounts; i++) {
      this.progress();

      this.#app.printRaceProgress(this.getCars());
    }
    this.#app.printWinners(this.getWinners());
  }

  progress() {
    this.#cars.forEach((car) => {
      car.tryProgress(
        RandomNumberGenerator.generate(RANDOM_LOWER_INCLUSIVE, RANDOM_UPPER_INCLUSIVE),
      );
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxProgressCount = Math.max(...this.#cars.map((car) => car.progressCount));

    return this.#cars
      .filter((singleCar) => singleCar.progressCount === maxProgressCount)
      .map((winner) => winner.name);
  }
}

module.exports = OverallRacingGameManager;
