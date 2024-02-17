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

  isSamePosition(otherCar) {
    return this.#position === otherCar.getPosition();
  }

  isAheadOf(otherCar) {
    return this.#position > otherCar.getPosition();
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

export default Car;
