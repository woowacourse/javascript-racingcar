import { CAR } from '../constants/constants.js';

export const pickRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(
    CAR.RANDOM_MINIMUM_NUMBER,
    CAR.RANDOM_MAXIMUM_NUMBER
  );
};
