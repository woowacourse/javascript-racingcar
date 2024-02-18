import Cars from "../domain/Cars.js";
import TryCount from "../domain/TryCount.js";
import catchReturn from "../utils/catchReturn.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

class Controller {
  #cars;
  #tryCount;

  async start() {
    await this.#input();
    this.#run();
    this.#printWinner();
  }

  async #input() {
    const names = await catchReturn(InputView.readCarNames);
    this.#cars = new Cars(names);

    const count = await catchReturn(InputView.readTryCount);
    this.#tryCount = new TryCount(count);
  }

  #run() {
    OutputView.printResultTitle();
    for (let i = 0; i < this.#tryCount.getTryCount(); i++) {
      const playResult = this.#cars.play();
      OutputView.printRacingResult(playResult);
    }
  }

  #printWinner() {
    const winners = this.#cars.winners();
    OutputView.printWinners(winners);
  }
}

export default Controller;
