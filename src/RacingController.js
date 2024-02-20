import InputView from './view/InputView';
import OutputView from './view/OutputView';
import Cars from './domain/Cars';
import StringHandler from './utils/StringHandler';

export class Game {
  async play() {
    const carNameArray = await this.getCarNames();
    const cars = new Cars(carNameArray);
    const tryCount = await this.getTryCount();
    OutputView.printResultTitle();
    for (let i = 0; i < tryCount; i++) {
      cars.moveAllCars();
      OutputView.printEachStepResult(cars);
    }
    OutputView.printWinner(cars.findWinners());
  }

  async getCarNames() {
    while(true){
      try {
        const carNamesSting = await InputView.queryCarName();
        const carNames = StringHandler.stringToArray(carNamesSting);
        Cars.validateCarNames(carNames);
        return carNames;
      } catch (error) {
        OutputView.printError(error);
        continue;
      }
    }
  }

  async getTryCount() {
    while(true) {
      try {
        const tryCountString = await InputView.queryTryCount();
        Cars.validateTryCount(tryCountString);
        return Number(tryCountString);
      } catch (error) {
        OutputView.printError(error);
        continue;
      }
    }
  }
}
