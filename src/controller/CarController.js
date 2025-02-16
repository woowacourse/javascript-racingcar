import Race from '../domain/Race.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import ValidateModule from '../validator/ValidatorModule.js';
import WinnerSelector from '../domain/WinnerSelector.js';

class CarController {
  async run() {
    const carNames = await this.getValidatedCarNames();
    const tryCount = await this.getValidatedTryCount();

    const race = new Race(carNames, tryCount);
    race.raceStart();
    this.outputRaceResult(race.raceHistory);

    const winnerSelector = new WinnerSelector();
    winnerSelector.calculateWinners(race.cars);
    const winners = winnerSelector.winners;

    this.outputWinner(winners);
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

  outputRaceResult(raceHistory) {
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

  outputWinner(winners) {
    OutputView.printWinner(winners);
  }
}

export default CarController;
