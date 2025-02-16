import Race from '../domain/Race.js';
import WinnerSelector from '../domain/WinnerSelector.js';
import InputHandler from '../view/InputHandler.js';
import OutputHandler from '../view/OutputHandler.js';

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
      const carNames = await InputHandler.carNamesInput();
      this.#race.initCars(carNames);
    } catch (error) {
      console.log(error.message);
      await this.initCarNamesInput();
    }
  }

  async initTryCountInput() {
    try {
      const tryCount = await InputHandler.tryCountInput();
      this.#race.initTryCount(tryCount);
    } catch (error) {
      console.log(error.message);
      await this.initTryCountInput();
    }
  }

  outputRaceResult() {
    const raceHistory = this.#race.raceHistory;
    const maxRounds = Math.max(...Array.from(raceHistory.values()).map((arr) => arr.length));

    OutputHandler.printResultStartMessage();
    for (let round = 0; round < maxRounds; round++) {
      raceHistory.forEach((history, carName) => {
        if (round < history.length) {
          OutputHandler.printEachResult(carName, history[round]);
        }
      });
      OutputHandler.printEmptyLine();
    }
  }

  outputWinner() {
    const winnerNames = this.#winnerSelector.winners.map((winner) => winner.name);

    OutputHandler.printWinner(winnerNames);
  }
}

export default GameController;
