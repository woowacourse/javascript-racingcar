import Cars from '../model/Cars.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

class Controller {
  #cars;

  constructor() {
    this.#cars = new Cars();
  }

  async inputCarNames() {
    const namesInput = await InputView.readCarNames();
    const carsNames = namesInput.split(',');

    this.#cars.setCars(carsNames);
  }
}

export default Controller;
