const RacingCar = require('./RacingCar.js');
const Util = require('../utils/Util.js');
const { NUMBERS } = require('../data/constants.js');
const OutputView = require('../view/OutputView.js');

class RacingGame {
  #cars;

  #tryCount;

  constructor() {
    this.#cars = [];
  }

  makeCarNameList(cars) {
    cars.forEach((carName) => {
      this.#cars.push(new RacingCar(carName));
    });
  }

  setTryCount(tryCount) {
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
