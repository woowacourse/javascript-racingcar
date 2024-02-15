import CarRace from '../domains/CarRace.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import carNamesValidator from '../validators/carNamesValidator';
import tryCountValidator from '../validators/tryCountValidator';
import { MESSAGES } from '../constants/car-race.js';

class RaceController {
  #carRace;

  constructor() {
    this.#carRace = null;
  }

  async #processCarNames() {
    try {
      const carNames = await InputView.readCarNames();
      carNamesValidator.validate(carNames);
      return carNames;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#processCarNames();
    }
  }

  async #processTryCount() {
    try {
      const tryCount = await InputView.readTryCount();
      tryCountValidator.validate(tryCount);
      return tryCount;
    } catch (error) {
      OutputView.printMessage(error.message);
      return this.#processTryCount();
    }
  }

  async #initCarRace() {
    const carNames = await this.#processCarNames();
    this.#carRace = new CarRace(carNames);

    const tryCount = await this.#processTryCount();
    return tryCount;
  }

  async #playCarRace(tryCount) {
    OutputView.printMessage(MESSAGES.result);

    Array.from({ length: tryCount }, () => {
      const roundResult = this.#carRace.makesRoundResult();
      OutputView.printRoundResult(roundResult);
      OutputView.printBlankLine();
    });
  }

  #announceWinners() {
    const winners = this.#carRace.judgeWinners();
    OutputView.printWinners(winners);
  }

  async run() {
    const tryCount = await this.#initCarRace();
    await this.#playCarRace(tryCount);
    this.#announceWinners();
  }
}

export default RaceController;
