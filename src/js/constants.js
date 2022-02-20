export const SELECTORS = {
  RACING_GAME_PREPARE_FORM: '#racing-game-prepare-form',
  CAR_NAMES_FIELDSET: '#car-names-fieldset',
  CAR_NAMES_INPUT: '#car-names-input',
  CAR_NAMES_SUBMIT_BUTTON: '#car-names-submit-button',
  RACING_COUNT_FIELDSET: '#racing-count-fieldset',
  RACING_COUNT_INPUT: '#racing-count-input',
  RACING_COUNT_SUBMIT_BUTTON: '#racing-count-submit-button',
  RACING_SCREEN: '#racing-screen',
  CAR_LANE: '.car-lane',
  CAR_NAME: '.car-name',
  DISTANCE: '.distance',
  FORWARD_ICON: '.forward-icon',
  RACING_RESULT: '#racing-result',
  WINNERS: '#winners',
  RESTART_BUTTON: '#restart-btn',
};

export const MAX_CAR_NAME_LENGTH = 5;
export const MIN_CAR_NAME_LENGTH = 1;
export const MAX_RACING_COUNT = 100;
export const MIN_RACING_COUNT = 1;
export const MIN_CONDITION_OF_CAR_MOVE = 4;
export const RANDOM_RANGE = [0, 9];
export const CAR_MOVE_DELAY = 1000;
export const CELEBRATE_MESSAGE_SHOW_DELAY = 2000;

export const ERROR_MESSAGES = {
  EMPTY_CAR_NAME: `자동차 이름을 입력해 주세요`,
  BEYOND_MAX_CAR_NAME_LENGTH: `각 자동차 이름을 ${MAX_CAR_NAME_LENGTH}글자 이하로 입력해주세요`,
  FALL_SHORT_OF_MIN_CAR_NAME_LENGTH: `각 자동차 이름을 ${MIN_CAR_NAME_LENGTH}글자 이상으로 입력해 주세요`,
  DUPLICATED_CAR_NAME: '자동차의 이름이 중복되지 않게 입력해 주세요',
  EMPTY_RACING_COUNT: `시도할 횟수를 입력해 주세요`,
  BEYOND_MAX_RACING_COUNT: `시도 횟수는 ${MAX_RACING_COUNT}회 이하로 입력해 주세요`,
  FALL_SHORT_OF_MIN_RACING_COUNT: `시도 횟수는 ${MIN_RACING_COUNT}회 이상으로 입력해 주세요`,
  TYPE_MISMATCH_OF_RACING_COUNT: '시도 횟수는 숫자만 입력 가능합니다',
};

export const CELEBRATE_MESSAGE = '🎉🎉 축하합니다 🎉🎉';

export const VALIDATION_ERROR_NAME = 'ValidationError';

export const SUBMITTED_CLASS_NAME = 'submitted';
