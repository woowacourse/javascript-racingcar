import { isInRange } from '../util/validations.js';

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
  }

  #validateName(name) {
    if (!isInRange(name.length, 1, 5)) throw new Error(`[ERROR] 자동차 이름은 1에서 5자 사이여야 합니다.`);
  }

  move() {
    this.#position += 1;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
