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
    this.#cars = await catchReturn(this.#getCars);
    this.#tryCount = await catchReturn(this.#getCount);
  }

  async #getCars() {
    const names = await InputView.readCarNames();
    return new Cars(names);
  }

  async #getCount() {
    const count = await InputView.readTryCount();
    return new TryCount(count);
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
