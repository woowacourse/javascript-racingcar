export const CAR_NAME = {
  MAX_LENGTH: 5,
  MIN_LENGTH: 1,
};

export const RACING_COUNT = {
  MIN_VALUE: 1,
};

export const ERR_MESSAGE = {
  CAR_NAME_TOO_LONG: `이름은 ${CAR_NAME.MAX_LENGTH}글자 이하로 입력해 주세요.`,
  CAR_NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
  COUNT_TOO_SMALL: `${RACING_COUNT.MIN_VALUE} 이상의 숫자를 입력해주세요.`,
};
