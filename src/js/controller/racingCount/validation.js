import { MIN_RACE_COUNT } from "../../constants/games.js";

const isInteger = input => {
  if (Number.isNaN(input) || Number(input) % 1 !== 0) {
    return false;
  }
  return true;
};

export const isValidRacingCount = racingCountInputValue => {
  if (
    !isInteger(racingCountInputValue) ||
    parseInt(racingCountInputValue, 10) < MIN_RACE_COUNT
  ) {
    return false;
  }

  return true;
};
