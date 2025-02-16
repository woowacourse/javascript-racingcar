import Race from '../domain/model/Race.js';
import readLineAsync from '../views/InputView.js';
import { INPUT } from '../constants/messages.js';
import OutputView from '../views/OutputView.js';
import Validator from '../domain/validator/Validator.js';
import { CONFIG } from '../constants/config.js';
import AttemptsValidator from '../domain/validator/AttemptsValidator.js';

class Controller {
  constructor() {
    this.race = new Race();
  }

  async process() {
    const carNames = await this.readCarNames();
    this.race.createCars(carNames);
    const attempts = await this.readAttempts();
    OutputView.printResultGreeting();
    this.race.race(attempts);
    const winners = this.race.determineWinners();
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
      Validator.checkDuplicatedCarName(carNames);
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
