import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import RaceManager from "./domain/RaceManager";
import retryWhenErrorOccurs from "./utils/retryWhenErrorOccurs";

class App {
  #raceManger;

  async run() {
    const carNames = await this.readCarNames();
    const tryCount = await this.readTryCount();

    this.startRaceGame(carNames, tryCount);

    this.printResult();
  }

  async readCarNames() {
    return retryWhenErrorOccurs(() => InputView.readCarNames());
  }

  async readTryCount() {
    return retryWhenErrorOccurs(() => InputView.readTryCount());
  }

  startRaceGame(carNames, tryCount) {
    this.#raceManger = new RaceManager(carNames, tryCount);
    this.#raceManger.setResult();
  }

  printResult() {
    OutputView.printResult(this.#raceManger);
    OutputView.printWinner(this.#raceManger);
  }
}

export default App;
