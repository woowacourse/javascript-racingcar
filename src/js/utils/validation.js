import { CAR_NAME_LENGTH, RACING_MIN_COUNT, MOVE_SCORE } from './constants.js';

export const isValidCarNameBlank = (names) => {
  return names.every((name) => name.length >= CAR_NAME_LENGTH.MIN);
};

export const isValidCarNameLength = (names) => {
  return names.every((name) => name.length <= CAR_NAME_LENGTH.MAX);
};

export const isValidRacingCount = (number) => {
  return number < RACING_MIN_COUNT;
};

export const isEffectiveScore = (number) => {
  return number >= MOVE_SCORE.EFFECTIVE;
};
