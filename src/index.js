const RacingGame = require("./RacingGame");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const Validation = require("./Validation");
class App {
  #racingGame;
  #tryCount;

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
    });
  }
}

const app = new App();
app.play();
