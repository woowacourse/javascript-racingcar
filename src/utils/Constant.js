const ERROR = {
  CARNAME_OVER_MAX: "[ERROR] 이름은 5자 이하만 가능합니다. ",
  TRYNUMBER_UNDER_MIN: "[ERROR] 시도 횟수는 1회 이상의 정수만 가능합니다.",
};

const MESSAGE = {
  INPUT_CARNAME:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  INPUT_TRYNUMBER: "시도할 회수는 몇회인가요?\n",
  OUTPUT_WINNER: "가 최종 우승했습니다.",
};

const RANDOM = {
  MAXNUMBER: 10,
  MINNUMBER: 0,
  OVER_LIMIT: 4,
};

const CAR_MAX_NAME_LENGTH = 5;

module.exports = { ERROR, MESSAGE, RANDOM, CAR_MAX_NAME_LENGTH };
