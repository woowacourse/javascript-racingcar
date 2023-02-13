const { getRacingSnapShot } = require('../utils/outputGenerator');
const Car = require('./Car');
const Random = require('../utils/Random');

class RacingGame {
  #instance = {
    cars: [],
    snapShots: [],
  };

  constructor(names) {
    this.#instance.cars = this.#generateCars(names);
  }

  get snapShots() {
    return this.#instance.snapShots;
  }

  #generateCars(names) {
    return names.map(name => new Car(name));
  }

  raceNTimes(n) {
    Array(n)
      .fill()
      .forEach(() => this.race());
  }

  race() {
    this.#moveCars();

    this.#instance.snapShots = this.#updateSnapShots();
  }

  #moveCars() {
    this.#instance.cars.forEach(car => car.move(Random.generateNumber()));
  }

  #updateSnapShots() {
    return [...this.#instance.snapShots, this.#takeSnapShots()];
  }

  #takeSnapShots() {
    return this.#instance.cars.map(car => getRacingSnapShot(car)).join('\n');
  }

  getWinners() {
    const max = Math.max(...this.#instance.cars.map(car => car.position));
    const winners = this.#instance.cars
      .filter(car => car.position === max)
      .map(car => car.name);

    return winners;
  }

  isAllFailed() {
    return this.#instance.cars.every(car => car.position === 0);
  }
}

module.exports = RacingGame;
