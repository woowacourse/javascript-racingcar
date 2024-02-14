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

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
