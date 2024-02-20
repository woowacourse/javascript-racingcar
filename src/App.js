import RaceGame from "./domain/RaceGame";
import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import retryWhenErrorOccurs from "./utils/retryWhenErrorOccurs";
import CONSTANT from "./constants";

const { SEPARATOR } = CONSTANT;

class App {
  async run() {
    const carNames = await this.#readCarNames();
    const tryCount = await this.#readTryCount();

    const { cars, winners } = this.#startRaceGame(carNames, tryCount);

    this.#printResult(tryCount, cars);
    this.#printWinners(winners);
  }

  async #readCarNames() {
    const answer = await retryWhenErrorOccurs(() => InputView.readCarNames());

    const carNames = answer
      .split(SEPARATOR.carName)
      .map((string) => string.trim());

    return carNames;
  }

  async #readTryCount() {
    const answer = await retryWhenErrorOccurs(() => InputView.readTryCount());

    return Number(answer);
  }

  #startRaceGame(carNames, tryCount) {
    return new RaceGame(carNames, tryCount).start();
  }

  #printResult(tryCount, cars) {
    OutputView.printResult(tryCount, cars);
  }

  #printWinners(winners) {
    OutputView.printWinners(winners);
  }
}

export default App;
