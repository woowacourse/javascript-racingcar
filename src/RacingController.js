import InputView from './InputView.js';
import Validation from './utils/Validation.js';
import OutputView from './OutputView.js';
import Cars from './Cars.js';

export class Game {
  async start() {
    const carNameArray = await Game.getCarNamesArray();
    const cars = new Cars(carNameArray);
    const tryCount = await Game.getTryCount();
    Game.moveCars(cars, tryCount);
  }

  static async getCarNamesArray() {
    try {
      const carNamesArray = await Game.carNamesToCarNamesArray();
      Validation.carNamesArrayValidate(carNamesArray);
      return carNamesArray;
    } catch (error) {
      OutputView.printError(error);
      return await Game.getCarNamesArray();
    }
  }

  static async getTryCount() {
    try {
      const tryCountString = await InputView.queryTryCount();
      Validation.tryCountValidate(tryCountString);
      return Number(tryCountString);
    } catch (error) {
      OutputView.printError(error);
      return await Game.getTryCount();
    }
  }
  static async carNamesToCarNamesArray() {
    const carNames = await InputView.queryCarName();
    return carNames.split(',');
  }
  static moveCars(cars, tryCount) {
    OutputView.printResultTitle();
    for (let i = 0; i < tryCount; i++) {
      cars.moveAllCars();
      OutputView.printEachStepResult(cars);
    }
  }
}
