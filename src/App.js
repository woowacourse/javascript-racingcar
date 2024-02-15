import InputView from './UI/InputView.js';
import OutputView from './UI/OutputView.js';
import retryWhenErrorOccurs from './utils/retryWhenErrorOccurs.js';
import RaceManager from './class/RaceManager.js';
import CONSTANT from './CONSTANTS/index.js';

const { MESSAGE, NUMERIC, SEPARATOR } = CONSTANT;

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
    const result = this.validateCars(answer);
    if (!result) throw new Error(MESSAGE.invalidCarName);
    return answer;
  }

  async readTryCount() {
    const answer = await InputView.readLineAsync(MESSAGE.tryCountInput);

    const result = this.validateTryCount(answer);
    if (!result) throw new Error(MESSAGE.invalidTryCount);
    return Number(answer);
  }

  printResult(isLineBreak = true) {
    if (isLineBreak) OutputView.lineBreak();
    OutputView.print(MESSAGE.resultOutput);

    OutputView.print(
      this.#raceManger.getResultString().join(MESSAGE.resultLineBreakMarkInRace)
    );
    OutputView.lineBreak();
    OutputView.print(this.#raceManger.getWinnerString());
  }

  validateCars(cars) {
    return (
      cars.every(
        name =>
          name.length >= NUMERIC.carNameLengthLower &&
          name.length <= NUMERIC.carNameLengthUpper
      ) && cars.length === new Set(cars).size
    );
  }

  validateTryCount(tryCount) {
    return /^[0-9]+$/.test(tryCount);
  }
}
export default App;
