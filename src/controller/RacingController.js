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

  inputCarNames() {
    InputView.readCarNames((carNames) => {
      const carArr = carNames.split(',');
      this.setCarNames(carArr);
    });
  }

  setCarNames(carArr) {
    InputValidator.handleException(
      () => InputValidator.validateCarNames(carArr),
      () => {
        this.#racingGame.cars = carArr;
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
    this.#racingGame.tryCount = tryCount;
    this.conductProcess();
  }

  conductProcess() {
    OutputView.printWhiteSpace();
    OutputView.printMoveResult();
    this.printProcess(this.#racingGame.cars);
    this.printWinner(this.#racingGame.findWinner());
    this.quitGame();
  }

  printProcess(cars) {
    OutputView.printMoveProcess(cars);

    for (let i = 0; i < this.#racingGame.tryCount; i++) {
      this.#racingGame.assignRandom();
      OutputView.printMoveProcess(cars);
    }
  }

  printWinner(winner) {
    OutputView.printWinner(winner);
  }

  quitGame() {
    IO.close();
  }
}

module.exports = RacingController;
