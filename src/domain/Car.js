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
    if (randomNumber() >= SETTING.moveableNumberStart) return true;
    return false;
  }

  tryToMove() {
    if (this.#isMovable()) this.#position += 1;
  }

  getCarStatus() {
    return { name: this.#name, position: this.#position };
  }
}

export default Car;
