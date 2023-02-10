const RacingGame = require('./RacingGame');
const Validation = require('./Validation');
const { InputView, OutputView } = require('./view');
const { Console } = require('./utils');
const generateRandomNumber = require('./utils/randomNumberGenerator');

class App {
  #racingGame;

  start() {
    this.#racingGame = new RacingGame();
    this.#requestCarNames();
  }

  #requestCarNames() {
    InputView.readCarNames((carNamesInput) => {
      const carNames = carNamesInput.split(',').map((carName) => carName.trim());
      try {
        Validation.validateCarNames(carNames);
        this.#racingGame.setCars(carNames);
        this.#requestRaceRound();
      } catch (e) {
        OutputView.print(e.message);
        this.#requestCarNames();
      }
    });
  }

  #requestRaceRound() {
    InputView.readRaceRound((raceRoundInput) => {
      const raceRound = Number(raceRoundInput);
      try {
        Validation.validateRaceRound(raceRound);
        this.#racingGame.setRound(raceRound);
        this.#raceCars();
      } catch (e) {
        OutputView.print(e.message);
        this.#requestRaceRound();
      }
    });
  }

  #raceCars() {
    OutputView.printResultMessage();

    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race(generateRandomNumber);

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
