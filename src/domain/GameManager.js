import Car from './Car.js';
import generateRandomNumber from '../util/generateRandomNumber.js';
import { CAR_NAME_DIVIDER, MAX_NUMBER, MIN_NUMBER } from '../util/Constant.js';

class GameManager {
  #cars = [];
  #tryCount;

  addCars(carNames) {
    carNames
      .split(CAR_NAME_DIVIDER)
      .forEach((carName) => this.#cars.push(new Car(carName)));
  }

  saveTryCount(tryCount) {
    this.#tryCount = tryCount;
  }

  moveCar() {
    this.#cars.forEach((car) => {
      car.move(this.generateRandomNumbers());
    });
  }

  generateRandomNumbers() {
    return new Array(this.#tryCount)
      .fill(null)
      .map(() => generateRandomNumber.generator(MIN_NUMBER, MAX_NUMBER));
  }

  getCarsStatus() {
    return {
      tryCount: this.#tryCount,
      carsStatus: this.#cars.map((car) => car.getStatus()),
    };
  }

  getWinner() {
    const highestPosition = this.getHighestPosition();
    return this.#cars
      .map((car) => car.getWinnerName(highestPosition))
      .filter((car) => car);
  }

  getHighestPosition() {
    const carsPosition = this.#cars.map((car) => car.getFinalPosition());
    return Math.max(...carsPosition);
  }
}

export default GameManager;
