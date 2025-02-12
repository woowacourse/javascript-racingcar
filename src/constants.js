export const MOVE_THRESHOLD = 4;

export const INFO_MESSAGE = {
  CAR_NAMR_INPUT:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  ATTEMPT_INPUT: "시도할 횟수는 몇 회인가요?\n",
};

export const ERROR_MESSAGE = {
  CAR_NAME_LENGTH: "[ERROR] 자동차 이름은 5자 이하여야 합니다.",
  CAR_COUNT: "[ERROR] 경주 가능한 최대 자동차 개수는 10개입니다.",
  CAR_NAME_DUPLICATE: "[ERROR] 자동차 이름이 중복됩니다.",
  INVALID_ATTEMPT_NUMBER: "[ERROR] 시도 횟수는 숫자여야 합니다.",
  ATTEMPT_TOO_LOW: "[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.",
  ATTEMPT_TOO_HIGH: "[ERROR] 시도 횟수는 최대 50회까지 가능합니다.",
};
