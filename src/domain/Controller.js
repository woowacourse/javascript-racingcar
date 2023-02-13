import { NAME_DELIMITER, MOVE_NUMBER } from '../Template/index.js';
import Car from './Car.js';
import Console from '../utils/Console.js';
import randomNumberInRange from '../utils/RandomNumberInRange.js';
import InputValidator from '../utils/Validator.js';
import View from '../view/index.js';

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
    const count = await this.#readTryCount();
    View.newLine();

    return count;
  }

  #raceStart(count) {
    View.resultTitle(this.#getCarsData());
    for (let i = 0; i < count; i += 1) {
      this.#cars.forEach(this.#judgeMove);
      View.carProgress(this.#getCarsData());
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
      InputValidator.checkNames(input);
      return input.split(NAME_DELIMITER);
    } catch (e) {
      View.error(e);
      return this.#readNames();
    }
  }

  async #readTryCount() {
    try {
      const input = await Console.read();
      InputValidator.checkIntegerNumber(input);
      return Number(input);
    } catch (e) {
      View.error(e);
      return this.#readTryCount();
    }
  }
}

export default Controller;
