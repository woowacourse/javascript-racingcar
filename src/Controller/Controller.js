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
      this.inputTryCountHandler();
    } catch (error) {
      this.inputCarNameHandler();
    }
  }

  inputTryCountHandler() {
    InputView.readTryCount(this.tryCountHandler.bind(this));
  }

  tryCountHandler(tryCount) {
    try {
      Validation.validateTryCount(tryCount);
    } catch (error) {
      this.inputTryCountHandler();
    }
  }
}

module.exports = Controller;
