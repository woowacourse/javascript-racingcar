import { MIN_MOVE_CONDITION, MOVE_UNIT } from "../constant/constant.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getCarName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move(randomNumber) {
    if (randomNumber >= MIN_MOVE_CONDITION) {
      this.#position += MOVE_UNIT;
    }
  }
}

export default Car;
