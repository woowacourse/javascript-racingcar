import CarManager from '../domain/model/CarManager.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';
import Validator from '../domain/validator/Validator.js';
import { CONFIG } from '../constants/config.js';
import AttemptsValidator from '../domain/validator/AttemptsValidator.js';

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
      const carNames = input.split(CONFIG.COMMA);
      carNames.forEach((carName) => {
        Validator.checkCarNameLength(carName);
        Validator.checkBlank(carName);
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
