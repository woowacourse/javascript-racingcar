import Random from '../utils/Random';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randNum = Random.pickNumberInRange(0, 9);
    if (randNum >= 4) this.#position++;
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
