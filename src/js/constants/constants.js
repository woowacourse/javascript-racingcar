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
  SKID_MARK: '.skid-mark',
  FORWARD_ICON: '.forward-icon',
  RACING_RESULT: '#racing-result',
  WINNERS: '#winners',
  RESTART_BUTTON: '#restart-btn',
};

export const GAME = {
  MAX_CAR_NAME_LENGTH: 5,
  MIN_CAR_NAME_LENGTH: 1,
  MIN_INPUT_COUNT: 1,
};

export const ERR_MESSAGE = {
  NAME_TOO_LONG: `이름은 ${GAME.MAX_CAR_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
  COUNT_TOO_SMALL: `${GAME.MIN_INPUT_COUNT} 이상의 숫자를 입력해주세요.`,
};
