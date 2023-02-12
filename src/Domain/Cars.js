const Car = require('./Car');
const RandomNumGenerator = require('../Utils/RandomNumGenerator');
const RACE_ERROR_MESSAGE = require('../Constant/ErrorMessage');
const ValidatorConditions = require('../Utils/ValidatorConditions');

class Cars {
  #cars = [];
  #raceResult;

  constructor(cars) {
    this.validate(cars);
    cars.forEach(car => {
      this.#cars.push(new Car(car));
    });
  }

  validate(cars) {
    if (ValidatorConditions.isOverlap(cars)) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfCars);
    }

    if (ValidatorConditions.isCountSmallerThanTwo(cars)) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfCars);
    }
  }

  race() {
    this.#cars.forEach(car => {
      car.move(RandomNumGenerator.generateNumber());
    });
  }

  getRaceResult() {
    const result = new Map();
    this.#cars.forEach(car => {
      result.set(car.getName(), car.getPosition());
    });

    this.#raceResult = result;

    return this.#raceResult;
  }

  getWinners() {
    const winners = [];
    const max = Math.max(...this.#raceResult.values());
    this.#raceResult.forEach((value, key) => {
      if (value === max) {
        winners.push(key);
      }
    });

    return winners;
  }
}

module.exports = Cars;
