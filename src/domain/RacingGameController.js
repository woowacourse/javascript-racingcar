import RacingGame from './RacingGame.js';
import Validation from './Validation.js';
import { InputView, OutputView } from '../view/index.js';
import { Console, randomNumberGenerator } from '../utils/index.js';

export default class RacingGameController {
  #racingGame;

  async setupGame() {
    const carNames = await this.#requestCarNames();
    const raceRound = await this.#requestRaceRound();

    this.#racingGame = new RacingGame(carNames, raceRound);
  }

  playGame() {
    this.#startRace();
    this.#findWinners();
    this.#endRace();
  }

  async #requestCarNames() {
    const carNamesInput = await InputView.readCarNames();
    const carNames = carNamesInput.split(',').map((carName) => carName.trim());

    try {
      Validation.validateCarNames(carNames);

      return carNames;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);

      return this.#requestCarNames();
    }
  }

  async #requestRaceRound() {
    const raceRoundInput = await InputView.readRaceRound();
    const raceRound = Number(raceRoundInput);

    try {
      Validation.validateRaceRound(raceRound);

      return raceRound;
    } catch ({ message }) {
      OutputView.printErrorMessage(message);

      return this.#requestRaceRound();
    }
  }

  #startRace() {
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

  #endRace() {
    Console.close();
  }
}
