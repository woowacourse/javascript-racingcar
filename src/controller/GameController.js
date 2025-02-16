import Race from '../domain/Race.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import ValidateModule from '../validator/ValidatorModule.js';
import WinnerSelector from '../domain/WinnerSelector.js';

class GameController {
  #race;
  #winnerSelector;

  constructor() {
    this.#race = new Race();
    this.#winnerSelector = new WinnerSelector();
  }
  async run() {
    await this.initCarNamesInput();
    await this.initTryCountInput();

    this.#race.raceStart();
    this.outputRaceResult();

    this.#winnerSelector.calculateWinners(this.#race.cars);
    this.outputWinner();
  }

  async initCarNamesInput() {
    try {
      const carNames = await InputView.carNamesInput();
      this.#race.initCars(carNames);
    } catch (error) {
      console.log(error.message);
      await this.initCarNamesInput();
    }
  }

  async initTryCountInput() {
    try {
      const tryCount = await InputView.tryCountInput();
      this.#race.initTryCount(tryCount);
    } catch (error) {
      console.log(error.message);
      await this.initTryCountInput();
    }
  }

  outputRaceResult() {
    const raceHistory = this.#race.raceHistory;
    const maxRounds = Math.max(...Array.from(raceHistory.values()).map((arr) => arr.length));

    OutputView.printResultStartMessage();
    for (let round = 0; round < maxRounds; round++) {
      raceHistory.forEach((history, carName) => {
        if (round < history.length) {
          OutputView.printEachResult(carName, history[round]);
        }
      });
      OutputView.printEmptyLine();
    }
  }

  outputWinner() {
    const winnerNames = this.#winnerSelector.winners.map((winner) => winner.name);

    OutputView.printWinner(winnerNames);
  }
}

export default GameController;
