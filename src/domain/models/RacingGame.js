const Random = require('../../utils/Random');
const Validator = require('../../validator');
const Car = require('./Car');
const { getRacingSnapShot } = require('../../utils/output');
const { FORWARD_CONDITIONS_NUMBER, INITIAL_POSITION } = require('../../constants/values');

class RacingGame {
  #cars = [];
  #snapShots = [];

  constructor(names) {
    Validator.Car.checkNames(names);
    this.#cars = names.map((name) => new Car(name));
  }

  #moveAllRandomly() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.generateNumber();

      if (randomNumber >= FORWARD_CONDITIONS_NUMBER) car.move();
    });
  }

  #takeSnapShots() {
    this.#snapShots.push(this.#cars.map((car) => getRacingSnapShot(car)).join('\n'));
  }

  #race() {
    this.#moveAllRandomly();
    this.#takeSnapShots();
  }

  raceNTimes(n) {
    Array(n).fill().forEach(this.#race.bind(this));
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const max = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars
      .filter((car) => car.getPosition() === max)
      .map((car) => car.getName());

    return winners;
  }

  getSnapShots() {
    return this.#snapShots;
  }

  allFailed() {
    return this.#cars.every((car) => car.getPosition() === INITIAL_POSITION);
  }
}

module.exports = RacingGame;
