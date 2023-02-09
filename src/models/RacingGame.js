const { getRacingSnapShot } = require('../utils/output');
const Validator = require('../validator');
const Car = require('./Car');

class RacingGame {
  #cars = [];
  #snapShots = [];

  constructor(names) {
    Validator.Car.checkNames(names);
    this.#cars = names.map(name => new Car(name));
  }

  #moveAll() {
    this.#cars.forEach(car => car.move());
  }

  #takeSnapShots() {
    this.#snapShots.push(
      this.#cars.map(car => getRacingSnapShot(car)).join('\n')
    );
  }

  raceNTimes(n) {
    Array(n)
      .fill()
      .forEach(() => this.race());
  }

  race() {
    this.#moveAll();
    this.#takeSnapShots();
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const max = Math.max(...this.#cars.map(car => car.getPosition()));
    const winners = this.#cars
      .filter(car => car.getPosition() === max)
      .map(car => car.getName());

    return winners;
  }

  getSnapShots() {
    return this.#snapShots;
  }
}

module.exports = RacingGame;
