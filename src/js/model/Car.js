import { MIN_ADVANCE_VALUE } from "../constants/games.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  validateAdvance() {
    return getRandomNumber() >= MIN_ADVANCE_VALUE;
  }

  isAdvance() {
    if (this.validateAdvance()) {
      this.location += 1;
      return true;
    }

    return false;
  }
}
