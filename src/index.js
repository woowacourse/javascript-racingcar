const RacingGame = require("./RacingGame");
const { readCarNames, readTryCount, close } = require("./InputView");
const Validation = require("./Validation");
class App {
  #racingGame;
  #tryCount;

  play() {
    this.requestInputCarNames();
  }

  requestInputCarNames() {
    readCarNames((names) => {
      Validation.validateCarNames(names);
      this.requestInputTryCount(names);
    });
  }

  requestInputTryCount(names) {
    readTryCount((tryCount) => {
      Validation.validateTryCount(tryCount);
      this.#racingGame = new RacingGame(names, tryCount);
    });
  }
}

const app = new App();
app.play();
