import InputView from '../Views/InputView.js';
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

    tryMove(cars);
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

  tryMove(cars) {
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        if (this.canMove()) car.movePosition();
      });
    }
  }
}

export default CarController;
