const InputView = require('../view/InputView');
const RacingCarGame = require('../model/RacingCarGame');
const OutputView = require('../view/OutputView');

class Controller {
  #inputView;
  #outputView;
  #racingCarGame;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#racingCarGame 
      = new RacingCarGame(this.#inputView.readCarNameList(), this.#inputView.readNumberOfTrials());
  }

  executeRacingCarGame() {
    this.outputView.printResult(this.#racingCarGame.getResult());
    this.outputView.close();
  }
}

module.exports = Controller;
