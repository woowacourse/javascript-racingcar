import { pickRandomNumberInRange } from "./utils/pickRandomNumberInRange.js";
import { STANDARD_VALUE } from "./constants/standardValue.js";

export const isHigherThanThreshold = () => {
  return (
    pickRandomNumberInRange(
      STANDARD_VALUE.minRandomNumberRange,
      STANDARD_VALUE.maxRandomNumberRange
    ) >= STANDARD_VALUE.threshholdForGoing
  );
};
