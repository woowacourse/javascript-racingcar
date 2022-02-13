import { GAME } from './constants.js';

export const isBlank = (name) => {
  return name.length >= GAME.MIN_CAR_NAME_LENGTH;
};

export const isValidLength = (name) => {
  return name.length <= GAME.MAX_CAR_NAME_LENGTH;
};

export const isEffectiveScore = (number) => {
  return number >= GAME.EFFECTIVE_SCORE;
};
