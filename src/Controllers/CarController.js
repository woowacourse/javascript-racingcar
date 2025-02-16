import Car from '../Models/Car.js';
import Race from '../Models/Race.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { PRINT_MESSAGE } from '../constants/message.js';

class CarController {
  async run() {
    const cars = await this.getCars();
    const tryCount = await this.getTryCount();
    const race = this.startRace(cars, tryCount);

    this.showResult(race);
  }

  generateCar(carNamesInput) {
    const carNames = carNamesInput.split(',').map((str) => str.trim());
    return carNames.map((name) => new Car(name, carNames));
  }

  async getCars() {
    const carNamesInput = await InputView.inputCarName();
    return this.generateCar(carNamesInput);
  }

  async getTryCount() {
    return await InputView.inputTryCount();
  }

  startRace(cars, tryCount) {
    const race = new Race(cars, tryCount);
    race.movePosition();
    return race;
  }

  outputResult(cars, tryCount) {
    OutputView.printMessage(PRINT_MESSAGE.RUN_RESULT);
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => {
        OutputView.printEachResult(car.name, car.getHistory(i));
      });
      OutputView.printMessage('');
    }
  }

  showResult(race) {
    this.outputResult(race.cars, race.tryCount);
    const winners = race.getWinner();
    OutputView.printWinner(winners);
  }
}

export default CarController;
