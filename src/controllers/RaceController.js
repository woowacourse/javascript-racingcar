import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';

class RaceController {
  #race;

  async startSetup() {
    const carNames = await InputView.readCarNames();
    const raceStep = await InputView.readRaceStep();

    this.#race = new Race(carNames);
    this.#race.setRaceStep(raceStep);
  }

  startRace() {
    OutputView.printRaceTitle();

    while (!this.#race.isRaceEnd()) {
      this.#race.moveOnce();

      const raceStates = this.#race.getRaceStates();
      OutputView.printRaceState(raceStates);
    }
  }

  endRace() {
    OutputView.printWinners(this.#race.findWinnerNames());
  }
}

export default RaceController;
