import { MOVE_THRESHOLD } from "./constants.js";

class Car {
  #name = "";
  #position = "";

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number) {
    if (number >= MOVE_THRESHOLD) {
      this.#position += "-";
    }
  }
}

export default Car;
