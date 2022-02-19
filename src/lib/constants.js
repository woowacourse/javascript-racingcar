export const DOM = Object.freeze({
  CAR_NAME_INPUT_FIELD_ID: 'car-name-input-field',
  COUNT_INPUT_FIELD_ID: 'count-input-field',

  CAR_NAME_BTN_ID: 'car-name-btn',
  COUNT_BTN_ID: 'count-btn',

  CAR_NAME_INPUT_ID: 'car-name-input',
  COUNT_INPUT_ID: 'count-input',

  GAME_START_BTN_ID: 'game-start-btn',

  RESTART_BTN_ID: 'restart-btn',

  COUNT_INPUT_FORM_ID: 'count-input-form',
  RESULT_FIELD_ID: 'result-field',
  GAME_PROGRESS_ID: 'game-progress',
  WINNERS_ID: 'winners',

  CAR_PROGRESS_CLASS: 'car-progress',
  CAR_NAME_CLASS: 'car-name',
  STEP_CONTAINER_CLASS: 'step-container',
  STEP_CLASS: 'step',

  SPINNER_CLASS: 'spinner',

  WINNER_CONTAINER_ID: 'winner-container',
  WINNER_NAME_ID: 'winner-name',
});

export const CAR_NAME_MIN_LENGTH = 1;
export const CAR_NAME_MAX_LENGTH = 5;
export const CAR_NAME_SEPARATOR = ',';

export const ERROR_MESSAGE = Object.freeze({
  INVALID_COUNT: '횟수는 1 이상을 입력해야 합니다.',
  CAR_NAME_LENGTH_OUT_OF_RANGE: `${CAR_NAME_MIN_LENGTH} - ${CAR_NAME_MAX_LENGTH}자 길이의 자동차 이름을 입력해주세요`,
});

export const RANGE_MIN = 0;
export const RANGE_MAX = 9;
export const MOVE_CONDITION = 4;

export const GAME_ROUND_INTERVAL = 1000;
export const WINNER_ALERT_TIMEOUT_AMOUNT = 2000;
