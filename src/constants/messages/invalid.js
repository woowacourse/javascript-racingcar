import { CAR_RULES } from "../rules/car.js";
import { GAME_RULES } from "../rules/game.js";

export const INVALID_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH: `자동차 이름은 ${CAR_RULES.MIN_NAME_LENGTH}자 이상 ${CAR_RULES.MAX_NAME_LENGTH}자 이하만 가능합니다.`,
  CAR_COUNT: `자동차는 ${CAR_RULES.MIN_COUNT}대 이상 ${CAR_RULES.MAX_COUNT}대 이하만 가능합니다.`,
  DUPLICATE_CAR_NAME: "자동차 이름은 중복되지 않아야 합니다.",
  INTEGER_FORMAT: "정수만 입력 가능합니다.",
  ATTEMPT_COUNT: `시도 횟수는 ${GAME_RULES.MIN_ATTEMPT_COUNT}회 이상 ${GAME_RULES.MAX_ATTEMPT_COUNT}회 이하만 가능합니다.`,
});
