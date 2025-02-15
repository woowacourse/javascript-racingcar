export const MOVE_THRESHOLD = 4;
export const CAR_NAME_MAX_LENGTH = 5;
export const MIN_RANDOM_VALUE = 0;
export const MAX_RANDOM_VALUE = 9;

export const DELIMITERS = {
  CAR_NAME: ",",
}

export const INFO_MESSAGE = {
  CAR_NAME_PROMPT:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  ATTEMPT_PROMPT: "시도할 횟수는 몇 회인가요?\n",
  RACE_RESULT_TITLE: "\n실행 결과",
  WINNER_TITLE: "최종 우승자: ",
};

export const ERROR_MESSAGE = {
  CAR_NAME_TOO_SHORT: "[ERROR] 모든 자동차 이름은 1자 이상이어야 합니다.",
  CAR_NAME_TOO_LONG: "[ERROR] 모든 자동차 이름은 5자 이하여야 합니다.",
  TOO_MANY_CARS: "[ERROR] 경주 가능한 최대 자동차 개수는 10개입니다.",
  CAR_NAME_DUPLICATE: "[ERROR] 중복되는 자동차 이름이 있습니다.",

  EMPTY_ATTEMPT_NUMBER: "[ERROR] 시도 횟수가 입력되지 않았습니다.",
  INVALID_ATTEMPT_NUMBER: "[ERROR] 시도 횟수는 숫자여야 합니다.",
  ATTEMPT_NUMBER_IS_NOT_INTEGER: "[ERROR} 시도 횟수는 양의 정수여야 합니다.",
  ATTEMPT_TOO_LOW: "[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.",
  ATTEMPT_TOO_HIGH: "[ERROR] 시도 횟수는 최대 50회까지 가능합니다.",
};
