import pickNumberInRange from '../utils/randomNumber';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  #canMove() {
    const randomNumber = pickNumberInRange(1, 9);
    return randomNumber >= 4;
  }

  move() {
    if (!this.#canMove()) return;
    this.#position += 1;
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
