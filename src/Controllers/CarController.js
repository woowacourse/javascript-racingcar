import Race from '../Models/Race.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { stringToNumber } from '../utils/changeDataType.js';
import { getRandomNumber } from '../utils/randomNumber.js';
import ValidateModule from '../validates/ValidatorModule.js';
import { checkIsInteger, checkTryCountRange } from '../validates/tryCountValidates.js';

class CarController {
  async run() {
    const carNames = await this.getValidatedCarNames();

    const tryCountInput = await this.getTryCount();
    const tryCount = this.validateTryCount(tryCountInput);

    const race = new Race(carNames, tryCount);

    this.tryMove(race.cars, tryCount);
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

  getTryCount() {
    return InputView.inputTryCount();
  }

  validateTryCount(tryCountInput) {
    const tryCount = stringToNumber(tryCountInput);
    checkTryCountRange(tryCount);
    checkIsInteger(tryCount);
    return tryCount;
  }

  canMove() {
    const randomNumber = getRandomNumber(0, 9);

    return randomNumber >= 4;
  }

  tryMove(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        car.updateHistory(this.canMove());
      });
    }
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
