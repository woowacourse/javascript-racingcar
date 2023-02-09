const RacingGame = require("./domain/RacingGame");
const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const Validation = require("./domain/Validation");
const handleError = require("./util/handleError");
class App {
  #racingGame;

  play() {
    this.requestInputCarNames();
  }

  requestInputCarNames() {
    InputView.readCarNames((names) => {
      if (!handleError(Validation.validateCarNames.bind(Validation), names)) {
        this.requestInputCarNames();
        return;
      }
      this.requestInputTryCount(names);
    });
  }

  requestInputTryCount(names) {
    InputView.readTryCount((tryCount) => {
      if (!handleError(Validation.validateTryCount.bind(Validation), tryCount)) {
        this.requestInputTryCount();
        return;
      }
      this.#racingGame = new RacingGame(names, tryCount);
      this.race();
    });
  }

  race() {
    OutputView.printRacingStart();
    while (!this.#racingGame.isGameComplete()) {
      this.#racingGame.raceOneTurn();
      const carsResultOfOneTurn = this.#racingGame.getCarsResultOfOneTurn();
      OutputView.printOneTurnResult(carsResultOfOneTurn);
    }
    this.finishRace();
  }

  finishRace() {
    const winners = this.#racingGame.getWinners();
    OutputView.printWinners(winners);
    InputView.close();
  }
}

const app = new App();
app.play();
