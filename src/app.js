import NameValidator from './domain/validator/NameValidator.js';
import CountValidator from './domain/validator/CountValidator.js';
import InputView from './view/InputView.js';
import Car from './domain/Car.js';
import Racing from './domain/Racing.js';
import Printer from './view/Printer.js';
import InputMessage from './domain/constants/InputMessage.js';
import chooseRandomNumber from './domain/utils/chooseRandomNumber.js';
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_NUMBER,
} from './domain/constants/RacingConstants.js';
import { NAME_DELIMITER } from './domain/constants/ValidatorConstants.js';

class App {
  #cars;

  #racing;

  async run() {
    const cars = await this.#createCars();
    const tryCount = await this.#askTryCount();

    const racing = new Racing(cars);
    this.#cars = cars;
    this.#racing = racing;

    this.#playRacing(tryCount);

    this.#announceWinner();
  }

  async #createCars() {
    try {
      const carNamesInput = await InputView.readLineAsync(
        InputMessage.carNameQuestion,
      );
      const parsedCarNames = App.parseNames(carNamesInput);

      NameValidator.isValid(parsedCarNames);

      return parsedCarNames.map((carName) => new Car(carName));
    } catch (error) {
      console.log(error.message);
      return this.#createCars();
    }
  }

  async #askTryCount() {
    try {
      const tryCount = await InputView.readLineAsync(
        InputMessage.tryCountQuestion,
      );
      const parsedTryCount = App.parseTryCount(tryCount);

      CountValidator.isValid(parsedTryCount);

      return parsedTryCount;
    } catch (error) {
      console.log(error.message);
      return this.#askTryCount();
    }
  }

  #playRacing(tryCount) {
    Printer.printHeader();

    const totalRaceMoves = this.#generateTotalRaceMoves(tryCount);
    const results = this.#racing.runRace(totalRaceMoves);

    results.forEach((result) => {
      Printer.printRacingResult(result);
    });
  }

  #generateTotalRaceMoves(tryCount) {
    const turns = Array.from({ length: tryCount });
    const totalCarNumbers = this.#cars.length;
    return turns.map(() => App.generateIsMoveList(totalCarNumbers));
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

  #announceWinner() {
    const results = this.#cars.map((car) => car.getCarInfo());
    const raceResult = Racing.decideWinner(results);

    Printer.printWinner(raceResult);
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
