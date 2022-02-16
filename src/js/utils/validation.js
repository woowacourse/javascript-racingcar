import { STANDARD } from './constants.js';

export const isBlank = (name) => {
  return name.length >= STANDARD.MIN_NAME_LENGTH;
};

export const isValidLength = (name) => {
  return name.length <= STANDARD.MAX_NAME_LENGTH;
};

export const isEffectiveScore = (number) => {
  return number >= STANDARD.EFFECTIVE_SCORE;
};

export const handleError = (message) => {
  alert(message);
};
