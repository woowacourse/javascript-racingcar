import InputView from '../Views/InputView.js';
import { checkTryCountRange, checkIsInteger } from '../validates/tryCountValidates.js';
import { checkIsEmpty, checkCarNameLength, checkCarCount, checkCarNameDuplicate } from '../validates/carValidates.js';
import { splitString } from '../utils/separator.js';
import { stringToNumber } from '../utils/changeDataType.js';

class CarController {
  async run() {
    const carNamesInput = await this.getCarName();
    const carNames = this.validateCarName(carNamesInput);

    const tryCountInput = await this.getTryCount();
    const tryCount = this.validateTryCount(tryCountInput);
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
}

export default CarController;
