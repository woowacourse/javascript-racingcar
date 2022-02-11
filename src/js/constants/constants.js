export const SELECTORS = {
  CAR_NAMES_INPUT: '#car-names-input',
  CAR_NAMES_BUTTON: '#car-names-button',
  RACING_COUNT_FORM: '#racing-count-form',
};

export const GAME = {
  MAX_CAR_NAME_LENGTH: 5,
  MIN_CAR_NAME_LENGTH: 1,
};

export const ERR_MESSAGE = {
  NAME_TOO_LONG: `이름은 ${GAME.MAX_CAR_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
};
