import { MOVE_DEFAULT, MOVE_THRESHOLD } from "./constants.js";

class Car {
  #name = "";
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number, type) {
    if (number >= MOVE_THRESHOLD) {
      if (type === MOVE_DEFAULT) {
        this.#position += 1;
      }
    }
  }
}

export default Car;
