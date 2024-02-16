import { RULES } from '../constants/car-race';
import pickNumberInRange from '../utils/pickNumberInRange';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = RULES.initialPosition;
  }

  #canMove() {
    const randomNumber = pickNumberInRange(
      RULES.minRandomNumber,
      RULES.maxRandomNumber,
    );
    return randomNumber >= RULES.moveStandard;
  }

  move() {
    if (!this.#canMove()) return;
    this.#position += RULES.movingUnit;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
