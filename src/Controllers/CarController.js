import { InputView } from '../Views/InputView.js';
class CarController {
  async run() {
    const carNamesInput = await this.getCarName();
    const carNames = this.validateCarName();

    const tryCountInput = await this.getTryCount();
    const tryCount = this.validateTryCount();
  }

  getCarName() {
    return InputView.inputCarName();
  }

  validateCarName() {
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

  validateTryCount() {
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
