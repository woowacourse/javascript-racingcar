// @ts-check

import CarManager from '../model/CarManager.js';
import OutputView from '../views/OutputView.js';
import User from '../user/User.js';

class Controller {
  constructor() {
    this.user = new User();
  }

  async process() {
    const carNames = await this.user.readCarNames();
    this.carManager = new CarManager(carNames);

    const attempts = await this.user.readAttempts();
    OutputView.printResultGreeting();
    this.carManager.race(attempts);

    const winners = this.carManager.determineWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
