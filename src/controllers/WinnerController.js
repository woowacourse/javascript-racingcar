import MESSAGES from '../constants/Messages.js';
import CONDITIONS from '../constants/Conditions.js';

import WinnerService from '../services/WinnerService.js';

import OutputView from '../views/OutputView.js';

class WinnerController {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  run() {
    const winnerMessage = MESSAGES.winnerHeader + this.findWinners().join(CONDITIONS.WINNER_RESULT_SEPARATOR);
    OutputView.print(winnerMessage);
  }

  findWinners() {
    return new WinnerService(this.#cars).findWinners();
  }
}

export default WinnerController;
