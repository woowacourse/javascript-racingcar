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

      this.#racingGame.setCarsName(carArr);
      this.checkValidateCarNames(carArr);
    });
  }

  checkValidateCarNames(carArr) {
    try {
      InputValidator.validateCarNames(carArr);
      this.inputTryCount();
    } catch (error) {
      IO.print(error);
      this.inputCarName();
    }
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      this.#racingGame.setTryCount(tryCount);

      OutputView.printWhiteSpace();
      this.checkValidateTryCount(tryCount);
    });
  }

  checkValidateTryCount(tryCount) {
    try {
      InputValidator.validateTryCount(tryCount);
      this.conductProcess();
    } catch (error) {
      IO.print(error);
      this.inputTryCount();
    }
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
