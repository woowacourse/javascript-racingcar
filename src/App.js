import InputView from './UI/InputView.js';
import OutputView from './UI/OutputView.js';
import Validator from './domain/class/Validator.js';
import RaceManager from './domain/class/RaceManager.js';
import CONSTANTS from './CONSTANTS/index.js';
import retryWhenErrorOccurs from './utils/retryWhenErrorOccurs.js';

const { message, separator } = CONSTANTS;

class App {
  #raceManger;

  async run() {
    const carNames = await retryWhenErrorOccurs(() => this.readCarNames());
    const maxTryCount = await retryWhenErrorOccurs(() =>
      this.readMaxTryCount()
    );
    this.#raceManger = new RaceManager(carNames, maxTryCount);
    this.printRace();
  }

  async readCarNames() {
    const answer = await InputView.readNextLineAsync(
      message.CAR_NAME_INPUT
    ).then(names =>
      names.split(separator.CAR_NAME).map(string => string.trim())
    );
    const result = Validator.validateCars(answer);
    if (!result) throw new Error(message.INVALID_CAR_NAME);
    return answer;
  }

  async readMaxTryCount() {
    const answer = await InputView.readNextLineAsync(
      message.MAX_TRY_COUNT_INPUT
    );

    const result = Validator.validateTryCount(answer);
    if (!result) throw new Error(message.INVALID_MAX_TRY_COUNT);
    return Number(answer);
  }

  printRace(isLineBreak = true) {
    if (isLineBreak) OutputView.lineBreak();
    OutputView.print(message.RESULT_OUTPUT);

    OutputView.print(this.#raceManger.getProgressString());
    OutputView.lineBreak();
    OutputView.print(this.#raceManger.getWinnerString());
  }
}
export default App;
