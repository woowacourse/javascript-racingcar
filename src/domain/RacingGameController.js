import RacingGame from './RacingGame.js';
import Validation from './Validation.js';
import { InputView, OutputView } from '../view/index.js';
import { inputErrorHandler, Console, randomNumberGenerator } from '../utils/index.js';

export default class RacingGameController {
  #racingGame;

  async setupGame() {
    const carNames = await this.#requestCarNames();
    const raceRound = await this.#requestRaceRound();

    this.#racingGame = new RacingGame(carNames, raceRound);
  }

  playGame() {
    this.#raceCars();
    this.#findWinners();
    this.#endGame();
  }

  async #requestCarNames() {
    const carNamesInput = await InputView.readCarNames();
    const carNames = carNamesInput.split(',').map((carName) => carName.trim());

    const isValidInput = inputErrorHandler(Validation.validateCarNames, carNames);
    if (!isValidInput) {
      return this.#requestCarNames();
    }

    return carNames;
  }

  async #requestRaceRound() {
    const raceRoundInput = await InputView.readRaceRound();
    const raceRound = Number(raceRoundInput);

    const isValidInput = inputErrorHandler(Validation.validateRaceRound, raceRound);
    if (!isValidInput) {
      return this.#requestRaceRound();
    }

    return raceRound;
  }

  #raceCars() {
    OutputView.printResultMessage();

    while (this.#racingGame.isPlaying()) {
      this.#racingGame.race(randomNumberGenerator);

      const roundResult = this.#racingGame.getRoundResult();

      OutputView.printRoundResult(roundResult);
    }
  }

  #findWinners() {
    const highestScore = this.#racingGame.getHighestScore();
    const winners = this.#racingGame.getWinners(highestScore);

    OutputView.printFinalResult(winners);
  }

  #endGame() {
    Console.close();
  }
}
