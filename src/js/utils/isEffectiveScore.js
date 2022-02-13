import { GAME } from './constants.js';

export const isEffectiveScore = (num) => {
  return num >= GAME.EFFECTIVE_SCORE;
};
