const RacingGame = require('./RacingGame');
const Validation = require('./Validation');
const { InputView, OutputView } = require('./view');
const { inputErrorHandler, Console, randomNumberGenerator } = require('./utils');

class App {
  #racingGame;

  start() {
    this.#racingGame = new RacingGame();
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
      this.#racingGame.setCars(carNames);
      this.#requestRaceRound();
    });
  }

  #requestRaceRound() {
    InputView.readRaceRound((raceRoundInput) => {
      const raceRound = Number(raceRoundInput);
      const isValidInput = inputErrorHandler(Validation.validateRaceRound, raceRound);

      if (!isValidInput) {
        this.#requestRaceRound();
        return;
      }
      this.#racingGame.setRound(raceRound);
      this.#raceCars();
    });
  }

  #raceCars() {
    OutputView.printResultMessage();

    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race(randomNumberGenerator);

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
