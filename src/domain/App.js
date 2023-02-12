const RacingGame = require('./domain/RacingGame');
const Validation = require('./utils/Validation');
const OutputView = require('./view/OutputView');
const { Console } = require('./utils');
const { REQUEST_MESSAGE, RESULT_MESSAGE } = require('./constants/Constant');

class App {
  #racingGame;

  async play() {
    await this.createRacingGame();
    this.#raceCars();
    const winners = this.#findWinners();
    this.#showWinners(winners);
  }

  async createRacingGame() {
    const carNames = await this.#requestCarNames();
    const round = await this.#requestRaceRound();

    this.#racingGame = new RacingGame(carNames, round);
  }

  async #requestCarNames() {
    const carNamesInput = await Console.read(REQUEST_MESSAGE.carNames);
    const carNames = carNamesInput.split(',').map((carName) => carName.trim());
    try {
      Validation.validateCarNames(carNames);
      return carNames;
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
      return raceRound;
    } catch (e) {
      OutputView.print(e.message);
      await this.#requestRaceRound();
    }
  }

  #raceCars() {
    OutputView.print(RESULT_MESSAGE.opening);

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

  #showWinners(winners) {
    OutputView.printFinalResult(winners);
    Console.close();
  }
}

new App().play();
