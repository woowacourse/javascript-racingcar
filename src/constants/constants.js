export const INPUT_ERROR = {
  INVALID_LENGTH: '자동차 이름은 1자 이상 5자 이하만 가능합니다.',
  DUPLICATED: '자동차 이름이 중복되어서는 안됩니다.',
  NULL: '자동차 이름이 빈 문자열이 되어서는 안됩니다.',
  COUNT_NOT_IN_RANGE: '횟수는 1이상 20이하여야 합니다.',
  COUNT_NOT_NATURAL: '횟수는 자연수가 되어야 합니다.',
  COUNT_BLANK: '횟수를 입력해주세요!'
};

export const SELECTOR = {
  ID: {
    APP: 'app',
    CAR_NAMES_INPUT: 'car-names-input',
    CAR_NAMES_BUTTON: 'car-names-submit',
    CAR_NAMES_FORM: 'car-names-form',
    RACING_COUNT_FORM: 'racing-count-form',
    RACING_COUNT_COMMAND: 'racing-count-command',
    RACING_COUNT_INPUT: 'racing-count-input',
    RACING_COUNT_SUBMIT: 'racing-count-submit',
    RESULT: 'result',
    RACING_WINNERS: 'racing-winners',
    RACING_PROGRESS_CONTAINER: 'racing-progress-container',
    RACING_PROGRESS_TITLE: 'racing-progress-title',
    RACING_RESULT_CONTAINER: 'racing-result-container',
    WINNER_SPAN: 'racing-result',
    RESTART_BUTTON: 'restart-button'
  },
  CLASS: {
    CAR_PROGRESS_CONTAINER: 'car-progress-container',
    CAR_PROGRESS_NAME: 'car-progress-container--name',
    CAR_PROGRESS_STATUS: 'car-progress-container--status',
    CAR_PROGRESS_LOADGING: 'car-progress-container--loading',
    SPINNER: 'loading-spinner'
  }
};

export const CAR = {
  RANDOM_MINIMUM_NUMBER: 0,
  RANDOM_MAXIMUM_NUMBER: 9,
  MOVE_NUMBER: 4,
  INIT_POSITION: 0,
  CAR_MOVE_DISTANCE_PER_PROCESS: 1,
  MININUM_NAME_LENGTH: 1,
  MAXIMUM_NAME_LENGTH: 5
};

export const RACINGGAME = {
  INIT_ROUND: 0,
  ROUND_PER_PROCESS: 1,
  MAX_RACING_COUNT: 20
};

export const TIME = {
  DELAY_RACE_TIME: 1000,
  DELAY_RACE_RESULT: 2000
};

export const COMMENT = {
  RACING_PROGRESS_TITLE: '자동차 경주 진행 상황',
  RESTART: '다시 시작하기'
};
