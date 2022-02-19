import { MIN_NUMBER_OF_MOVE } from "../constants/ConstantsManager.js";

export default class Car {
  constructor(carName) {
    this.name = carName;
    this.count = 0;
  }

  move() {
    this.count += 1;
  }

  canMove(randomRaceScore) {
    if (randomRaceScore < MIN_NUMBER_OF_MOVE) {
      return false;
    }
    return true;
  }
}
