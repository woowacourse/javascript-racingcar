const InputView = require('../view/InputView');
const RacingCarGame = require('../model/RacingCarGame');
const OutputView = require('../view/OutputView');

class Controller {
  #inputView;
  #outputView;
  #racingCarGame;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = new OutputView ();
  }

  async createRacingCarGame() {
    const carNameList = await this.#inputView.readCarNameList();
    const numberOfTrials = await this.#inputView.readNumberOfTrials();
    this.#racingCarGame = new RacingCarGame(carNameList, numberOfTrials)
  }

  executeRacingCarGame() {
    this.#racingCarGame.play();
    
    this.#outputView.printResult(this.#racingCarGame.getGameResult());
    this.#outputView.close();
  }
}

module.exports = Controller;
