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

  inputCarNames() {
    InputView.readCarName((carNames) => {
      const carArr = carNames.split(',');
      this.setCarNames(carArr);
    });
  }

  setCarNames(carArr) {
    InputValidator.handleException(
      () => InputValidator.validateCarNames(carArr),
      () => {
        this.#racingGame.setCars(carArr);
        this.inputTryCount();
      },
      () => this.inputCarNames()
    );
  }

  inputTryCount() {
    InputView.readTryCount((tryCount) => {
      InputValidator.handleException(
        () => InputValidator.validateTryCount(tryCount),
        () => this.setInputTryCount(tryCount),
        () => this.inputTryCount()
      );
    });
  }

  setInputTryCount(tryCount) {
    this.#racingGame.setTryCount(tryCount);
    this.conductProcess();
  }

  conductProcess() {
    OutputView.printWhiteSpace();
    this.#racingGame.repeatProcess();
    this.#racingGame.printWinner();
    this.quitGame();
  }

  quitGame() {
    IO.close();
  }
}

module.exports = RacingController;
