import DEFINITION from '../constants/Definition.js';
import { createRandom } from '../utils/Random.js';
import { Validator } from '../utils/Validator.js';
import Car from './Car.js';

export default class Game {
  #carList;
  inputTryNumber;

  constructor(inputName, inputTryNumber) {
    Validator.validateName(inputName, DEFINITION.MAX_NAME_LENGTH);
    Validator.validateTryNumber(inputTryNumber, DEFINITION.MIN_GAME, DEFINITION.MAX_GAME);
    this.#carList = [];
    this.inputTryNumber = inputTryNumber;
    this.#carList = inputName.map(name => new Car(name));
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

  raceOneTime(roundResults) {
    const roundResult = this.#carList.map(car => {
      const randomValue = createRandom();
      car.moveForward(randomValue);
      return { name: car.name, position: car.position };
    });
    roundResults.push(roundResult);
  }

  race() {
    const roundResults = [];
    for (let i = 0; i < this.inputTryNumber; i++) {
      this.raceOneTime(roundResults);
    }
    return { winners: this.judgeWinner(), roundResults };
  }
}
