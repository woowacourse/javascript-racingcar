export const NAME_MAX_LENGTH = 5;
export const NAME_MIN_LENGTH = 1;

export const CAN_GO_COUNT = 4;
export const MIN_COUNT = 1;

export const ERROR_MESSAGES = {
  INVALID_NAME_LENGTH: `이름은 ${NAME_MIN_LENGTH}~${NAME_MAX_LENGTH}자 사이로 입력해주세요.`,
  DUPLICATED_NAME: '이름은 중복 없이 입력해주세요.',
  INVALID_COUNT: `시도 횟수는 ${MIN_COUNT} 이상의 숫자로 입력해주세요.`,
};
