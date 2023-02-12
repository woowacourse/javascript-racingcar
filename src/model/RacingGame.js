const RacingCar = require('./RacingCar.js');
const Util = require('../utils/Util.js');
const { UTIL_NUMBER } = require('../data/constants.js');

class RacingGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = [];
  }

  get cars() {
    return this.#cars;
  }

  set cars(carsName) {
    carsName.forEach((carName) => {
      this.#cars.push(new RacingCar(carName));
    });
  }

  get tryCount() {
    return this.#tryCount;
  }

  set tryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  judgeMove(randomValue, car) {
    if (randomValue >= UTIL_NUMBER.CAR_MOVE_MINIMUM_NUMBER) {
      car.move();
    }
  }

  assignRandom() {
    this.#cars.forEach((car) => {
      const randomValue = Util.generateRandomNumber(
        UTIL_NUMBER.CAR_RANDOM_MINIMUM_NUMBER,
        UTIL_NUMBER.CAR_RANDOM_MAXIMUM_NUMBER
      );
      this.judgeMove(randomValue, car);
    });
  }

  findWinner() {
    const carsMoveResults = new Map();
    this.#cars.forEach((car) => {
      carsMoveResults.set(car.carName, car.moveCount);
    });

    const winners = Util.filterMaxObjects(carsMoveResults).map((obj) => obj[0]);
    return winners;
  }
}

module.exports = RacingGame;
