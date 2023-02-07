const InputView = require('./view/InputView');
const { Console } = require('@woowacourse/mission-utils');
const Validation = require('./Validation');

class App {
  play() {
    this.getCarNames();
  }

  getCarNames() {
    InputView.readCarNames(this.actionWithCarNames.bind(this));
  }

  actionWithCarNames(carNames) {
    const cars = carNames.split(',').map((car) => car.trim());
    Validation.validateCarNames(cars);
  }
}

new App().play();
