export const SELECTOR = {
  CAR_NAMES_INPUT: '#car-names-input',
  CAR_NAMES_BUTTON: '#car-names-button',
  RACING_COUNT_CONTAINER: '#racing-count-container',
  RACING_COUNT_INPUT: '#racing-count-input',
  RACING_COUNT_BUTTON: '#racing-count-button',
  RACING_CONTAINER: '#racing-container',
  RACING_STATUS: '#racing-status',
  RESULT_CONTAINER: '#result-container',
  FINAL_WINNER: '#final-winner',
  RESTART_BUTTON: '#restart-button',
  CAR_PLAYER: '.car-player',
  SPINNER: '.spinner',
};

export const CAR_NAME_LENGTH = {
  MAX: 5,
  MIN: 1,
};

export const RACING_MIN_COUNT = 1;

export const MOVE_SCORE = {
  MIN: 0,
  MAX: 9,
  EFFECTIVE: 4,
};

export const DELAY_TIME = {
  RACE: 1000,
  ALERT: 2000,
};

export const ERROR_MESSAGE = {
  NAME_TOO_LONG: `이름은 ${CAR_NAME_LENGTH.MAX}글자 이하로 입력해 주세요.`,
  NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
  COUNT_TOO_SMALL: `${RACING_MIN_COUNT} 이상의 숫자를 입력해주세요.`,
};

export const CELEBRATE_MESSAGE = '🎉 축하합니다!! 🎉';
