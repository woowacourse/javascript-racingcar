import { MOVE_NUMBER } from './constants/index.js';
import Car from './domain/Car.js';
import randomNumberInRange from './utils/RandomNumberInRange.js';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class Controller {
  #cars;

  constructor() {
    this.#cars = [];
  }

  async play() {
    await this.#initCars();
    this.#raceStart(await this.#initCount());
    this.#presentWinner();
    InputView.close();
  }

  async #initCars() {
    OutputView.naming();
    const names = await InputView.readNames();
    this.#cars = names.map((name) => new Car(name));
  }

  async #initCount() {
    OutputView.tryCount();
    const count = await InputView.readTryCount();
    OutputView.newLine();

    return count;
  }

  #raceStart(count) {
    OutputView.resultTitle();
    OutputView.carProgress(this.#getCarsData());
    for (let i = 0; i < count; i += 1) {
      this.#cars.forEach(this.#judgeMove);
      OutputView.carProgress(this.#getCarsData());
    }
  }

  #judgeMove(car) {
    const { randomMin, randomMax, threshold } = MOVE_NUMBER;
    if (randomNumberInRange(randomMin, randomMax) >= threshold) car.move();
  }

  #presentWinner() {
    OutputView.winner(this.#judgeWinner());
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
}

export default Controller;
