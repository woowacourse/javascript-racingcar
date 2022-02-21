export const MIN_NAME_LENGTH = 1;
export const MAX_NAME_LENGTH = 5;

export const MIN_TRY_COUNT = 1;
export const MAX_TRY_COUNT = 20;
export const CAN_GO_COUNT = 4;

export const MAX_RANDOM_NUMBER = 10;

export const DEFAULT_DELAY = 1000;
export const ALERT_WINNER_DELAY = DEFAULT_DELAY * 2;

export const ERROR_MESSAGES = {
  INVALID_NAME_LENGTH: `이름은 ${MIN_NAME_LENGTH}~${MAX_NAME_LENGTH}자 사이로 입력해주세요.`,
  DUPLICATED_NAME: '이름은 중복 없이 입력해주세요.',
  INVALID_COUNT: `시도 횟수는 ${MIN_TRY_COUNT}~${MAX_TRY_COUNT}사이의 숫자로 입력해주세요.`,
};

export const WINNER_ALERT_MESSAGE = '의 우승을 축하합니다! 🎉';
