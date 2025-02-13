const MOVE_FORWARD = 4;

export default class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(moveCondition) {
    if (moveCondition >= MOVE_FORWARD) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
