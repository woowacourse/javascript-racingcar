// TryCountValidator 디렉터리 내에서만 사용할 것!

export const TRY_COUNT_RANGE = Object.freeze({
  min: 1,
  max: 10,
});

export const ERROR_MESSAGE_INTEGER = '정수만 입력 가능합니다.';
export const ERROR_MESSAGE_TRY_COUNT = `시도 횟수는 ${TRY_COUNT_RANGE.min} ~ ${TRY_COUNT_RANGE.max}만 입력 가능합니다.`;
