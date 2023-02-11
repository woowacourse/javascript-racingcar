import Console from '../utils/Console.js';
import Validation from '../utils/Validation.js';
import Car from './Car.js';
import RandomGenerator from '../utils/RandomGenerator.js';
import OutputView from '../view/OutputView.js';
import InputView from '../view/InputView.js';
import constants from '../utils/constants.js';

class GameManager {
  #cars = [];

  isForward() {
    return RandomGenerator.pickRandomNumber() >= constants.FORWARD_LIMIT;
  }

  moveCars(cars) {
    cars.forEach((car) => {
      car.judgeMove(this.isForward());
    });
  }

  printCars(cars) {
    cars.forEach((car) => {
      OutputView.printCar(car.name, car.position);
    });
    OutputView.printEmptyLine();
  }

  tryMoveCars(tryCount, cars) {
    for (let i = 0; i < tryCount; i++) {
      this.moveCars(cars);
      this.printCars(cars);
    }
  }

  judgeWinners(cars) {
    cars.sort((a, b) => b.position - a.position);
    const max = cars[0].position;
    const winners = cars
      .filter((car) => car.position === max)
      .map((car) => car.name);
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
    OutputView.printResult();
    this.tryMoveCars(tryCount, this.#cars);
    const winners = this.judgeWinners([...this.#cars]);
    OutputView.printWinners(winners);
    Console.close();
  }
}

export default GameManager;
