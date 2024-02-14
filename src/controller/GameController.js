import InputView from '../view/InputView.js';
import CommonValidator from '../utils/CommonValidator.js';
import CarNamesValidator from '../utils/CarNamesValidator.js';
import TryCountValidator from '../utils/TryCountValidator.js';

class GameController {
  constructor() {
    this.input = new InputView();
  }

  async startGame() {
    const carNamesArr = await this.getCarNames();
    const tryCount = await this.getTryCount();

    console.log(carNamesArr, tryCount);
  }

  async getCarNames() {
    while (true) {
      try {
        const carNames = await this.input.inputCarName();

        CommonValidator.inputEmpty(carNames);

        const carNamesArr = carNames.split(',');

        CarNamesValidator.isValidCount(carNamesArr);
        CarNamesValidator.isDuplicate(carNamesArr);

        carNamesArr.forEach((carName) => {
          CarNamesValidator.isValidRange(carName);
        });

        return carNames.split(',');
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  async getTryCount() {
    while (true) {
      try {
        const tryCount = await this.input.inputTryCount();
        TryCountValidator.isNaturalNumber(Number(tryCount));
        return tryCount;
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}

export default GameController;
