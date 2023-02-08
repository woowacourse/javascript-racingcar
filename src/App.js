const InputView = require('./view/InputView');
const Validation = require('./Validation');
const inputErrorHandler = require('./utils/inputErrorHandler');
const Car = require('./Car');

class App {
  #cars;

  play() {
    this.#requestCarNames();
  }

  #requestCarNames() {
    InputView.readCarNames((carNamesInput) => {
      const carNames = carNamesInput.split(',').map((carName) => carName.trim());
      const isValidInput = inputErrorHandler(Validation.validateCarNames, carNames);

      if (!isValidInput) {
        this.#requestCarNames();
        return;
      }

      this.#generateCars(carNames);
    });
  }

  #generateCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }
}

new App().play();
