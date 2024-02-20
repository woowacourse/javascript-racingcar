import InputView from './view/InputView';
import Validation from './Validation';
import OutputView from './view/OutputView';
import RaceProgress from './domain/RaceProgress';
import Car from './domain/Car';

export default class Game {
  async play() {
    const carNames = await Game.getCarNamesArray();
    const cars = this.createRaceProgress(carNames);
    const tryCount = await Game.getTryCount();
    const eachStepCarsResults = Game.getMovingCarsResults(cars, tryCount);
    OutputView.printEachStepResult(eachStepCarsResults);
    OutputView.printWinner(cars.findWinners());
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

  createRaceProgress(carNames = []) {
    const carArray = carNames.map((carName) => new Car(carName));
    return new RaceProgress(carArray);
  }

  static getMovingCarsResults(cars = {}, tryCount = 0) {
    return Array.from({ length: tryCount }, () => {
      cars.moveAllCars();
      return cars.getEachStepString();
    });
  }
}
