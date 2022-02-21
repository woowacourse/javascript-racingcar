import { CAR } from '../constants/constants.js';

export default class RandomUtils {
  static pickNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static pickRandomNumber() {
    return RandomUtils.pickNumberInRange(
      CAR.RANDOM_MINIMUM_NUMBER,
      CAR.RANDOM_MAXIMUM_NUMBER
    );
  }

  static decideOneMoveAtRandom() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.REFERENCE_POINT_FOR_MOVEMENT) {
      return 1;
    }
    return 0;
  }
}
