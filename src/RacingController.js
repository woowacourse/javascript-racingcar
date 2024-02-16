import InputView from './InputView';
import Validation from './utils/Validation';
import OutputView from './OutputView';
import Cars from './Cars';

export class Game {
  async play() {
    const carNameArray = await Game.getCarNames();
    const cars = new Cars(carNameArray);
    const tryCount = await Game.getTryCount();

    Game.moveCars(cars, tryCount);
    OutputView.printWinner(cars.findWinners());
  }

  static async getCarNames() {
    try {
      const carNamesArray = await Game.carNamesToCarNamesArray();
      Validation.carNamesArrayValidate(carNamesArray);
      return carNamesArray;
    } catch (error) {
      OutputView.printError(error);
      return await Game.getCarNames();
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
  static moveCars(cars = {}, tryCount = 0) {
    OutputView.printResultTitle();
    for (let i = 0; i < tryCount; i++) {
      cars.moveAllCars();
      OutputView.printEachStepResult(cars);
    }
  }
}
