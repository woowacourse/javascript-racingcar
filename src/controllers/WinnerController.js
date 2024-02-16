import MESSAGES from '../constants/Messages.js';
import WinnerService from '../services/WinnerService.js';
import OutputView from '../views/outputView.js';

class WinnerController {
  #carList;

  constructor(cars) {
    this.#carList = cars.getCarList();
  }

  run() {
    const SEPERATOR = ', ';
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(SEPERATOR);
    OutputView.print(winnerMessage);
  }

  findWinner() {
    return new WinnerService(this.#carList).findWinner();
  }
}

export default WinnerController;
