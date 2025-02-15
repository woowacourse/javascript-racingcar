import getRandomNumber from '../utils/getRandomNumber.js';
import Printer from '../view/Printer.js';
import IO_MESSAGE from '../constants/IO_MESSAGE.js';
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MOVE_NUMBER,
} from '../constants/MAGIC_NUMBER.js';

class Racing {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
  }

  raceTurn() {
    const randomNum = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

    this.#cars.forEach((car) => {
      if (randomNum >= MOVE_NUMBER) {
        car.move();
      }
    });
    return this.getCarInfo(this.#cars);
  }

  runRace() {
    for (let count = 0; count < this.#tryCount; count++) {
      const result = this.raceTurn();
      Printer.printRacingResult(result);
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
