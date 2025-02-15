// @ts-check

import CarManager from '../domain/CarManager.js';
import OutputView from '../views/OutputView.js';
import User from '../user/User.js';
import RaceResult from '../domain/RaceResult.js';

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

    const raceResult = new RaceResult(this.carManager.cars);
    const winners = raceResult.determineWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
