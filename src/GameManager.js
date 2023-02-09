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
class GameManager {
  #cars = [];
  #tryCount = 0;

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

  tryMoveCars() {
    printResult();
    for (let i = 0; i < this.#tryCount; i++) {
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
    printWinners(winners);
  }

  async handleTryCount() {
    this.#tryCount = await InputView.readTryCount();
    try {
      if (!isValidTryCount(this.#tryCount)) {
        throw new Error('[ERROR] 잘못 된 값을 입력했습니다.');
      }
    } catch (error) {
      printError(error);
      await this.handleTryCount();
    }
  }

  async handleCarNames() {
    const names = await InputView.readCarNames();
    try {
      if (!isValidCarNames(names)) {
        throw new Error('[ERROR] 잘못 된 값을 입력했습니다.');
      }
      names.forEach((name) => {
        this.#cars.push(new Car(name));
      });
    } catch (error) {
      printError(error);
      await this.handleCarNames();
    }
  }

  async play() {
    await this.handleCarNames();
    await this.handleTryCount();
    this.tryMoveCars();
    this.judgeWinners();
    Console.close();
  }
}

module.exports = GameManager;
