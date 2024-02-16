import CarRace from '../domains/CarRace.js';

import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

import carNamesValidator from '../validators/carNamesValidator';
import tryCountValidator from '../validators/tryCountValidator';
import { MESSAGES } from '../constants/car-race.js';
import Console from '../utils/Console.js';

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
      Console.print(error.message);
      return await this.#processCarNames();
    }
  }

  async #processTryCount() {
    try {
      const tryCount = await InputView.readTryCount();
      tryCountValidator.validate(tryCount);
      return tryCount;
    } catch (error) {
      Console.print(error.message);
      return await this.#processTryCount();
    }
  }

  async #initCarRace() {
    const carNames = await this.#processCarNames();
    this.#carRace = new CarRace(carNames);

    const tryCount = await this.#processTryCount();
    return tryCount;
  }

  async #playCarRace(tryCount) {
    Console.print(MESSAGES.result);

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
