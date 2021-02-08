import { GAME } from '../utils/constant.js';

export const isEffectiveScore = (num) => {
  return num >= GAME.EFFECTIVE_SCORE;
};
