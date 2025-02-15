import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { checkTryCountRange, checkIsInteger } from '../validates/tryCountValidates.js';
import { checkIsEmpty, checkCarCount, checkCarNameDuplicate } from '../validates/carValidates.js';
import { splitString } from '../utils/separator.js';
import { stringToNumber } from '../utils/changeDataType.js';
import Car from '../Models/Car.js';
import { getRandomNumber } from '../utils/randomNumber.js';

class CarController {
  async run() {
    const carNamesInput = await this.getCarName();
    const carNames = this.validateCarName(carNamesInput);

    const tryCountInput = await this.getTryCount();
    const tryCount = this.validateTryCount(tryCountInput);

    const cars = carNames.map((car) => {
      return new Car(car);
    });

    this.tryMove(cars, tryCount);
    this.outputResult(cars, tryCount);

    const winners = this.getWinner(cars);
    this.outputWinner(winners);
  }

  getCarName() {
    return InputView.inputCarName();
  }

  validateCarName(carNamesInput) {
    checkIsEmpty(carNamesInput);
    const carNames = splitString(carNamesInput);
    checkCarCount(carNames);
    checkCarNameDuplicate(carNames);
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
