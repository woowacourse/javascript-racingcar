import MESSAGES from '../constants/Messages.js';
import OutputView from '../views/outputView.js';

class WinnerService {
  #carList;

  constructor(carList) {
    this.#carList = carList;
  }

  findWinner() {
    const positions = this.#carList.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);
    const carNames = this.#carList.map(car => car.getName());
    return carNames.filter((_, i) => positions[i] === maxPosition);
  }
}

export default WinnerService;
