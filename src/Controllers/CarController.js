import { InputView } from '../Views/InputView.js';
class CarController {
  run() {
    const carNamesInput = this.getCarName();
    const carNames = this.validateCarName();

    // const tryCountInput = await readLineAsync('시도할 횟수는 몇 회인가요?\n');
    // const tryCount = stringToNumber(tryCountInput);
    // checkTryCountRange(tryCount);
    // checkIsInteger(tryCount)
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

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  canMove() {
    const randomNumber = this.getRandomNumber();

    return randomNumber >= 4;
  }
}

export default CarController;
