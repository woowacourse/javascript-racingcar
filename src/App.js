const InputView = require('./view/InputView');
const { Console } = require('@woowacourse/mission-utils');

class App {
  play() {
    this.getCarNames();
  }

  getCarNames() {
    InputView.readCarNames((carNames) => {
      Console.print(carNames);
    });
  }
}

new App().start();
