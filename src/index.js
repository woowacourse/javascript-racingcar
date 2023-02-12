import RacingGame from "./domain/RacingGame.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import Validator from "./domain/Validator.js";
import handleError from "./util/handleError.js";

class App {
  #racingGame;

  play() {
    this.requestInputCarNames();
  }

  requestInputCarNames() {
    InputView.readCarNames((names) => {
      if (!handleError(Validator.validateCarNames.bind(Validator), names)) {
        this.requestInputCarNames();
        return;
      }
      this.requestInputTryCount(names);
    });
  }

  requestInputTryCount(names) {
    InputView.readTryCount((tryCount) => {
      if (!handleError(Validator.validateTryCount.bind(Validator), tryCount)) {
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
