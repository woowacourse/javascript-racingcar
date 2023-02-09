import { NAME_DELIMITER, MOVE_NUMBER } from './constants';
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
    View.naming();
    const names = await this.readNames();
    names.forEach((name) => {
      this.#cars.push(new Car(name));
    });

    View.tryCount();
    let count = await this.readTryCount();

    View.newLine();
    View.result();
    View.carResult(this.getCarInfoList());
    while (count >= 1) {
      count -= 1;
      this.#cars.forEach((car) => {
        const { randomMin, randomMax, threshold } = MOVE_NUMBER;
        if (randomNumberInRange(randomMin, randomMax) >= threshold) car.move();
      });

      View.carResult(this.getCarInfoList());
    }

    View.winnerResult(this.judgeWinner());
    Console.close();
  }

  async readNames() {
    try {
      const input = await Console.read();
      Validator.checkName(input);
      Validator.checkDuplicate(input);
      return input.split(NAME_DELIMITER);
    } catch (e) {
      View.error(e);
      return await this.readNames();
    }
  }

  async readTryCount() {
    try {
      const input = await Console.read();
      Validator.checkIntegerNumber(input);
      return Number(input);
    } catch (e) {
      View.error(e);
      return await this.readTryCount();
    }
  }

  judgeWinner() {
    const carInfoList = this.getCarInfoList();
    const max = Math.max(...carInfoList.map((carInfo) => carInfo.distance));
    return carInfoList.filter((carInfo) => carInfo.distance === max).map((carInfo) => carInfo.name);
  }

  getCarInfoList() {
    return this.#cars.map((car) => {
      return { name: car.getName(), distance: car.getDistance() };
    });
  }
}

export default Controller;
