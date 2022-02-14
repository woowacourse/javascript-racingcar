const RACING_COUNT = {
  MAX: 1000,
  MIN: 1,
};

const NAME_LENGTH = {
  MAX: 5,
  MIN: 1,
};

const ID = {
  RACING_GAME_FORM: 'racing-game-form',
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_BUTTON: 'car-names-button',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_BUTTON: 'racing-count-button',
  RESTART_BUTTON: 'restart-button',
  RACING_WINNERS: 'racing-winners',
  RACING_STATUS: 'racing-status',
  USER_STATUS: 'user-status',
  WINNERS: 'winners',
};

const MESSAGE = {
  WRONG_NAME_LENGTH: `최소 ${NAME_LENGTH.MIN}자, 최대 ${NAME_LENGTH.MAX}자의 자동차 이름을 입력해 주세요.`,
  DUPLICATE_NAME: '중복된 자동차 이름은 입력이 불가능합니다.',
  NO_CAR: '자동차 이름이 입력되지 않았습니다.',
  WRONG_COUNT: `올바르지 않은 레이싱 횟수입니다. 레이싱횟수는 최소 ${RACING_COUNT.MIN}회, 최대 ${RACING_COUNT.MAX}회까지 가능합니다.`,
  NOT_DECIMAL_COUNT: '소수는 입력할 수 없습니다.',
};

const MOVE_CONDITION_NUMBER = 4;

export { ID, MESSAGE, RACING_COUNT, NAME_LENGTH, MOVE_CONDITION_NUMBER };
