const Car = require('./Car');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

class CarManager {
  #cars = [];

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  progress() {
    this.#cars.forEach((car) => {
      car.tryProgress(RandomNumberGenerator.generate());
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxProgressCount = Math.max(...this.#cars.map((car) => car.getProgressCount()));

    return this.#cars
      .filter((car) => car.getProgressCount() === maxProgressCount)
      .map((winner) => winner.getName());
  }
}

module.exports = CarManager;
