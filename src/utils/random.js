import { CAR } from '../constants/constants.js';

export default class RandomUtils {
  static pickRandomNumber() {
    // eslint-disable-next-line no-undef
    return MissionUtils.Random.pickNumberInRange(
      CAR.RANDOM_MINIMUM_NUMBER,
      CAR.RANDOM_MAXIMUM_NUMBER
    );
  }
}
