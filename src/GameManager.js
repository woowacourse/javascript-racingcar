const Console = require('./utils/Console');
const { isValidCarNames, isValidTryCount } = require('./utils/Validation');
const Car = require('./Car');
const { pickRandomNumber } = require('./utils/RandomGenerator');
const {
  printResult,
  printWinners,
  printError,
  printEmptyLine,
} = require('./OutputView');
const { readCarNames, readTryCount } = require('./InputView');
const { ERROR } = require('./utils/constants');
class GameManager {
  #cars = [];

  isForward() {
    return pickRandomNumber() >= 4;
  }

  moveCars() {
    this.#cars.forEach((car) => {
      car.move(this.isForward());
    });
  }

  printCars() {
    this.#cars.forEach((car) => {
      car.print();
    });
    printEmptyLine();
  }

  tryMoveCars(tryCount) {
    printResult();
    for (let i = 0; i < tryCount; i++) {
      this.moveCars();
      this.printCars();
    }
  }

  judgeWinners() {
    const cars = [...this.#cars];
    cars.sort((a, b) => b.getPosition() - a.getPosition());
    const max = cars[0].getPosition();
    const winners = cars
      .filter((car) => car.getPosition() === max)
      .map((car) => car.getName());
    return winners;
  }

  async handleTryCount() {
    const tryCount = await readTryCount();
    try {
      if (!isValidTryCount(tryCount)) {
        throw new Error(ERROR.tryCount);
      }
    } catch (error) {
      printError(error);
      await this.handleTryCount();
    }
    return tryCount;
  }

  generateCars(names) {
    return names.map((name) => new Car(name));
  }

  async handleCarNames() {
    const names = await readCarNames();
    try {
      if (!isValidCarNames(names)) {
        throw new Error(ERROR.carNames);
      }
      this.#cars = this.generateCars(names);
    } catch (error) {
      printError(error);
      await this.handleCarNames();
    }
  }

  async play() {
    await this.handleCarNames();
    const tryCount = await this.handleTryCount();
    this.tryMoveCars(tryCount);
    const winners = this.judgeWinners();
    printWinners(winners);
    Console.close();
  }
}

module.exports = GameManager;
