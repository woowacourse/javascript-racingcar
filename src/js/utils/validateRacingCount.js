import { ERR_MESSAGE, CAR } from './constant.js';

export const validateRacingCount = (racingCount) => {
  if (racingCount < CAR.MIN_RACING_COUNT) {
    return ERR_MESSAGE.COUNT_TOO_SMALL;
  }
};
