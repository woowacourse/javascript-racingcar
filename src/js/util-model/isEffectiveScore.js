import { GAME } from './constant.js';

export const isEffectiveScore = (score = getRandomNumber()) => {
  return score >= GAME.THRESHOLD;
};

export const getRandomNumber = (min = GAME.MIN_SCORE, max = GAME.MAX_SCORE) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
