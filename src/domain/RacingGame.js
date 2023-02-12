const Car = require('./Car');

const RandomNumberGenerator = require('./utils/RandomNumberGenerator');

class RacingGame {
  #cars = [];

  static MIN_PROGRESS_CONDITION_NUMBER = 0;
  static MAX_PROGRESS_CONDITION_NUMBER = 9;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  progressAllCars() {
    this.#cars.forEach((car) => {
      car.tryProgress(
        RandomNumberGenerator.generate(
          RacingGame.MIN_PROGRESS_CONDITION_NUMBER,
          RacingGame.MAX_PROGRESS_CONDITION_NUMBER,
        ),
      );
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
