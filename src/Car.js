import { generateRandomNumber } from "./utils";

class Car {
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

export default Car;
