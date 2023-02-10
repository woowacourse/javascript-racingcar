import { NAME_DELIMITER, MOVE_NUMBER } from './Template/index.js';
import Car from './models/Car.js';
import Console from './utils/Console.js';
import randomNumberInRange from './utils/RandomNumberInRange.js';
import Validator from './utils/Validator.js';
import View from './View.js';

class Controller {
  #cars;

  constructor() {
    this.#cars = [];
  }

  async play() {
    await this.#initCars();
    this.#raceStart(await this.#initCount());
    this.#presentWinner();
    Console.close();
  }

  async #initCars() {
    View.naming();
    const names = await this.#readNames();
    names.forEach((name) => {
      this.#cars.push(new Car(name));
    });
  }

  async #initCount() {
    View.tryCount();
    const moveCount = await this.#readTryCount();
    const viewCount = moveCount + 1;
    View.newLine();

    return { moveCount, viewCount };
  }

  #raceStart({ moveCount, viewCount }) {
    View.resultTitle();
    for (let count = 0; count < viewCount; count++) {
      View.carProgress(this.#getCarsData());
      if (count === moveCount) break;
      this.#cars.forEach(this.#judgeMove);
    }
  }

  #judgeMove(car) {
    const { randomMin, randomMax, threshold } = MOVE_NUMBER;
    if (randomNumberInRange(randomMin, randomMax) >= threshold) car.move();
  }

  #presentWinner() {
    View.winner(this.#judgeWinner());
  }

  #judgeWinner() {
    const carsData = this.#getCarsData();
    const max = Math.max(...carsData.map((car) => car.distance));
    return carsData.filter((car) => car.distance === max).map((car) => car.name);
  }

  #getCarsData() {
    return this.#cars.map((car) => {
      return { name: car.getName(), distance: car.getDistance() };
    });
  }

  async #readNames() {
    try {
      const input = await Console.read();
      Validator.checkNames(input);
      return input.split(NAME_DELIMITER);
    } catch (e) {
      View.error(e);
      return this.#readNames();
    }
  }

  async #readTryCount() {
    try {
      const input = await Console.read();
      Validator.checkIntegerNumber(input);
      return Number(input);
    } catch (e) {
      View.error(e);
      return this.#readTryCount();
    }
  }
}

export default Controller;
