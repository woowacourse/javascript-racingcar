import { RACING_COUNT } from "../../util/constants.js";
import { isInteger } from "../../util/checkFunctions.js";

export const isValidRacingCount = racingCountInputValue => {
  return (
    isInteger(racingCountInputValue) &&
    parseInt(racingCountInputValue, 10) >= RACING_COUNT.MIN
  );
};
