const InputView = require('../view/InputView');
const RacingCarGame = require('../model/RacingCarGame');
const OutputView = require('../view/OutputView');

class Controller {
  constructor() {
    this.inputView = new InputView();
    this.racingCarGame = new RacingCarGame();
    this.outputView = new OutputView();
  }

  async init() {
    const carNames = await this.inputView.readCarNames();
    const trialCount = await this.inputView.readCount();
    const result = this.racingCarGame.getResult(carNames, trialCount);
    this.outputView.printResult(result);
  }
}

module.exports = Controller;
