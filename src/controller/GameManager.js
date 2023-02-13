const Console = require('../utils/Console');
const { isValidCarNames, isValidTryCount } = require('../utils/Validation');
const Car = require('../domain/Car');
const RandomGenerator = require('../utils/RandomGenerator');
const {
  printResult,
  printWinners,
  printError,
  printEmptyLine,
  printCar,
} = require('../view/OutputView');
const { readCarNames, readTryCount } = require('../view/InputView');
const { ERROR } = require('../constants/message');
const { FORWARD_CONDITION } = require('../constants/value');
class GameManager {
  #cars = [];

  moveCars(randomNumbers) {
    this.#cars.forEach((car) => {
      if (randomNumbers.shift() >= FORWARD_CONDITION) {
        car.move();
      }
    });
  }

  printCars() {
    this.#cars.forEach((car) => {
      printCar(car.getName(), car.getPosition());
    });
    printEmptyLine();
  }

  raceCars(tryCount) {
    printResult();
    Array(tryCount).fill().forEach(() => {
      this.moveCars(RandomGenerator.generateRandomNumbers(this.#cars.length));
      this.printCars();
    });
  }

  judgeWinners() {
    const max = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars
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

  setCars(cars) {
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
