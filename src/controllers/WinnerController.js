import MESSAGES from '../constants/messages.js';
import OutputView from '../views/outputView.js';

class WinnerController {
  #carNames;
  #positions;

  constructor(cars) {
    [this.#carNames, this.#positions] = cars.getState();
  }

  findWinner() {
    const max = Math.max(...this.#positions);
    return this.#carNames.filter((_, i) => this.#positions[i] === max);
  }

  run() {
    const SEPERATOR = ', ';
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(SEPERATOR);
    OutputView.print(winnerMessage);
  }
}

export default WinnerController;
