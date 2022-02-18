import { CAR_NAME_LENGTH, RACING_SCORE } from './constants.js';

export const isBlank = (name) => {
  return name.length >= CAR_NAME_LENGTH.MIN;
};

export const isValidLength = (name) => {
  return name.length <= CAR_NAME_LENGTH.MAX;
};

export const isEffectiveScore = (number) => {
  return number >= RACING_SCORE.EFFECTIVE;
};

export const handleError = (message) => {
  alert(message);
};
