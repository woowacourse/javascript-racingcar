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
      cars.length < CONSTANTS.minNumberOfNames
    ) {
      throw new Error(RACE_ERROR_MESSAGE.numberOfNames);
    }
  }

  static validateTryCount(count) {
    if (!Validator.isNumeric(count) || count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  }

  runOnce() {
    this.#cars.forEach(car => {
      car.move(
        RandomNumGenerator.generateNumberInRange(
          CONSTANTS.lowerNumber,
          CONSTANTS.upperNumber,
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
}

module.exports = CarRace;
