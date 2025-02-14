import getRandomNumber from './utils/getRandomNumber.js';
import Printer from './Printer.js';
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_NUMBER,
} from './constants/RacingConstants.js';
import { OutputMessage } from './constants/OutputMessage.js';

class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  raceTurn() {
    const randomNum = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNum >= MOVE_NUMBER) {
      this.#cars.forEach((car) => {
        car.move();
      });
    }
  }

  runRace(tryCount) {
    let currentCount = 0;

    Printer.printHeader(OutputMessage.resultHeader);

    while (currentCount < tryCount) {
      this.raceTurn();
      const result = this.getCarInfo(this.#cars);

      Printer.printRacingResult(result);
      currentCount += 1;
    }
  }

  getCarInfo() {
    const result = this.#cars.map((car) => {
      const position = car.getCarPosition();
      const name = car.getName();
      return { name, position };
    });

    return result;
  }

  decideWinner() {
    const results = this.getCarInfo();
    const positions = results.map((result) => result.position);
    const maxPosition = Math.max(...positions);
    return results.filter((result) => result.position === maxPosition);
  }
}

export default Racing;
