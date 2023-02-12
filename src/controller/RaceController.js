import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class RaceController {
  #race;

  static handleError(error) {
    OutputView.printError(error);
  }

  async setRaceCars() {
    const carNames = await InputView.readCarNames();

    this.#race = new Race(carNames);
  }

  async setRaceStep() {
    const raceStep = await InputView.readRaceStep();

    this.#race.setRaceStep(raceStep);
  }

  startRace() {
    OutputView.printRaceTitle();

    while (!this.#race.isRaceEnd()) {
      this.#race.moveOneStep();

      const raceStates = this.#race.getRaceStates();
      OutputView.printRaceState(raceStates);
    }
  }

  endRace() {
    const winnerNames = this.#race.findWinnerNames();
    OutputView.printWinners(winnerNames);
    InputView.close();
  }
}

export default RaceController;
