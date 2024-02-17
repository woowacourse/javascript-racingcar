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

  async getCarNames() {
    while(true){
      try {
        const carNames = await Game.carNamesStringToCarNamesArray();
        Validation.carNamesValidate(carNames);
        return carNames;
      } catch (error) {
        OutputView.printError(error);
        continue;
      }
    }
  }

  static async getTryCount() {
    while(true) {
      try {
        const tryCountString = await InputView.queryTryCount();
        Validation.tryCountValidate(tryCountString);
        return Number(tryCountString);
      } catch (error) {
        OutputView.printError(error);
        continue;
      }
    }
  }
  async carNamesStringToCarNamesArray() {
    const carNames = await InputView.queryCarName();
    return carNames.split(',');
  }
  moveCars(cars = {}, tryCount = 0) {
    OutputView.printResultTitle();
    for (let i = 0; i < tryCount; i++) {
      cars.moveAllCars();
      OutputView.printEachStepResult(cars);
    }
  }
}
