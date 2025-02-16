export const INVALID_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH: `자동차 이름은 ${RULE.MIN_CAR_NAME_LENGTH}자 이상 ${RULE.MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
  CAR_COUNT: `자동차는 ${RULE.MIN_CAR_COUNT}대 이상 ${RULE.MAX_CAR_COUNT}대 이하만 가능합니다.`,
  DUPLICATE_CAR_NAME: "자동차 이름은 중복되지 않아야 합니다.",
  INTEGER_FORMAT: "정수만 입력 가능합니다.",
  ATTEMPT_COUNT: `시도 횟수는 ${RULE.MIN_ATTEMPT_COUNT} 이상 ${RULE.MAX_ATTEMPT_COUNT}이어야 합니다.`,
});
