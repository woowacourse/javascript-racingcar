const RacingGame = require('./RacingGame');
const Validation = require('./Validation');
const OutputView = require('./view');
const { Console } = require('./utils');
const { REQUEST_MESSAGE } = require('./constants/Constant');

class App {
  #racingGame;

  async play() {
    this.#racingGame = new RacingGame();
    await this.#requestCarNames();
    await this.#requestRaceRound();
    this.#raceCars();
    const winners = this.#findWinners();
    this.#endGame(winners);
  }

  async #requestCarNames() {
    const carNamesInput = await Console.read(REQUEST_MESSAGE.carNames);
    const carNames = carNamesInput.split(',').map((carName) => carName.trim());
    try {
      Validation.validateCarNames(carNames);
      this.#racingGame.setCars(carNames);
    } catch (e) {
      OutputView.print(e.message);
      await this.#requestCarNames();
    }
  }

  async #requestRaceRound() {
    const raceRoundInput = await Console.read(REQUEST_MESSAGE.raceRound);
    const raceRound = Number(raceRoundInput);
    try {
      Validation.validateRaceRound(raceRound);
      this.#racingGame.setRound(raceRound);
    } catch (e) {
      OutputView.print(e.message);
      await this.#requestRaceRound();
    }
  }

  #raceCars() {
    OutputView.printResultMessage();

    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race();

      const roundResult = this.#racingGame.getRoundResult();

      OutputView.printRoundResult(roundResult);
    }
  }

  #findWinners() {
    const highestScore = this.#racingGame.getHighestScore();
    const winners = this.#racingGame.getWinners(highestScore);

    return winners;
  }

  #endGame(winners) {
    OutputView.printFinalResult(winners);
    Console.close();
  }
}

new App().play();
