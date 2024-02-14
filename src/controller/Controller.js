import CarGame from '../model/CarGame.js';
import Preprocessor from '../utils/Preprocessor.js';
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
        const carsNames = Preprocessor.filterOutEmptyStrings(
          namesInput.split(',')
        );

        return this.#cars.setCars(carsNames);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  // TODO: 예외처리 모듈화
  async inputTryCount() {
    while (1) {
      try {
        const tryCount = await InputView.readTryCount();
        this.#cars.setTryCount(tryCount);
      } catch (error) {
        OutputView.printErrorMessage(error.message);
      }
    }
  }
}

export default Controller;
