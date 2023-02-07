const InputView = require('../View/InputView');
const Validation = require('../Validation');

class Controller {
  init() {
    this.inputCarNameHandler();
  }

  inputCarNameHandler() {
    InputView.readCarName(this.carNameHandler.bind(this));
  }

  carNameHandler(carName) {
    try {
      const carNames = carName.split(',').map((name) => name.trim());
      Validation.validateCarName(carNames);
    } catch (error) {
      this.inputCarNameHandler();
    }
  }
}

module.exports = Controller;
