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
    await this.initialize();
    await this.executeRace();
    this.announceWinners();
  }

  async initialize() {
    const carNames = await this.user.readCarNames();
    this.carManager = new CarManager(carNames);
  }

  async executeRace() {
    const attempts = await this.user.readAttempts();
    OutputView.printResultGreeting();

    for (let i = 0; i < attempts; i++) {
      this.carManager?.race();
      OutputView.printRaceStatus(this.carManager?.cars);
    }
  }

  announceWinners() {
    const raceResult = new RaceResult(this.carManager?.cars);
    const winners = raceResult.determineWinners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
