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
}
