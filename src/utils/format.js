import { GAME_RULES } from "../constants/rules/game.js";

export const formatRacingResult = (carName, distance) => {
  const advanceExpression = GAME_RULES.ADVANCE_EXPRESSION.repeat(distance);
  return `${carName}: ${advanceExpression}\n`;
};
