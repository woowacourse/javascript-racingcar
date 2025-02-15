import { GAME_COUNT } from '../Constants/errorMessage';
import { MAX, MIN } from '../Constants/rules';

export const validateGameCountType = (input) => {
  const isInteger = Number.isInteger(Number(input));
  const hasEmptySpace = typeof input === 'string' && input.trim() === '';

  if (hasEmptySpace === true || isInteger === false) {
    throw new Error(GAME_COUNT.TYPE);
  }
};

export const validateGameCountRange = (input) => {
  const gameCount = Number(input);

  if (gameCount <= MIN.GAME_COUNT || gameCount >= MAX.GAME_COUNT) {
    throw new Error(GAME_COUNT.RANGE);
  }
};
