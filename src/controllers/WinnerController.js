import MESSAGES from '../constants/Messages.js';
import OutputView from '../views/outputView.js';

class WinnerController {
  #carNames;
  #positions;

  constructor(cars) {
    [this.#carNames, this.#positions] = cars.getState();
  }

  run() {
    const SEPERATOR = ', ';
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(SEPERATOR);
    OutputView.print(winnerMessage);
  }

  findWinner() {
    const max = Math.max(...this.#positions);
    return this.#carNames.filter((_, i) => this.#positions[i] === max);
  }
}

export default WinnerController;
