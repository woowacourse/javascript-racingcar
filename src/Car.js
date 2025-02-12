import { getRandomNumber } from "./util.js";

const MOVE_FORWARD = 4;

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const moveCondition = getRandomNumber();
    if (moveCondition >= MOVE_FORWARD) {
      this.position += 1;
      return;
    }
  }
}
