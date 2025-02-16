export const MOVE_THRESHOLD = 4;

export const MAX_CAR_NAME_LENGTH = 5;
export const MINIMUM_CAR_COUNT = 2;

export const MIN_TRY_COUNT = 1;
export const MAX_TRY_COUNT = 50;

export const INPUT_PROMPT_MESSAGE = Object.freeze({
  CAR_NAMES: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_PROMPT_MESSAGE = Object.freeze({
  RACE_RESULT: "\n실행 결과",
  FINAL_WINNERS: "최종 우승자",
});

export const ERROR_CAR_NAMES_MESSAGE = Object.freeze({
  OVER: `자동차 이름은 ${MAX_CAR_NAME_LENGTH}글자 이하여야 합니다.`,
  DUPLICATE: "자동차 이름이 중복됩니다.",
  NOT_ENOUGH_PLAYERS: `자동차는 ${MINIMUM_CAR_COUNT}대 이상이어야 합니다.`,
});

export const ERROR_TRY_COUNT_MESSAGE = Object.freeze({
  INVALID_NUMBER: "시도 횟수는 숫자가 될 수 없습니다.",
  INVAILD_INTEGER: "시도 횟수는 정수가 될 수 없습니다.",
  INVALID_RANGE: `시도 횟수는 ${MIN_TRY_COUNT} 이상 ${MAX_TRY_COUNT} 이하여야 합니다.`,
});
