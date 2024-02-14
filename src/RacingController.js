import InputView from './InputView';
import Validation from './utils/Validation';
import OutputView from './OutputView';
import Cars from './Cars';

class Game {
  async start() {
    const carNameArray = await Game.getCarNamesArray();
    const cars = new Cars(carNameArray);
    const tryCount = await Game.getTryCount();
  }

  static getCarNamesArray() {
    try {
      const carNamesArray = Game.carNamesToCarNamesArray();
      Validation.carNamesArrayValidate(carNamesArray.name);
      return carNamesArray;
    } catch (error) {
      OutputView.printError(error);
      Game.getCarNamesArray();
    }
  }

  static async getTryCount() {
    try {
      const tryCountString = await InputView.queryTryCount();
      Validation.tryCountValidate(tryCountString);
      return Number(tryCountString);
    } catch (error) {
      OutputView.printError(error);
      Game.getTryCount();
    }
  }
  static async carNamesToCarNamesArray() {
    const carNames = await InputView.queryCarName();
    return carNames.split(',');
  }
}
