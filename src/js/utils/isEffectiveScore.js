import { GAME } from './constant.js';

export const isEffectiveScore = (num) => {
  return num >= GAME.THRESHOLD;
};
