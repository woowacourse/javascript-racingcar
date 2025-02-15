import { MOVE_UNIT } from "../constant/constant.js";
import { MIN } from "../constant/range.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move(randomNumber) {
    if (randomNumber >= MIN.MOVE_CONDITION) {
      this.#position += MOVE_UNIT;
    }
  }
}

export default Car;
