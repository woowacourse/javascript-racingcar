import { RULES } from '../constants/car-race';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = RULES.initialPosition;
  }

  move(randomNumber) {
    if (randomNumber >= RULES.moveStandard) {
      this.#position += RULES.movingUnit;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
