const RESULT_TYPE = {
  MOVE_CNT: "moveCnt",
  WINNERS: "winner",
};

const MESSAGE = {
  ASK_CAR_NAME:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n",
  ASK_TRY_COUNT: "\n시도할 회수는 몇회인가요?\n",

  ERROR: (message) => `ERROR: ${message}`,

  RESULT: "\n실행 결과",
  MOVE_CNT: ([key, value]) => `${key} : ${value ? "-".repeat(value) : ""}`,
  WINNERS: (data) => `${data.join(", ")}가 최종 우승했습니다.`,
};

const GAME_VALUE = {
  MAX_RANGE: 9,
  MOVING_BOUNDARY_VALUE: 4,
};

module.exports = {
  RESULT_TYPE,
  MESSAGE,
  GAME_VALUE,
};
