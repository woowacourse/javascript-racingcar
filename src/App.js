import InputView from './UI/InputView.js';
import OutputView from './UI/OutputView.js';
import Validator from './domain/class/Validator.js';
import RaceManager from './domain/class/RaceManager.js';
import CONSTANTS from './CONSTANTS/index.js';
import retryWhenErrorOccurs from './utils/retryWhenErrorOccurs.js';

import RaceStaff from './domain/class/RaceStaff.js';
import CarMover from './domain/class/CarMover.js';
import getRandomNumberInRange from './utils/getRandomNumberInRange.js';

const { message, separator, numeric } = CONSTANTS;

class App {
  #carMover;

  constructor(
    moveFunction = () => {
      const nowNumber = getRandomNumberInRange(
        numeric.RANDOM_NUMBER_LOWER,
        numeric.RANDOM_NUMBER_UPPER
      );
      return nowNumber >= numeric.MOVE_STANDARD;
    },
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
    const carNames = (
      await InputView.readNextLineAsync(message.CAR_NAME_INPUT)
    ).split(separator.CAR_NAME);
    Validator.validateCarNames(carNames);
    return carNames;
  }

  async #readMaxTryCount() {
    const maxTryCountString = await InputView.readNextLineAsync(
      message.MAX_TRY_COUNT_INPUT
    );

    Validator.validateMaxTryCountString(maxTryCountString);
    return Number(maxTryCountString);
  }

  // printRace(isLineBreak = true) {
  //   if (isLineBreak) OutputView.lineBreak();
  //   OutputView.print(message.RESULT_OUTPUT);

  //   OutputView.print(this.#raceManger.getProgressString());
  //   OutputView.lineBreak();
  //   OutputView.print(this.#raceManger.getWinnerString());
  // }
}
export default App;
