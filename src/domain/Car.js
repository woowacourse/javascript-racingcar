import CONDITIONS from '../constant/Conditions.js';
import getRandomNumber from '../utils/getRandomNumber.js';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  tryMove() {
    const randomNumber = getRandomNumber(CONDITIONS.minRandomNumberRange, CONDITIONS.maxRandomNumberRange);

    if (randomNumber >= CONDITIONS.minMoveCondition) {
      this.#distance += CONDITIONS.moveDistance;
    }
  }
}

export default Car;
