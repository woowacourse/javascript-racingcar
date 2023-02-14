const RacingGame = require('./RacingGame');
const Validation = require('../utils/Validation');
const OutputView = require('../view/OutputView');
const { Console } = require('../utils');
const { REQUEST_MESSAGE, RESULT_MESSAGE } = require('../constants/Constant');

class GameController {
  #racingGame;

  async play() {
    await this.#createRacingGame();
    this.#raceCars();
    this.#showResult();
    this.#endGame();
  }

  async #createRacingGame() {
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
      return this.#requestCarNames();
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
      return this.#requestRaceRound();
    }
  }

  #raceCars() {
    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race();
    }
  }

  #showResult() {
    OutputView.print(RESULT_MESSAGE.opening);
    const finalResult = this.#racingGame.getFinalResult();
    const winners = this.#findWinners();
    OutputView.printFinalResult(finalResult);
    OutputView.printWinners(winners);
  }

  #findWinners() {
    const highestScore = this.#racingGame.getHighestScore();
    const winners = this.#racingGame.getWinners(highestScore);

    return winners;
  }

  #endGame() {
    Console.close();
  }
}

module.exports = GameController;
