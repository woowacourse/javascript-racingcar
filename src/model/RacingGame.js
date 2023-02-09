const RacingCar = require('./RacingCar.js');
const Util = require('../utils/Util.js');
const { UTIL_NUMBER } = require('../data/constants.js');
const OutputView = require('../view/OutputView.js');

class RacingGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = [];
  }

  setCarsName(cars) {
    cars.forEach((carName) => {
      this.#cars.push(new RacingCar(carName));
    });
  }

  setTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  judgeMove(randomValue, car) {
    if (randomValue >= UTIL_NUMBER.CAR_MOVE_MINIMUM_NUMBER) {
      car.move();
    }
  }

  assignRandom() {
    this.#cars.forEach((car) => {
      const randomValue = Util.randomValue();
      this.judgeMove(randomValue, car);
    });

    OutputView.printMoveProcess(this.#cars);
  }

  repeatProcess() {
    OutputView.printMoveResult();
    OutputView.printMoveProcess(this.#cars);
    for (let i = 0; i < this.#tryCount; i++) {
      this.assignRandom();
    }
  }

  findWinner() {
    const carsMoveResults = new Map();
    this.#cars.forEach((car) => {
      carsMoveResults.set(car.getCarName(), car.getMoveCount());
    });

    const winners = Util.filterMaxObjects(carsMoveResults).map((obj) => obj[0]);
    return winners;
  }

  printWinner() {
    OutputView.printWinner(this.findWinner());
  }
}

module.exports = RacingGame;
