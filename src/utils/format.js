import { RULE } from "../constants/index.js";

export const formatRacingResult = (carName, distance) => {
  const advanceExpression = RULE.ADVANCE_EXPRESSION.repeat(distance);
  return `${carName}: ${advanceExpression}\n`;
};
