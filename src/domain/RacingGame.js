const Car = require('./Car');

class RacingGame {
  #cars = [];

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  progressAllCars() {
    this.#cars.forEach((car) => {
      car.tryProgress();
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

module.exports = RacingGame;
