const InputView = require('../view/InputView');
const RacingCarGame = require('../model/RacingCarGame');
const OutputView = require('../view/OutputView');

class Controller {
  constructor() {
    this.inputView = new InputView();
    this.racingCarGame = new RacingCarGame();
    this.outputView = new OutputView();
  }

  async execute() {
    let carNames;
    let trialCount;

    try {
      carNames = await this.inputView.readCarNames();
    } catch(err) {
      console.log(err.name);
      this.execute();
    }

    try {
      trialCount = await this.inputView.readCount(); 
    } catch(err) {
      console.log(err.name);
      trialCount = await this.inputView.readCount();
      const result = this.racingCarGame.getResult(carNames, trialCount);
      this.outputView.printResult(result);
    }

    const result = this.racingCarGame.getResult(carNames, trialCount);
    this.outputView.printResult(result);
  }
}

module.exports = Controller;
