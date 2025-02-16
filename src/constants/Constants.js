export const RANDOM_NUMBER = Object.freeze({
  MAX: 9,
  MIN: 0,
});

export const MOVE_CONDITION = 4;

export const INPUT_MESSAGE = Object.freeze({
  CAR: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  ATTEMPT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  RESULT: "실행 결과\n",
  WINNER: "최종 우승자:",
});

export const NAME_DELIMITER = ",";

export const LINE_BREAK = "";

export const CAR_NAME_CONDITION = Object.freeze({
  LENGTH_MAX : 5,
  LENGTH_MIN : 1,
  COUNT_MIN : 2
})

export const ERROR_PREFIX = "[ERROR]"

export const CAR_NAME_LIST_ERROR_MESSAGES = Object.freeze({
  NAME_LENGTH_MIN: `자동차 이름은 ${CAR_NAME_CONDITION.LENGTH_MIN}자 이상 입력해주세요.`,
  NAME_LENGTH_MAX:`${CAR_NAME_CONDITION.LENGTH_MAX}자 이하로 입력해주세요.`,
  COUNT: `${CAR_NAME_CONDITION.COUNT_MIN}대 이상의 자동차 이름을 입력해 주세요.`,
  DUPLICATE_CAR_NAME: "자동차 이름이 중복되었습니다.",
});

export const ATTEMPT_ERROR_MESSAGES = Object.freeze({
  EMPTY: "입력이 비어 있습니다.",
  NOT_INTEGER: "정수를 입력해주세요.",
  MINUS: "0보다 큰 수를 입력해주세요.",
});

export const RANDOM_ERROR_MESSAGES = Object.freeze({
  NOT_INTEGER : "정수를 입력해주세요.",
  MIN_GREATER_THAN_MAX : "최솟값은 최댓값보다 클 수 없습니다.",
});
