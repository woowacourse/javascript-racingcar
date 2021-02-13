export const CAR_NAME_ERROR_MESSAGE = {
  INVALID_LENGTH: '자동차 이름은 1글자 이상 5글자 이하로 입력해 주세요.',
  DUPLICATED: '자동차 이름은 서로 중복될 수 없습니다.',
  INCLUDE_BLANK: '자동차 이름은 공백을 포함할 수 없습니다.',
  INCOMPLETE_WORD: '완전한 글자로 입력해주세요.',
};

export const TRY_COUNT_ERROR_MESSAGE = {
  NOT_INTEGER: '시도 횟수는 정수로 입력해주세요.',
  NOT_POSITIVE: '시도 횟수는 1이상의 정수로 입력해주세요.',
};

export const NUMBERS = {
  // 게임의 전진하는 조건은 0에서 9 사이에서 random 값을 구한다.
  RANDOM_RANGE: 9,
  // random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
  RUN_POINT: 4,
  // 자동차 이름의 최대 글자는 5글자이다.
  MIN_NAME_LENGTH: 1,
  MAX_NAME_LENGTH: 5,
};
