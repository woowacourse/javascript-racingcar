const RacingGame = require('./domain/RacingGame');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validator = require('./domain/Validator');
const handleError = require('./util/handleError');
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
      const carsResultOfOneTurn = this.#racingGame.getAccumulatedDistancern();
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
