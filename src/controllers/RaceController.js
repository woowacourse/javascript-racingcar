import Race from '../models/Race';
import Console from '../utils/Console';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class RaceController {
  #race;

  #step;

  async startSetup() {
    const carNames = await InputView.readCarNames();
    const raceStep = await InputView.readRaceStep();

    this.#race = new Race(carNames);
    this.#step = raceStep;
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
    Console.close();
  }
}

export default RaceController;
