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

      this.#racingGame.makeCarNameList(carArr);
      this.judgeCarNamesProgress(carArr);
    });
  }

  judgeCarNamesProgress(carArr) {
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
      this.judgeTryCountProgress(tryCount);
    });
  }

  judgeTryCountProgress(tryCount) {
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
