export const ID = Object.freeze({
  CAR_NAME_INPUT: "car-names-input",
  CAR_NAME_BUTTON: "car-names-button",
  RACING_COUNT_INPUT: "racing-count-input",
  RACING_COUNT_BUTTON: "racing-count-button",
  RESULT: "result",
  REPLAY_BUTTON: "replay-button",
});

export const CLASS = Object.freeze({
  RACING_RESULTS: "racing-results",
  RACING_RESULT: "racing-result",
  CAR_NAME: "car-name",
  ARROW: "arrow",
  WINNERS: "winners",
  BTN: "btn",
  REPLAY_BTN: "replay-btn",
});

export const GAME_NUMBERS = Object.freeze({
  MAX_RANDOM_NUMBER: 9,
  EMPTY_NUMBER: 0,
  VALID_MAX_NAME_LENGTH: 5,
  INIT_RACING_COUNT: 0,
  FORWARD_STANDARD_NUMBER: 4,
  INIT_CAR_FORWARD_COUNT: 0,
});

export const ALERT_MESSAGE = Object.freeze({
  HAS_EMPTY_NAME_ERROR: "이름에 공백이 포함되어있습니다",
  DUPLICATED_NAME_ERROR: "이름이 중복되었습니다",
  EMPTY_NAME_ERROR: "이름은 공백이 될수없습니다",
  HAS_INVALID_NAME_LENGTH_ERROR: `이름은 ${GAME_NUMBERS.VALID_MAX_NAME_LENGTH}가 넘어갈 수 없습니다.`,
  EMPTY_COUNT_ERROR: "숫자를 입력해주세요",
});

export const winnerMesssage = (winners) => `🏆 최종 우승자: ${winners} 🏆`;
