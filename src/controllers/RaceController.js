import { ErrorMessages } from '../constants/Messages';
import Race from '../models/Race';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class RaceController {
  #race;
  #step;

  async startSetup() {
    const carNames = await InputView.readCarNames();
    const raceStep = await InputView.readRaceStep();

    RaceController.#validateRaceStep(raceStep);

    this.#race = new Race(carNames);
    this.#step = raceStep;
  }

  static #validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) throw new Error(ErrorMessages.RACE_STEP_NOT_INTEGER);

    if (Number(raceStep) < 0) throw new Error(ErrorMessages.RACE_STEP_NOT_POSITIVE);
  }

  startRace() {
    OutputView.printRaceStateTitle();

    for (let i = 0; i < this.#step; i += 1) {
      this.#race.moveOnce();
      OutputView.printRaceState(this.#race.getCars());
    }
  }

  endRace() {
    OutputView.printWinners(this.#race.getWinners());
  }
}

export default RaceController;
