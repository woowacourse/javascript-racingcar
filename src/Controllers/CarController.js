import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { checkTryCountRange, checkIsInteger } from '../validates/tryCountValidates.js';
import { checkIsEmpty, checkCarNameLength, checkCarCount, checkCarNameDuplicate } from '../validates/carValidates.js';
import { splitString } from '../utils/separator.js';
import { stringToNumber } from '../utils/changeDataType.js';
import Car from '../Models/Car.js';

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
    this.printResult(cars, tryCount);
  }

  getCarName() {
    return InputView.inputCarName();
  }

  validateCarName(carNamesInput) {
    checkIsEmpty(carNamesInput);
    const carNames = splitString(carNamesInput);
    checkCarNameLength(carNames);
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

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  canMove() {
    const randomNumber = this.getRandomNumber();

    return randomNumber >= 4;
  }

  tryMove(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        car.updateHistory(this.canMove());
      });
    }
  }

  printResult(cars, tryCount) {
    console.log('실행 결과');
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        OutputView.printEachResult(car.name, car.history[i]);
      });
      console.log();
    }
  }
}

export default CarController;
