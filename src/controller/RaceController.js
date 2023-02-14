import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class RaceController {
  #race;

  async setRaceCars() {
    const carNames = await InputView.readCarNames();

    this.#race = new Race(carNames);
  }

  static handleSetRaceCarsError(error) {
    OutputView.printError(error);
  }

  async setRaceStep() {
    const raceStep = await InputView.readRaceStep();

    this.#race.setRaceStep(raceStep);
  }

  static handleSetRaceStepError(error) {
    OutputView.printError(error);
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
