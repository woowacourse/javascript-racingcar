import { MOVE_THRESHOLD } from "./constants.js";
import { ERROR_MESSAGE } from "./constants.js";

class Car {
  #name = "";
  #position = 0;

  constructor(name) {
    this.#name = this.#validate(name);
  }

  #validate(name) {
    if (name.length > 5) throw Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
    return name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number) {
    if (number >= MOVE_THRESHOLD) {
      this.#position += 1;
    }
  }
}

export default Car;
