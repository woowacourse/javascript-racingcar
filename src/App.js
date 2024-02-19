import Controller from './controller/Controller.js';
import ExceptionHandler from './utils/error/ExceptionHandler.js';

const { retryAsyncWithErrorLogging } = ExceptionHandler;

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    await this.#initializeGameInfo();
    this.#executeGame();
    this.#displayGameResult();
  }

  async #initializeGameInfo() {
    const carNames = await retryAsyncWithErrorLogging(() => this.controller.inputCarNames());
    const tryCount = await retryAsyncWithErrorLogging(() => this.controller.inputTryCount());

    this.controller.setCarNames(carNames);
    this.controller.setTryCount(tryCount);
  }

  #executeGame() {
    this.controller.executeGame();
    this.controller.findWinners();
  }

  #displayGameResult() {
    this.controller.displayMiddleResults();
    this.controller.displayFinalWinners();
  }
}

export default App;
