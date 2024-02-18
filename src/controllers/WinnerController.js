import CONDITIONS from '../domain/constants/Conditions.js';
import MESSAGES from '../domain/constants/Messages.js';
import WinnerService from '../domain/services/WinnerService.js';
import OutputView from '../view/OutputView.js';

class WinnerController {
  #carList;

  constructor(cars) {
    this.#carList = cars.getCarList();
  }

  run() {
    const winnerMessage = MESSAGES.winnerHeader + this.findWinner().join(CONDITIONS.winnerSeperator);
    OutputView.print(winnerMessage);
  }

  findWinner() {
    return new WinnerService(this.#carList).findWinner();
  }
}

export default WinnerController;
