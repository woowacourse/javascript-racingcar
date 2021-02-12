import { RACING_COUNT, ERR_MESSAGE } from '../constants/inputRestriction.js';

export const validateRacingCount = (racingCount) => {
  if (racingCount < RACING_COUNT.MIN_VALUE) {
    return ERR_MESSAGE.COUNT_TOO_SMALL;
  }
};
