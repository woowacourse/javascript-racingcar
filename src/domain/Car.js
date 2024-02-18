import SETTING from "../constants/Setting.js";
import randomNumber from "../utils/randomNumber.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  #isMovable() {
    if (randomNumber() >= SETTING.moveOnThreshold) {
      return true;
    }

    return false;
  }

  moveOn() {
    if (this.#isMovable()) {
      this.#position += 1;
    }
  }

  getInfo() {
    return { name: this.#name, position: this.#position };
  }
}

export default Car;
