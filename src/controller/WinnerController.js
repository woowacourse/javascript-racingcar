import MESSAGES from '../constant/Messages.js';
import CONDITIONS from '../constant/Conditions.js';

import WinnerService from '../model/service/WinnerService.js';

import OutputView from '../view/OutputView.js';

class WinnerController {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  run() {
    const winnerMessage = MESSAGES.winnerHeader + this.findWinners().join(CONDITIONS.winnerResultSeparator);
    OutputView.print(winnerMessage);
  }

  findWinners() {
    return new WinnerService(this.#cars).findWinners();
  }
}

export default WinnerController;
