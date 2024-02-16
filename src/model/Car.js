import Name from './Name.js';
import Random from './Random.js';

const FORWARD_CONDITION = 4;

class Car {
  #name;
  #location = 0;

  constructor(name) {
    this.#name = new Name(name);
  }

  forward() {
    const randomNumber = Random.create();

    if (randomNumber >= FORWARD_CONDITION) this.#location += 1;
  }

  getName() {
    return this.#name.getName();
  }

  getLocation() {
    return this.#location;
  }
}

export default Car;
