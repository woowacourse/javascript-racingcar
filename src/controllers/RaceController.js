import Car from '../models/Car';
import Race from '../models/Race';
import Console from '../utils/Console';
import InputView from '../views/InputView';
import OutputView from '../views/OutputView';

class RaceController {
  /** @type {Race} */
  #race;

  /** @type {number} */
  #step;

  async startSetup() {
    const carNames = await InputView.readCarNames();
    const cars = carNames.map((carName) => new Car(carName));
    this.#race = new Race(cars);

    this.#step = await InputView.readRaceStep();
  }

  startRace() {
    OutputView.printRaceStateTitle();
    Array.from({ length: this.#step }).forEach(() => {
      this.#race.moveOnce();
      OutputView.printRaceState(this.#race.getCars());
    });
  }

  endRace() {
    OutputView.printWinners(this.#race.getWinners());
    Console.close();
  }
}

export default RaceController;
