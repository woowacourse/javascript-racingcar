const Console = require('./utils/Console');
const { isValidCarNames, isValidTryCount } = require('./utils/Validation');
const Car = require('./domain/Car');
const RandomGenerator = require('./utils/RandomGenerator');
const {
  printResult,
  printWinners,
  printError,
  printEmptyLine,
} = require('./view/OutputView');
const { readCarNames, readTryCount } = require('./view/InputView');
const { ERROR } = require('./constants/message');
class GameManager {
  #cars = [];

  isForward() {
    return RandomGenerator.pickRandomNumber() >= 4;
  }

  moveCars(cars) {
    cars.forEach((car) => {
      if (this.isForward()) {
        car.move();
      }
    });
  }

  printCars(cars) {
    cars.forEach((car) => {
      car.print();
    });
    printEmptyLine();
  }

  raceCars(tryCount) {
    printResult();
    Array(tryCount).fill().forEach(() => {
      this.moveCars(this.#cars);
      this.printCars(this.#cars);
    })
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

  checkTryCount(tryCount) {
    if (!isValidTryCount(tryCount)) {
      throw new Error(ERROR.tryCount);
    }
  }

  async handleTryCount() {
    const tryCount = await readTryCount();
    try {
      this.checkTryCount(tryCount);
    } catch (error) {
      printError(error);
      await this.handleTryCount();
    }
    return tryCount;
  }

  generateCars(names) {
    return names.map((name) => new Car(name));
  }

  checkCarNames(names) {
    if (!isValidCarNames(names)) {
      throw new Error(ERROR.carNames);
    }
  }

  setCars(cars){
    this.#cars = cars;
  }

  async handleCarNames() {
    const names = await readCarNames();
    try {
      this.checkCarNames(names);
      this.setCars(this.generateCars(names));
    } catch (error) {
      printError(error);
      await this.handleCarNames();
    }
  }

  async play() {
    await this.handleCarNames();
    const tryCount = await this.handleTryCount();
    this.raceCars(tryCount);
    const winners = this.judgeWinners();
    printWinners(winners);
    Console.close();
  }
}

module.exports = GameManager;
