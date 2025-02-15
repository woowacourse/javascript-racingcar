import Car from '../Models/Car.js';
import Race from '../Models/Race.js';
import InputView from '../Views/InputView.js';
import OutputView from '../Views/OutputView.js';
import { PRINT_MESSAGE } from '../constants/message.js';

class CarController {
  async run() {
    const carNamesInput = await InputView.inputCarName();
    const carNames = carNamesInput.split(',').map((str) => str.trim());
    const cars = carNames.map((name) => new Car(name, carNames));

    const tryCountInput = await InputView.inputTryCount();
    const race = new Race(cars, tryCountInput);
    race.movePosition();

    this.outputResult(race.cars, race.tryCount);
    const winners = race.getWinner();
    OutputView.printWinner(winners);
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
}

export default CarController;
