const InputView = require('../view/inputView');
const RacingCarGame = require('../model/RacingCarGame');

class Controller {
  constructor() {
    this.inputView = new InputView();
    this.RacingCarGame = new RacingCarGame();
  }

  async init() {
    const carNames = await this.inputView.readCarNames();
    const trialCount = await this.inputView.readCount();
    const result = this.racingCarGame.getResult(carNames, trialCount);
    await this.outputView.printResult(result);
  }
}

module.exports = Controller;
