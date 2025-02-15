import Car from './Car.js';
import tryInput from '../view/tryInput.js';
import InputView from '../view/Input.js';
import { validateCarNames, validateRaceCount } from './validation.js';
import { SPLITTER } from '../constant/constant.js';

class RaceSetup {
  #carList;
  #raceCount;

  constructor() {
    this.#raceCount = 0;
  }

  async carList() {
    const carNames = await tryInput(InputView.readCarNames, validateCarNames);

    this.#carList = carNames.split(SPLITTER).map((name) => new Car(name));
  }

  async raceCount() {
    const raceCount = await tryInput(
      InputView.readRaceCount,
      validateRaceCount,
    );

    this.#raceCount = raceCount;
  }

  getCarList() {
    return this.#carList;
  }

  getRaceCount() {
    return this.#raceCount;
  }
}

export default RaceSetup;
