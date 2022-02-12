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

export const ALERT_MESSAGE = Object.freeze({
  HAS_EMPTY_NAME_ERROR: "이름에 공백이 포함되어있습니다",
  DUPLICATED_NAME_ERROR: "이름이 중복되었습니다",
  EMPTY_NAME_ERROR: "이름은 공백이 될수없습니다",
  HAS_INVALID_NAME_LENGTH_ERROR: "이름은 5자가 넘어갈 수 없습니다.",
  EMPTY_COUNT_ERROR: "숫자를 입력해주세요",
});

export const winnerMesssage = (winners) => `🏆 최종 우승자: ${winners} 🏆`;

export const MAX_RANDOM_NUMBER = 10;

export const EMPTY_NUMBER = 0;

export const VALID_MAX_NUMBER = 5;

export const INIT_RACING_COUNT = 0;

export const FORWARD_STANDARD_NUMBER = 4;

export const INIT_CAR_FORWARD = 0;
