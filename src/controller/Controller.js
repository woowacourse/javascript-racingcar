import CarManager from '../CarManager.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';

class Controller {
  constructor() {
    this.carManager = new CarManager();
  }

  async process() {
    const carNames = await this.readCarNames();
    this.carManager.createCars(carNames);
    const attempts = await this.readAttempts();
    this.carManager.race(attempts);
    const winners = this.carManager.determineWinners();
    OutputView.printWinners(winners);
  }

  async readCarNames() {
    const carNames = await readLineAsync(INPUT.CAR_NAMES);
    return carNames;
  }

  async readAttempts() {
    const attempts = await readLineAsync(INPUT.ATTEMPTS);
    return attempts;
  }
}

export default Controller;
