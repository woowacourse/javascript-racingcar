import { CAR } from '../constants/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = CAR.INIT_POSITION;
  }

  move() {
    if (this.#judgeMove()) {
      this.position += CAR.CAR_MOVE_DISTANCE_PER_PROCESS;
      this.isMoved = true;
      return;
    }
    this.isMoved = false;
  }

  // eslint-disable-next-line class-methods-use-this
  #judgeMove() {
    return (
      // eslint-disable-next-line no-undef
      MissionUtils.Random.pickNumberInRange(
        CAR.RANDOM_MINIMUM_NUMBER,
        CAR.RANDOM_MAXIMUM_NUMBER
      ) >= CAR.MOVE_NUMBER
    );
  }
}
