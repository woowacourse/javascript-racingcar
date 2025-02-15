import NameValidator from './domain/validator/NameValidator.js';
import CountValidator from './domain/validator/CountValidator.js';
import InputView from './view/InputView.js';
import Car from './domain/Car.js';
import Racing from './domain/Racing.js';
import Printer from './view/Printer.js';
import InputMessage from './constants/InputMessage.js';
import chooseRandomNumber from './domain/utils/chooseRandomNumber.js';
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_NUMBER,
} from './constants/RacingConstants.js';
import { NAME_DELIMITER } from './constants/ValidatorConstants.js';

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
      const carNamesInput = await InputView.readLineAsync(
        InputMessage.carNameQuestion,
      );
      const parsedCarNames = App.parseNames(carNamesInput);

      NameValidator.isValid(parsedCarNames);

      return parsedCarNames.map((carName) => new Car(carName));
    } catch (error) {
      console.log(error.message);
      return this.createCars();
    }
  }

  async askTryCount() {
    try {
      const tryCount = await InputView.readLineAsync(
        InputMessage.tryCountQuestion,
      );
      const parsedTryCount = App.parseTryCount(tryCount);

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
      const randomNumber = chooseRandomNumber(
        MIN_RANDOM_NUMBER,
        MAX_RANDOM_NUMBER,
      );

      return randomNumber >= MOVE_NUMBER;
    });
  }

  static parseNames(names) {
    return names.split(NAME_DELIMITER).map((name) => name.trim());
  }

  static parseTryCount(tryCount) {
    if (tryCount === '' || tryCount === null) {
      return NaN;
    }

    return Number(tryCount);
  }
}

export default App;
