import { createRandom } from '../utils/Random.js';
import Car from './Car.js';

export default class Game {
  #carList;
  inputTryNumber;

  constructor() {
    this.#carList = [];
  }

  setInputTryNumber(number) {
    this.inputTryNumber = number;
  }

  createCarList(names) {
    this.#carList = names.map(name => new Car(name));
  }

  getMaxPosition() {
    return Math.max(...this.#carList.map(car => car.position));
  }
  getWinner(maxPosition) {
    return this.#carList.filter(car => car.position === maxPosition).map(car => car.name);
  }

  judgeWinner() {
    const maxPosition = this.getMaxPosition();
    return this.getWinner(maxPosition);
  }

  race() {
    const roundResults = [];
    for (let i = 0; i < this.inputTryNumber; i++) {
      const roundResult = this.#carList.map(car => {
        const randomValue = createRandom();
        car.moveForward(randomValue);
        return { name: car.name, position: car.position };
      });
      roundResults.push(roundResult);
    }
    return { winners: this.judgeWinner(), roundResults };
  }
}
