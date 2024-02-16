import MESSAGES from '../constants/Messages.js';
import OutputView from '../views/outputView.js';

class WinnerService {
  #carNames;
  #positions;

  constructor(carsState) {
    [this.#carNames, this.#positions] = carsState;
  }

  findWinner() {
    const max = Math.max(...this.#positions);
    return this.#carNames.filter((_, i) => this.#positions[i] === max);
  }
}

export default WinnerService;
