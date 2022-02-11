export const MAX_CAR_NAME_LENGTH = 5;
export const MIN_COUNT = 1;

export const ERROR = {
  EMPTY_INPUT: '1글자 이상의 자동차 이름을 입력해주세요.',
  LONG_LENGTH: `각 자동차의 이름을 ${MAX_CAR_NAME_LENGTH}자 이하로 입력해주세요.`,
  UNDER_MIN_NUMBER: `${MIN_COUNT} 이상의 수를 입력해주세요.`,
  DECIMAL: '자연수를 입력해주세요.',
  DUPLICATE_NAME: '이름을 중복되지 않게 입력해주세요.',
};

export const CAR_NAME_SEPARATOR = ',';

export const WINNER_SEPARATOR = ',';

export const NUMBER_FOR_MOVE = {
  MIN_NUMBER: 0,
  MAX_NUMBER: 9,
  MOVE_CRITERIA: 4,
};
