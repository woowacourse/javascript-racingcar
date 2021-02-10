export const CAR = {
  MAX_NAME_LENGTH: 5,
  MIN_NAME_LENGTH: 1,
  MIN_RACING_COUNT: 1,
};

export const ERR_MESSAGE = {
  NAME_TOO_LONG: `이름은 ${CAR.MAX_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
  COUNT_TOO_SMALL: `${CAR.MIN_RACING_COUNT} 이상의 숫자를 입력해주세요.`,
};

export const GAME = {
  MIN_SCORE: 0,
  MAX_SCORE: 9,
  THRESHOLD: 4,
};
