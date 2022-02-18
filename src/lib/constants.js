/* eslint-disable no-extend-native */
/* https://github.com/airbnb/javascript#functions 7.1 */
String.prototype.toID = function stringIDToPrefix() {
  return `#${this}`;
};

String.prototype.toCLASS = function stringCLASSToPrefix() {
  return `.${this}`;
};

export const DOM = Object.freeze({
  CAR_NAME_INPUT_FIELD: 'car-name-input-field',
  COUNT_INPUT_FIELD: 'count-input-field',

  CAR_NAME_BTN: 'car-name-btn',
  COUNT_BTN: 'count-btn',

  CAR_NAME_INPUT: 'car-name-input',
  COUNT_INPUT: 'count-input',

  RESTART_BTN: 'restart-btn',

  COUNT_INPUT_FORM: 'count-input-form',
  RESULT_FIELD: 'result-field',
  GAME_PROGRESS: 'game-progress',
  WINNERS: 'winners',

  CAR_PROGRESS: 'car-progress',
  CAR_NAME: 'car-name',
  STEP: 'step',

  WINNER_CONTAINER: 'winner-container',
  WINNER_NAME: 'winner-name',

  INPUT_FIELD: 'input-field',
  LOADING_ICON: 'loading-icon',
});

export const CAR_NAME_LENGTH_LIMIT = 5;

export const CAR_NAME_SEPARATOR = ',';

export const ERROR_MESSAGE = Object.freeze({
  INVALID_COUNT: '횟수는 1 이상을 입력해야 합니다.',
  CAR_NAME_LENGTH_OVER: `${CAR_NAME_LENGTH_LIMIT}자 이하의 자동차 이름을 입력해주세요`,
  CAR_NAME_LENGTH_BELOW: '자동차 이름을 1자 이상 입력해주세요',
});

export const RANGE_MIN = 0;
export const RANGE_MAX = 9;
export const MOVE_CONDITION = 4;

export const ID_PREFIX = '#';
export const CLASS_PREFIX = '.';

export const SHOW_CLASS_NAME = 'show';
export const HIDE_CLASS_NAME = 'hide';
export const DELAY_PER_ROUND = 1000;
export const DELAY_AFTER_END = 2000;
