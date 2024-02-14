import CarGame from '../model/CarGame.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #cars;

  constructor() {
    this.#cars = new CarGame();
  }

  // TODO: 예외처리 모듈화
  async inputCarNames() {
    while (1) {
      try {
        const namesInput = await InputView.readCarNames();
        const carsNames = namesInput.split(',');

        return this.#cars.setCars(carsNames);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  // TODO: 예외처리 모듈화
  async inputTryCount() {
    const tryCount = await InputView.readTryCount();
    this.#cars.setTryCount(tryCount);
  }
}

export default Controller;
