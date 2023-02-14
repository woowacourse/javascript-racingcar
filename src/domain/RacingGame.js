const RacingCar = require('./RacingCar.js');
const Util = require('../utils/Util.js');
const { NUMBERS } = require('../data/constants.js');

class RacingGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = [];
  }

  get car() {
    return this.#cars;
  }

  set car(cars) {
    cars.forEach((carName) => {
      this.#cars.push(new RacingCar(carName));
    });
  }

  get tryCount() {
    return this.#tryCount;
  }

  set tryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  judgeMove(randomNumber, car) {
    if (randomNumber >= NUMBERS.CAR_MOVE_MINIMUM_NUMBER) {
      car.moveForward();
    }
  }

  assignRandom() {
    this.#cars.forEach((car) => {
      const randomNumber = Util.generateRandomNumber(
        NUMBERS.CAR_RANDOM_MAXIMUM_NUMBER
      );
      this.judgeMove(randomNumber, car);
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
