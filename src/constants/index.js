export const ID = Object.freeze({
  CAR_NAMES_FORM: 'car_names_form',
  CAR_NAMES_INPUT: 'car_names_input',
  RACING_COUNT_FORM: 'racing_count_form',
  RACING_COUNT_INPUT: 'racing_count_input',
  RACING_CAR_LIST: 'racing_car_list',
});

export const CLASS = Object.freeze({
  RACING_CAR_PROGRESS: 'racing_car_progress',
});

export const ERROR_MESSAGES = Object.freeze({
  EMPTY_CAR_NAME: '자동차 이름은 최소 1개 이상 입력해야 한다.',
  EXCEED_CAR_NAME_LENGTH: '자동차 이름의 길이는 5 이하로만 입력해야 한다.',
  BLANK_CAR_NAME: '자동차 이름은 공백이면 안된다.',
  BLANK_RACING_COUNT: '시도할 횟수는 공백이면 안된다.',
  NOT_NUMBER_TYPE: '시도할 횟수는 숫자 타입을 입력해야 한다.',
  NOT_NATURAL_NUMBER: '시도할 횟수는 자연수를 입력해야 한다.',
});

export const RULES = Object.freeze({
  MAX_CAR_NAME_LENGTH: 5,
  ZERO_CAR_NAME_LENGTH: 0,
  SEPERATOR: ',',
  WAITING_TIME: 1000,
  MOVE_CONDITION_NUMBER: 4,
});
