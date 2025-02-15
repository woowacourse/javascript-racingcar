import splitInput from './utils/splitInput.js';
import NameValidator from './utils/validator/NameValidator.js';
import CountValidator from './utils/validator/CountValidator.js';
import InputView from './view/InputView.js';
import parseToNumber from './utils/parseToNumber.js';
import Car from './domain/Car.js';
import Racing from './domain/Racing.js';
import Printer from './view/Printer.js';
import InputMessage from './constants/InputMessage.js';
import getRandomNumber from './utils/getRandomNumber.js';
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_NUMBER,
} from './constants/RacingConstants.js';

class App {
  async run() {
    const cars = await this.createCars();
    const tryCount = await this.askTryCount();

    const racing = new Racing(cars);
    racing.runRace(App.generateTotalRaceMoves(tryCount, cars));

    const raceResult = racing.decideWinner();
    Printer.printWinner(raceResult);
  }

  async createCars() {
    try {
      const carNameInput = await InputView.readLineAsync(
        InputMessage.getCarName,
      );
      const parsedCarName = splitInput(carNameInput);

      NameValidator.isValid(parsedCarName);

      return parsedCarName.map((carName) => new Car(carName));
    } catch (error) {
      console.log(error.message);
      return this.createCars();
    }
  }

  async askTryCount() {
    try {
      const tryCount = await InputView.readLineAsync(InputMessage.getTryCount);
      const parsedTryCount = parseToNumber(tryCount);

      CountValidator.isValid(parsedTryCount);

      return parsedTryCount;
    } catch (error) {
      console.log(error.message);
      return this.askTryCount();
    }
  }

  static generateTotalRaceMoves(tryCount, cars) {
    const turns = Array.from({ length: tryCount });
    const totalCarNumbers = cars.length;
    return turns.map(() => this.generateIsMoveList(totalCarNumbers));
  }

  static generateIsMoveList(totalCarNumbers) {
    const isMoveList = Array.from({ length: totalCarNumbers });
    return isMoveList.map(() => {
      const randomNumber = getRandomNumber(
        MIN_RANDOM_NUMBER,
        MAX_RANDOM_NUMBER,
      );

      return randomNumber >= MOVE_NUMBER;
    });
  }
}

export default App;
