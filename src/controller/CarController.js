import Race from '../domain/Race.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import ValidateModule from '../validator/ValidatorModule.js';

class CarController {
  async run() {
    const carNames = await this.getValidatedCarNames();
    const tryCount = await this.getValidatedTryCount();

    const race = new Race(carNames, tryCount);

    race.raceStart();
    this.outputResult(race.cars, tryCount);

    const winners = this.getWinner(race.cars);
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

  outputResult(cars, tryCount) {
    OutputView.printMessage('\n실행 결과');
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        OutputView.printEachResult(car.name, car.history[i]);
      });
      OutputView.printMessage('');
    }
  }

  getWinner(cars) {
    const finalPosition = cars.map((car) => car.position);
    const maxPosition = Math.max(...finalPosition);

    const winner = cars.filter((car) => car.position === maxPosition).map((car) => car.name);

    return winner;
  }

  outputWinner(winners) {
    OutputView.printWinner(winners);
  }
}

export default CarController;
