import InputView from './view/InputView';
import OutputView from './view/OutputView';
import Cars from './domain/Cars';

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
        const carNames = await this.carNamesStringToCarNamesArray();
        Cars.carNamesValidate(carNames);
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
        Cars.tryCountValidate(tryCountString);
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
}
