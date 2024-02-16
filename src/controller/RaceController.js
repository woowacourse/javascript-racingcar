import CarRace from "../domains/CarRace.js";

import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";

import carNamesValidator from "../validators/carNamesValidator";
import tryCountValidator from "../validators/tryCountValidator";
import { MESSAGES } from "../constants/car-race.js";
import processInputWithRetry from "../utils/processInputWithRetry.js";

class RaceController {
  #carRace;

  constructor() {
    this.#carRace = null;
  }

  async #processCarNames() {
    const carNames = processInputWithRetry(
      InputView.readCarNames.bind(InputView),
      carNamesValidator.validate.bind(carNamesValidator),
      OutputView.printMessage.bind(OutputView)
    );

    return carNames;
  }

  async #processTryCount() {
    const carNames = processInputWithRetry(
      InputView.readTryCount.bind(InputView),
      tryCountValidator.validate.bind(tryCountValidator),
      OutputView.printMessage.bind(OutputView)
    );

    return carNames;
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
