const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const Validator = require('../utils/Validator.js');
const RacingGame = require('../model/RacingGame.js');

const IO = require('../utils/IO.js');

class RacingController {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingGame();
  }

  inputCarName() {
    InputView.readCarName((carNames) => {
      const carArr = carNames.split(',');
      Validator.validateCarNames(carArr);
      this.#racingGame.setCarsName(carArr);

      this.inputTryCount();
    });
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      Validator.validateTryCount(tryCount);
      this.#racingGame.setTryCount(tryCount);

      OutputView.printWhiteSpace();

      this.conductProcess();
    });
  }

  conductProcess() {
    this.#racingGame.repeatProcess();
    this.#racingGame.printWinner();
    this.quitGame();
  }

  quitGame() {
    IO.close();
  }
}

module.exports = RacingController;
