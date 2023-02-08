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
      Validation.validateCarNames(names);
      this.requestInputTryCount(names);
    });
  }

  requestInputTryCount(names) {
    InputView.readTryCount((tryCount) => {
      Validation.validateTryCount(tryCount);
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
    console.log("끝");
  }
}

const app = new App();
app.play();
