import InputView from './UI/InputView.js';
import OutputView from './UI/OutputView.js';
import Validator from './class/Validator.js';
import RaceManager from './class/RaceManager.js';
import CONSTANT from './CONSTANTS/index.js';
import retryWhenErrorOccurs from './utils/retryWhenErrorOccurs.js';

const { MESSAGE, SEPARATOR } = CONSTANT;

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
    const answer = await InputView.readNextLineAsync(MESSAGE.carNameInput).then(
      names => names.split(SEPARATOR.carName).map(string => string.trim())
    );
    const result = Validator.validateCars(answer);
    if (!result) throw new Error(MESSAGE.invalidCarName);
    return answer;
  }

  async readMaxTryCount() {
    const answer = await InputView.readNextLineAsync(MESSAGE.maxTryCountInput);

    const result = Validator.validateTryCount(answer);
    if (!result) throw new Error(MESSAGE.invalidMaxTryCount);
    return Number(answer);
  }

  printRace(isLineBreak = true) {
    if (isLineBreak) OutputView.lineBreak();
    OutputView.print(MESSAGE.resultOutput);

    OutputView.print(this.#raceManger.getProgressString());
    OutputView.lineBreak();
    OutputView.print(this.#raceManger.getWinnerString());
  }
}
export default App;
