import Controller from './controller/Controller.js';
import ExceptionHandler from './utils/error/ExceptionHandler.js';

const { retryAsyncWithErrorLogging } = ExceptionHandler;

class App {
  constructor() {
    this.controller = new Controller();
  }

  async run() {
    const carNames = await retryAsyncWithErrorLogging(() => this.controller.inputCarNames());
    const tryCount = await retryAsyncWithErrorLogging(() => this.controller.inputTryCount());

    this.controller.setCarNames(carNames);
    this.controller.setTryCount(tryCount);

    this.controller.playGame();
    this.controller.findWinner();
  }
}

export default App;
