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
      return carNames.split(',').map((carName) => carName.trim());
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
    const tryCount = await this.#processTryCount();

    this.#carRace = new CarRace(carNames, tryCount);
  }

  #playCarRace() {
    Console.print(MESSAGES.result);

    const totalRoundResult = this.#carRace.makeTotalRoundResult();
    totalRoundResult.forEach((roundResult) => {
      OutputView.printRoundResult(roundResult);
      OutputView.printBlankLine();
    });
  }

  #announceWinners() {
    const winners = this.#carRace.judgeWinners();
    OutputView.printWinners(winners);
  }

  async run() {
    await this.#initCarRace();
    this.#playCarRace();
    this.#announceWinners();
  }
}

export default RaceController;
