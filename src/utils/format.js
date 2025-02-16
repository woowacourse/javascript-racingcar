import { ADVANCE_RULE } from "../constants/rule/advance.js";

export const formatRacingResult = (carName, distance) => {
  const advanceExpression = ADVANCE_RULE.EXPRESSION.repeat(distance);
  return `${carName}: ${advanceExpression}\n`;
};
