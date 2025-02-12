export const RULE = Object.freeze({
  MIN_CAR_NAME_LENGTH: 1,
  MAX_CAR_NAME_LENGTH: 5,
  MIN_CAR_COUNT: 1,
  MAX_CAR_COUNT: 10,
  MIN_ATTEMPT_COUNT: 1,
  MAX_ATTEMPT_COUNT: 100,
  MIN_RANDOM_NUMBER: 0,
  MAX_RANDOM_NUMBER: 9,
  ADVANCE_CONDITION: 4,
  ADVANCE_EXPRESSION: "-",
  CAR_NAME_SEPARATOR: ",",
});

export const VIEW_MESSAGE = Object.freeze({
  CAR_NAME_INPUT: `경주할 자동차 이름을 입력하세요(이름은 구분자(${RULE.CAR_NAME_SEPARATOR})를 기준으로 구분).\n`,
  ATTEMPT_COUNT: "시도할 횟수는 몇회인가요?\n",
  EXECUTION_RESULT: "실행 결과",
  WINNER_RESULT: "최종 우승자: ",
});

export const INVALID_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH: `자동차 이름은 ${RULE.MIN_CAR_NAME_LENGTH}자 이상 ${RULE.MAX_CAR_NAME_LENGTH}자 이하만 가능합니다.`,
  CAR_COUNT: `자동차는 ${RULE.MIN_CAR_COUNT}대 이상 ${RULE.MAX_CAR_COUNT}대 이하만 가능합니다.`,
  DUPLICATE_CAR_NAME: "자동차 이름은 중복되지 않아야 합니다.",
  INTEGER_FORMAT: "정수만 입력 가능합니다.",
  ATTEMPT_COUNT: `시도 횟수는 ${RULE.MIN_ATTEMPT_COUNT} 이상 ${RULE.MAX_ATTEMPT_COUNT}이어야 합니다.`,
});

export const ERROR_PREFIX = "[ERROR] ";
