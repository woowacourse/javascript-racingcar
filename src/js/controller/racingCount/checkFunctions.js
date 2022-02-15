import { RACING_COUNT } from "../../constants.js";

const isInteger = input => {
  if (Number.isNaN(input) || Number(input) % 1 !== 0) {
    return false;
  }
  return true;
};

export const isValidRacingCount = racingCountInputValue => {
  if (
    !isInteger(racingCountInputValue) ||
    parseInt(racingCountInputValue, 10) < RACING_COUNT.MIN
  ) {
    return false;
  }

  return true;
};
