const InputView = require('../view/inputView');

class Controller {
  constructor() {
    this.inputView = new InputView();
  }

  async init() {
    const carNames = await this.inputView.readCarNames();
    const trialCount = await this.inputView.readCount();
    const result = this.racingCarGame.getResult(carNames, trialCount);
    await this.outputView.printResult(result);
  }
}

module.exports = Controller;
