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
    const carNames = await this.getValidatedCarNames();
    this.#race.initCars(carNames);

    const tryCount = await this.getValidatedTryCount();
    this.#race.initTryCount(tryCount);

    this.#race.raceStart();
    this.outputRaceResult();

    this.#winnerSelector.calculateWinners(this.#race.cars);
    this.outputWinner();
  }

  async getValidatedCarNames() {
    const input = await InputView.inputCarName();
    ValidateModule.validateCarInput(input);
    const carNames = input.split(',').map((str) => str.trim());
    return carNames;
  }

  async getValidatedTryCount() {
    const input = await InputView.inputTryCount();
    ValidateModule.validateTryCountInput(input);
    const tryCount = Number(input);
    return tryCount;
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
