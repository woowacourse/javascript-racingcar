export const MOVE_CONDITION_BOUNDARY = 4;
export const CAR_NAME_BOUNDARY_LENGTH = 5;
export const EXPRESSION_FLAG = "-";

export const INPUT_PROMPT_MESSAGE = Object.freeze({
  CAR_NAMES: "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
});

export const OUTPUT_PROMPT_MESSAGE = Object.freeze({
  RACE_RESULT: "\n실행 결과",
  FINAL_WINNERS: "최종 우승자",
});

export const ERROR_CAR_NAMES_MESSAGE = Object.freeze({
  NOT_EXIST: "자동차 이름이 존재하지 않습니다.",
  OVER: "자동차 이름이 5글자가 넘습니다.",
  DUPLICATE: "자동차 이름이 중복됩니다.",
});

export const ERROR_TRY_COUNT_MESSAGE = Object.freeze({
  INVALID_NUMBER: "시도 횟수가 숫자가 아닙니다.",
  INVAILD_INTEGER: "시도 횟수가 정수가 아닙니다.",
  INVALID_RANGE: "시도 횟수는 0 이하가 될 수 없습니다.",
});
