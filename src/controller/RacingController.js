const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');
const InputValidator = require('../utils/InputValidator.js');
const RacingGame = require('../domain/RacingGame.js');
const IO = require('../utils/IO.js');

class RacingController {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingGame();
  }

  setCarName() {
    InputView.readCarName((carNames) => {
      const carArr = carNames.split(',');

      this.#racingGame.car(carArr);
      this.judgeCarNamesProgress(carArr);
    });
  }

  judgeCarNamesProgress(carArr) {
    try {
      InputValidator.validateCarNames(carArr);
      this.setTryCount();
    } catch (error) {
      IO.print(error);
      this.setCarName();
    }
  }

  setTryCount() {
    InputView.readTryCount((tryCount) => {
      this.#racingGame.tryCount = tryCount;

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
      this.setTryCount();
    }
  }

  repeatMoveProcess() {
    for (let i = 0; i < this.#racingGame.tryCount; i++) {
      this.#racingGame.assignRandom();
      OutputView.printMoveProcess(this.#racingGame.car);
    }
  }

  showMoveResult() {
    OutputView.printMoveResult();
    OutputView.printMoveProcess(this.#racingGame.car);
    this.repeatMoveProcess();
  }

  showWinner() {
    OutputView.printWinner(this.#racingGame.findWinner());
  }

  conductProcess() {
    this.showMoveResult();
    this.showWinner();
    this.quitGame();
  }

  quitGame() {
    IO.close();
  }
}

module.exports = RacingController;
