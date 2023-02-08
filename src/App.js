const InputView = require('./view/InputView');
const Validation = require('./Validation');
const inputErrorHandler = require('./utils/inputErrorHandler');

class App {
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
    });
  }
}

new App().play();
