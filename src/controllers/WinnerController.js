import MESSAGES from '../constants/Messages.js';
import WinnerService from '../services/WinnerService.js';
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
    return new WinnerService([this.#carNames, this.#positions]).findWinner();
  }
}

export default WinnerController;
