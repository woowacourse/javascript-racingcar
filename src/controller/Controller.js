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
      this.outputView.printError(err);
      this.execute();

      return;
    }

    try {
      trialCount = await this.inputView.readCount(); 
    } catch(err) {
      this.outputView.printError(err);
      trialCount = await this.inputView.readCount();
      const result = this.racingCarGame.getResult(carNames, trialCount);
<<<<<<< HEAD
      this.outputView.printResult(result);
      this.outputView.close();

      return;
=======
      return this.outputView.printResult(result);
>>>>>>> 4e22939 (fix: not execute rest code after handling invalid input)
    }
    const result = this.racingCarGame.getResult(carNames, trialCount);
    this.outputView.printResult(result);
    this.outputView.close();
  }
}

module.exports = Controller;
