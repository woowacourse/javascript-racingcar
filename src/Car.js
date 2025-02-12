import { MOVE_THRESHOLD } from "./Const";
import { getRandomNumber } from "./Util";

class Car {
  constructor(name) {
    this.position = 0;
    this.name = name;
  }

  #moveOneStep() {
    this.position += 1;
  }

  tryMove() {
    if (getRandomNumber() >= MOVE_THRESHOLD) {
      this.#moveOneStep();
    }
  }
}

export default Car;
