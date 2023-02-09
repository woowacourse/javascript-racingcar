const RacingGame = require("./RacingGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
class App {
  #racingGame;

  play() {
    this.requestInputCarNames();
  }

  requestInputCarNames() {
    InputView.readCarNames((names) => {
      if (!this.handleError(Validation.validateCarNames.bind(Validation), names)) {
        this.requestInputCarNames();
        return;
      }
      this.requestInputTryCount(names);
    });
  }

  requestInputTryCount(names) {
    InputView.readTryCount((tryCount) => {
      if (!this.handleError(Validation.validateTryCount.bind(Validation), tryCount)) {
        this.requestInputTryCount();
        return;
      }
      this.#racingGame = new RacingGame(names, tryCount);
      this.playRancingGame();
    });
  }

  playRancingGame() {
    OutputView.printRacingStart();
    while (!this.#racingGame.isGameComplete()) {
      this.#racingGame.moveOneTurn();
      const carsResultOfOneTurn = this.#racingGame.getCarsResultOfOneTurn();
      OutputView.printOneTurnResult(carsResultOfOneTurn);
    }
    this.finishGame();
  }

  finishGame() {
    const winners = this.#racingGame.getWinners();
    OutputView.printWinners(winners);
    InputView.close();
  }

  handleError(validateFunction, input) {
    try {
      validateFunction(input);
      return true;
    } catch (error) {
      OutputView.printErrorMessage(error);
      return false;
    }
  }
}

const app = new App();
app.play();
