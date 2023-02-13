import Car from './domain/Car.js';
import GameManager from './domain/GameManager.js';
import Validator from './domain/Validator.js';
import Console from './util/Console.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #gameManager = new GameManager();
  #cars = [];
  #tryCount;

  async play() {
    await this.readCarName();
    await this.readTryCount();

    this.moveCar();

    const carsStatus = this.#cars.map((car) => car.getStatus());
    this.printProcessResult(carsStatus);
    this.printWinner(carsStatus);

    this.quit();
  }

  async readCarName() {
    const carNames = await InputView.readCarName();
    try {
      Validator.carName(carNames);
      this.#gameManager.addCars(carNames);
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.readCarName();
    }
  }

  async readTryCount() {
    const tryCount = await InputView.readTryCount();
    try {
      Validator.tryCount(tryCount);
      this.#gameManager.saveTryCount(Number(tryCount));
    } catch (error) {
      OutputView.printErrorMessage(error);
      await this.readTryCount();
    }
  }

  moveCar() {
    this.#cars.forEach((car) => {
      car.move(this.#tryCount);
    });
  }

  printProcessResult(carsStatus) {
    OutputView.printProcessResult(carsStatus, this.#tryCount);
  }

  printWinner(carsStatus) {
    const winner = Car.getWinner(carsStatus);

    OutputView.printWinner(winner);
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

export default App;
