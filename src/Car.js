import { generateRandomNumber } from "./utils.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const isMoving = generateRandomNumber() >= 4;
    if (isMoving) {
      this.position += 1;
    }
  }
}
