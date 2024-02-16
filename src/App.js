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
    const tryCount = await retryWhenErrorOccurs(() => this.readTryCount());
    this.#raceManger = new RaceManager(carNames, tryCount);
    this.#raceManger.setResult();
    this.printResult();
  }

  async readCarNames() {
    const answer = await InputView.readLineAsync(MESSAGE.carNameInput).then(
      names => names.split(SEPARATOR.carName).map(string => string.trim())
    );
    const result = Validator.validateCars(answer);
    if (!result) throw new Error(MESSAGE.invalidCarName);
    return answer;
  }

  async readTryCount() {
    const answer = await InputView.readLineAsync(MESSAGE.tryCountInput);

    const result = Validator.validateTryCount(answer);
    if (!result) throw new Error(MESSAGE.invalidTryCount);
    return Number(answer);
  }

  printResult(isLineBreak = true) {
    if (isLineBreak) OutputView.lineBreak();
    OutputView.print(MESSAGE.resultOutput);

    OutputView.print(this.#raceManger.getResultString());
    OutputView.lineBreak();
    OutputView.print(this.#raceManger.getWinnerString());
  }
}
export default App;
