const RacingCar = require('./RacingCar.js');
const Util = require('../utils/Util.js');
const { NUMBERS } = require('../data/constants.js');

class RacingGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = [];
  }

  makeCarsNameList(cars) {
    cars.forEach((carName) => {
      this.#cars.push(new RacingCar(carName));
    });
  }

  get carsNameList() {
    return this.#cars;
  }

  get TryCount() {
    return this.#tryCount;
  }

  set TryCount(tryCount) {
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

  repeatProcess() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.assignRandom();
    }
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
