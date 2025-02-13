import { MOVE_CONDITION } from "./constants/setting.js";
import { generateRandomNumber } from "./utils.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const isMoving = generateRandomNumber() >= MOVE_CONDITION;
    if (isMoving) {
      this.position += 1;
    }
  }
}
