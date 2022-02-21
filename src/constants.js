const ID = {
  APP: 'app',
  INPUT_FORMS: 'input-forms',
  CAR_NAMES_FORM: 'car-names-form',
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_SUBMIT: 'car-names-submit',
  CAR_COUNTS_INPUT: 'racing-count-input',
  RACING_COUNT_FORM: 'racing-count-form',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_SUBMIT: 'racing-count-submit',
  RESTART_BUTTON: 'restart-button',
  RACING_WINNERS: 'racing-winners',
  RACING_STATUS: 'racing-status',
};

const CLASS = {
  CAR_STATUS: 'car-status',
  CAR_NAME: 'car-name',
};

const MESSAGE = {
  WRONG_NAME_LENGTH: '1~5자의 자동차 이름을 입력해 주세요.',
  DUPLICATE_NAME: '중복된 자동차 이름은 입력이 불가능합니다.',
  NO_CAR: '자동차 이름이 입력되지 않았습니다.',
  WRONG_COUNT: '올바르지 않은 레이싱 횟수입니다',
};

const NAME_LENGTH = {
  MIN: 1,
  MAX: 5,
};

const MIN_RACING_COUNT = 1;

const MAX_RANDOM_NUMBER = 10;

const INTERVAL = {
  LOADING: 1000,
  ALERT: 2000,
};

export {
  ID,
  CLASS,
  MESSAGE,
  NAME_LENGTH,
  MIN_RACING_COUNT,
  MAX_RANDOM_NUMBER,
  INTERVAL,
};
