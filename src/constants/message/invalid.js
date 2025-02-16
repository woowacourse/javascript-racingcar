import { CAR_RULE } from "../rule/car.js";
import { ATTEMPT_RULE } from "../rule/attempt.js";

export const INVALID_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH: `자동차 이름은 ${CAR_RULE.MIN_NAME_LENGTH}자 이상 ${CAR_RULE.MAX_NAME_LENGTH}자 이하만 가능합니다.`,
  CAR_COUNT: `자동차는 ${CAR_RULE.MIN_COUNT}대 이상 ${CAR_RULE.MAX_COUNT}대 이하만 가능합니다.`,
  DUPLICATE_CAR_NAME: "자동차 이름은 중복되지 않아야 합니다.",
  INTEGER_FORMAT: "정수만 입력 가능합니다.",
  ATTEMPT_COUNT: `시도 횟수는 ${ATTEMPT_RULE.MIN_COUNT}회 이상 ${ATTEMPT_RULE.MAX_COUNT}회 이하만 가능합니다.`,
});
