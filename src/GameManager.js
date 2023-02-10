import Console from './utils/Console.js';
import Validation from './utils/Validation.js';
import Car from './Car.js';
import RandomGenerator from './utils/RandomGenerator.js';
import OutputView from './OutputView.js';
import InputView from './InputView.js';
import constants from './utils/constants.js';

class GameManager {
  #cars = [];

  isForward() {
    return RandomGenerator.pickRandomNumber() >= 4;
  }

  moveCars(cars) {
    cars.forEach((car) => {
      car.move(this.isForward());
    });
  }

  printCars(cars) {
    cars.forEach((car) => {
      car.print();
    });
    OutputView.printEmptyLine();
  }

  tryMoveCars(tryCount, cars) {
    OutputView.printResult();
    for (let i = 0; i < tryCount; i++) {
      this.moveCars(cars);
      this.printCars(cars);
    }
  }

  judgeWinners(cars) {
    cars.sort((a, b) => b.getPosition() - a.getPosition());
    const max = cars[0].getPosition();
    const winners = cars
      .filter((car) => car.getPosition() === max)
      .map((car) => car.getName());
    return winners;
  }

  checkTryCount(tryCount) {
    if (!Validation.isValidTryCount(tryCount)) {
      throw new Error(constants.ERROR.tryCount);
    }
  }

  async handleTryCount() {
    const tryCount = await InputView.readTryCount();
    try {
      this.checkTryCount(tryCount);
    } catch (error) {
      OutputView.printError(error);
      await this.handleTryCount();
    }
    return tryCount;
  }

  generateCars(names) {
    return names.map((name) => new Car(name));
  }

  checkCarNames(names) {
    if (!Validation.isValidCarNames(names)) {
      throw new Error(constants.ERROR.carNames);
    }
  }

  async handleCarNames() {
    const names = await InputView.readCarNames();
    try {
      this.checkCarNames(names);
      this.#cars = this.generateCars(names);
    } catch (error) {
      OutputView.printError(error);
      await this.handleCarNames();
    }
  }

  async play() {
    await this.handleCarNames();
    const tryCount = await this.handleTryCount();
    this.tryMoveCars(tryCount, this.#cars);
    const winners = this.judgeWinners([...this.#cars]);
    OutputView.printWinners(winners);
    Console.close();
  }
}

export default GameManager;
