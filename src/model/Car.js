import { CAR } from '../constants/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = CAR.INIT_POSITION;
  }

  move() {
    this.judgeMove();
    if (this.canMove) {
      this.position += CAR.CAR_MOVE_DISTANCE_PER_PROCESS;
    }
  }

  judgeMove() {
    this.canMove =
      // eslint-disable-next-line no-undef
      MissionUtils.Random.pickNumberInRange(
        CAR.RANDOM_MINIMUM_NUMBER,
        CAR.RANDOM_MAXIMUM_NUMBER
      ) >= CAR.MOVE_NUMBER;
  }
}
