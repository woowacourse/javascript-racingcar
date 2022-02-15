import { RANDOM_RANGE, RACE_STANDARD } from "../constants.js";

export default class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  goForward() {
    const { MIN, MAX } = RANDOM_RANGE;

    if (
      window.MissionUtils.Random.pickNumberInRange(MIN, MAX) >= RACE_STANDARD
    ) {
      this.location += 1;
    }
  }
}
