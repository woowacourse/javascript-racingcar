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
    const winners = [];
    for (let i = 0; i < this.#positions.length; i++) {
      if (this.#positions[i] === max) {
        winners.push(this.#carNames[i]);
      }
    }
    return winners;
  }

  run() {
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(', ');
    OutputView.print(winnerMessage);
  }
}

export default WinnerController;
