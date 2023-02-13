const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');
const RandomNumGenerator = require('../Utils/RandomNumGenerator');
const Validator = require('../Utils/Validator');

class CarRace {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  static validateCars(cars) {
    if (
      Validator.isDuplicate(cars) ||
      cars.length < CONSTANTS.MIN_NUMBER_OF_NAMES
    ) {
      throw new Error(RACE_ERROR_MESSAGE.NUMBER_OF_NAMES);
    }
  }

  static validateTryCount(count) {
    if (!Validator.isNumeric(count) || count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.RANGE_OF_TRY_COUNT);
    }
  }

  runOnce() {
    this.#cars.forEach(car => {
      car.move(
        RandomNumGenerator.generateNumberInRange(
          CONSTANTS.LOWER_NUMBER,
          CONSTANTS.UPPER_NUMBER,
        ),
      );
    });
  }

  getResult() {
    const result = new Map();
    this.#cars.forEach(car => {
      result.set(car.name, car.position);
    });

    return result;
  }

  getWinners() {
    const result = this.getResult();
    const max = Math.max(...result.values());
    const winners = Array.from(result.keys()).filter(
      name => result.get(name) === max,
    );

    return winners;
  }
}

module.exports = CarRace;
