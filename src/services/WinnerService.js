import MESSAGES from '../constants/Messages.js';
import OutputView from '../views/outputView.js';

class WinnerService {
  #carNames;
  #positions;

  constructor(cars) {
    [this.#carNames, this.#positions] = cars.getState();
  }

  findWinner() {
    const max = Math.max(...this.#positions);
    return this.#carNames.filter((_, i) => this.#positions[i] === max);
  }
}

export default WinnerService;
