import InputView from '../view/InputView.js';
import CommonValidator from '../validator/CommonValidator.js';
import CarNamesValidator from '../validator/CarNamesValidator.js';

class GameController {
  constructor() {
    this.input = new InputView();
  }

  async startGame() {
    const carNamesArr = await this.getCarNames();

    console.log(carNamesArr);
  }

  async getCarNames() {
    while (true) {
      try {
        const carNames = await this.input.inputCarName();

        CommonValidator.inputEmpty(carNames);
        CarNamesValidator.isValidFormat(carNames);

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
}

export default GameController;
