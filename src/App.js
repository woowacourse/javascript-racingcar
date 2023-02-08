const InputView = require('./view/InputView');
const Validation = require('./Validation');

class App {
  play() {
    this.#requestCarNames();
  }

  #requestCarNames() {
    InputView.readCarNames((carNames) => {
      const cars = carNames.split(',').map((carName) => carName.trim());
      Validation.validateCarNames(cars);
    });
  }
}

new App().play();
