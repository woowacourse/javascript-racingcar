import { RANDOM_RANGE, MIN_ADVANCE_VALUE } from "../constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  goForward() {
    const { MIN, MAX } = RANDOM_RANGE;

    if (
      window.MissionUtils.Random.pickNumberInRange(MIN, MAX) >=
      MIN_ADVANCE_VALUE
    ) {
      this.location += 1;
    }
  }
}
