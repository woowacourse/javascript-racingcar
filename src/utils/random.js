import { CAR } from '../constants/constants.js';

export default class RandomUtils {
  static pickRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      CAR.RANDOM_MINIMUM_NUMBER,
      CAR.RANDOM_MAXIMUM_NUMBER
    );
  }
}
