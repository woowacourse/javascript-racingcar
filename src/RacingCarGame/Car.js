import randomNumber from "../utils/randomNumber.js";
import SETTING from "../constants/Setting.js";
class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  #isMovable() {
    if (randomNumber() >= SETTING.moveableNumberStart) return true;
    return false;
  }

  moveOn() {
    if (this.#isMovable()) {
      this.#position += 1;
    }
  }

  info() {
    return { name: this.#name, position: this.#position };
  }
}

export default Car;
