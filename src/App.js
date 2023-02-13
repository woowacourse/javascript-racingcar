import GameManager from './domain/GameManager.js';
import Validator from './domain/Validator.js';
import Console from './util/Console.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #gameManager = new GameManager();

  async play() {
    await this.readCarName();
    await this.readTryCount();

    this.#gameManager.moveCar();
    this.printProcessResult();
    this.printWinner();
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

  printProcessResult() {
    const carsStatus = this.#gameManager.getCarsStatus();
    OutputView.printProcessResult(carsStatus);
  }

  printWinner() {
    const winner = this.#gameManager.getWinner();
    OutputView.printWinner(winner);
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

export default App;
