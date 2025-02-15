import readLineAsync from './View/input.js';
import {
  validateCarsNameForm,
  validateDuplicatedCarName,
  validateCarsNameLength,
} from './Validation/carName.js';
import {
  validateGameCountRange,
  validateGameCountType,
} from './Validation/gameCount.js';

import Car from './Model/Car.js';
import outputView from './View/output.js';
import { INPUT } from './Constants/message.js';

class App {
  async getCarsName() {
    const input = await readLineAsync(`${INPUT.CARS_NAME}\n`);
    try {
      validateCarsNameLength(input);
      validateCarsNameForm(input);
      validateDuplicatedCarName(input);
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getCarsName();
    }
  }

  async getGameCount() {
    const input = await readLineAsync(`${INPUT.GAME_COUNT}\n`);
    try {
      validateGameCountType(input);
      validateGameCountRange(input);
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getGameCount();
    }
  }

  async run() {
    const carNames = await this.getCarsName();
    const cars = carNames.split(',').map((carName) => new Car(carName));
    const gameCount = Number(await this.getGameCount());

    outputView.printGameResult(gameCount, cars);

    outputView.printWinners(cars);
  }
}

export default App;
