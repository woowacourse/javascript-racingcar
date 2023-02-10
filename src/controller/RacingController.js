const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const InputValidator = require('../utils/InputValidator.js');
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
      InputValidator.validateCarNames(carArr);
      this.#racingGame.setCarsName(carArr);

      this.inputTryCount();
    });
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      InputValidator.validateTryCount(tryCount);
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
