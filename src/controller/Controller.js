import CarManager from '../CarManager.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';
import CarNameValidator from '../validator/CarNameValidator.js';
import splitStringToArray from '../utils/utils.js';
import { CONFIG } from '../constants/config.js';
import AttemptsValidator from '../validator/AttemptsValidator.js';

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
    try {
      const input = await readLineAsync(INPUT.CAR_NAMES);
      const carNames = splitStringToArray(input, CONFIG.COMMA);
      carNames.forEach((carName) => {
        CarNameValidator.checkCarNameLength(carName);
        CarNameValidator.checkBlank(carName);
      });
      CarNameValidator.checkDuplicatedCarName(carNames);
      return carNames;
    } catch (err) {
      console.log(err.message);
      return this.readCarNames();
    }
  }

  async readAttempts() {
    try {
      const attempts = await readLineAsync(INPUT.ATTEMPTS);
      AttemptsValidator.checkPositiveNumber(attempts);
      return attempts;
    } catch (err) {
      console.log(err.message);
      return this.readAttempts();
    }
  }
}

export default Controller;
