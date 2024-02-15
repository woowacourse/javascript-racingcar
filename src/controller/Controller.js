import Cars from '../model/Cars.js';
import TryCount from '../model/TryCount.js';
import catchReturn from '../utils/catchReturn.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #cars;
  #tryCount;
  #outputView = new OutputView();

  async start() {
    await this.#input();
    this.#run();
    this.#printWinner();
  }

  async #input() {
    const inputView = new InputView();

    const names = await catchReturn(inputView.readCarNames);
    this.#cars = new Cars(names);

    const count = await catchReturn(inputView.readTryCount);
    this.#tryCount = new TryCount(count);
  }

  #run() {
    this.#outputView.printResultTitle();
    for (let i = 0; i < this.#tryCount.getTryCount(); i++) {
      const playResult = this.#cars.play();
      this.#outputView.printRacingResult(playResult);
    }
  }

  #printWinner() {
    const winners = this.#cars.winners();
    this.#outputView.printWinners(winners);
  }
}

export default Controller;
