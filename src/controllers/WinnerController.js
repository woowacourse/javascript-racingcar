import MESSAGES from '../constants/Messages.js';
import WinnerService from '../services/WinnerService.js';
import OutputView from '../views/OutputView.js';

class WinnerController {
  #carNames;
  #positions;

  constructor(carList) {
    this.#carNames = carList.getNames();
    this.#positions = carList.getPositions();
  }

  run() {
    const SEPERATOR = ', ';
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(SEPERATOR);
    OutputView.print(winnerMessage);
  }

  findWinner() {
    return new WinnerService(this.#carNames, this.#positions).findWinner();
  }
}

export default WinnerController;
