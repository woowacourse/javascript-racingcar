import { RULES } from "../constants/car-race";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = RULES.initialPosition;
  }

  #canMove(number) {
    return number >= RULES.moveStandard;
  }

  move(number) {
    if (!this.#canMove(number)) return;

    this.#position += 1;
  }

  isSamePosition(otherCar) {
    return this.#position === otherCar.position;
  }

  isAheadOf(otherCar) {
    return this.#position > otherCar.position;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
