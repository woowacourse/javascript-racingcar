import { GAME } from './constant.js';

export const getForwardCount = (nums) => {
  return nums.filter((num) => num >= GAME.EFFECTIVE_SCORE).length;
};
