import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import RaceManager from "./domain/RaceManager";
import retryWhenErrorOccurs from "./utils/retryWhenErrorOccurs";

class App {
  #raceManager;

  async run() {
    const carNames = await this.#readCarNames();
    const tryCount = await this.#readTryCount();

    this.#startRaceGame(carNames, tryCount);

    this.#printResult();
    this.#printWinners();
  }

  async #readCarNames() {
    return retryWhenErrorOccurs(() => InputView.readCarNames());
  }

  async #readTryCount() {
    return retryWhenErrorOccurs(() => InputView.readTryCount());
  }

  #startRaceGame(carNames, tryCount) {
    this.#raceManager = new RaceManager(carNames, tryCount);
    this.#raceManager.setResult();
  }

  #printResult() {
    const tryCount = this.#raceManager.getTryCount();
    const raceResult = this.#raceManager.getResult();

    OutputView.printResult(tryCount, raceResult);
  }

  #printWinners() {
    const winners = this.#raceManager.getWinners();

    OutputView.printWinners(winners);
  }
}

export default App;
