import { RULES } from '../statics/constants';
import Random from '../utils/Random';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const { moveThreshold, minRandomRange, maxRandomRange } = RULES;

    const randNum = Random.pickNumberInRange(minRandomRange, maxRandomRange);
    if (randNum >= moveThreshold) this.#position++;
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
