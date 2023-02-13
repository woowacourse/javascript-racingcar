const Car = require('./Car');
const MainController = require('../App');

const RandomNumberGenerator = require('../utils/RandomNumberGenerator');
const {
  RANDOM_LOWER_INCLUSIVE,
  RANDOM_UPPER_INCLUSIVE,
} = require('../constants/numbers');

class OverallRacingGameManager {
  #cars = [];

  constructor(carNames) {
    this.#cars = this.createInitialCars(carNames);
  }

  createInitialCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  startRace(tryCounts) {
    for (let i = 0; i < tryCounts; i++) {
      this.progress();

      MainController.printRaceProgress(this.getCars());
    }
    MainController.printWinners(this.getWinners());
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
