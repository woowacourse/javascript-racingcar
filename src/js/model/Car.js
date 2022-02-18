import {
  RANDOM_RANGE,
  MINIMUM_ADVANCE_VALUE,
} from "../controller/constants.js";
import { pickNumberInRange } from "../util/random.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  goForward() {
    const { MIN, MAX } = RANDOM_RANGE;

    if (pickNumberInRange(MIN, MAX) >= MINIMUM_ADVANCE_VALUE) {
      this.location += 1;
    }
  }
}
