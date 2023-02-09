const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Validation = require('./Validation');
const inputErrorHandler = require('./utils/inputErrorHandler');
const Console = require('./utils/Console');
const RacingGame = require('./RacingGame');

class App {
  #racingGame;

  start() {
    this.#requestCarNames();
  }

  #requestCarNames() {
    InputView.readCarNames((carNamesInput) => {
      const carNames = carNamesInput.split(',').map((carName) => carName.trim());
      const isValidInput = inputErrorHandler(Validation.validateCarNames, carNames);

      if (!isValidInput) {
        this.#requestCarNames();
        return;
      }

      this.#requestRaceRound(carNames);
    });
  }

  #requestRaceRound(carNames) {
    InputView.readRaceRound((raceRoundInput) => {
      const raceRound = Number(raceRoundInput);
      const isValidInput = inputErrorHandler(Validation.validateRaceRound, raceRound);

      if (!isValidInput) {
        this.#requestRaceRound(carNames);
        return;
      }

      this.#racingGame = new RacingGame(carNames, raceRound);

      this.#raceCars();
    });
  }

  #raceCars() {
    OutputView.print('\n실행 결과');

    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race();

      const roundResult = this.#racingGame.getRoundResult();

      OutputView.printRoundResult(roundResult);
    }
    this.#findWinners();
  }

  #findWinners() {
    const highestScore = this.#racingGame.getHighestScore();
    const winners = this.#racingGame.getWinners(highestScore);

    this.#endGame(winners);
  }

  #endGame(winners) {
    OutputView.printFinalResult(winners);
    Console.close();
  }
}

new App().start();
