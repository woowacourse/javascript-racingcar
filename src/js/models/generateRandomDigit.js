import { RACING_RULE } from '../constants/racingRule.js';

export const generateRandomDigit = () => {
  const min = RACING_RULE.MIN_SCORE;
  const max = RACING_RULE.MAX_SCORE;

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
