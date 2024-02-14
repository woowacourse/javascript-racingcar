import CarService from '../service/CarService.js';
import InputView from '../view/InputView.js';

class Controller {
  #carService;

  async getCarNames() {
    const carNames = await InputView.readCarNames();
    this.#carService = new CarService(carNames);
  }

  async getMoveCount() {
    const moveCount = await InputView.readMoveCount();
    this.#carService.setMoveCount(moveCount);
  }
}

export default Controller;
