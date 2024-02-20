import InputView from './view/class/InputView.js';
import OutputView from './view/class/OutputView.js';
import Validator from './domain/class/Validator.js';
import CONSTANTS from './CONSTANTS/index.js';
import retryWhenErrorOccurs from './utils/retryWhenErrorOccurs.js';

import RaceStaff from './domain/class/RaceStaff.js';
import CarMover from './domain/class/CarMover.js';
import getRandomNumberInRange from './utils/getRandomNumberInRange.js';

const { separator, numeric } = CONSTANTS;

const moveByRandom = () => {
  const randomNumber = getRandomNumberInRange(
    numeric.RANDOM_NUMBER_LOWER,
    numeric.RANDOM_NUMBER_UPPER
  );
  return randomNumber >= numeric.MOVE_STANDARD;
};

class App {
  #carMover;

  constructor(
    moveFunction = moveByRandom,
    moveDistance = numeric.MOVE_DISTANCE
  ) {
    this.#carMover = new CarMover(moveFunction, moveDistance);
  }

  async run() {
    const carNames = await this.#readGuarunteedCarNames();
    const maxTryCount = await this.#readGuarunteedMaxTryCount();

    const raceStaff = new RaceStaff(this.#carMover);
    const raceResult = raceStaff.getResult(carNames, maxTryCount);

    this.#printRace(raceResult);
  }

  async #readGuarunteedCarNames() {
    return await retryWhenErrorOccurs(() => this.#readCarNames());
  }

  async #readGuarunteedMaxTryCount() {
    return await retryWhenErrorOccurs(() => this.#readMaxTryCount());
  }

  async #readCarNames() {
    const carNames = (await InputView.readCarNames()).split(separator.CAR_NAME);

    Validator.validateCarNames(carNames);
    return carNames;
  }

  async #readMaxTryCount() {
    const maxTryCountString = await InputView.readMaxTryCount();

    Validator.validateMaxTryCountString(maxTryCountString);
    return Number(maxTryCountString);
  }

  #printRace(raceResult, isLineBreak = true) {
    OutputView.printRaceHeader(isLineBreak);

    OutputView.printProgressMapArray(raceResult.getAllProgressMap());
    OutputView.printWinnersName(raceResult.getWinnersNames());
  }
}
export default App;
