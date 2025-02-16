import { MOVE_THRESHOLD } from "../const.js";

class Car {
  constructor(raceCarName) {
    this.position = 0;
    this.raceCarName = raceCarName;
  }

  #moveOneStep() {
    this.position += 1;
  }

  tryMove(number) {
    if (number >= MOVE_THRESHOLD) {
      this.#moveOneStep();
    }
  }

  getPositionStatus() {
    return `${"-".repeat(this.position)}`;
  }
}

export default Car;
