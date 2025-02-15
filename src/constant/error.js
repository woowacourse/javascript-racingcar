const ERROR = Object.freeze({
  HEADER: '[⛔️WARNING⛔️]',
  MIN_CAR_COUNT:
    '자동차는 최소 2대 이상 필요합니다. 쉼표(,)를 기준으로 구분해주세요.',
  MAX_CAR_COUNT: '자동차는 최대 60대까지 출전할 수 있습니다.',
  NAME_LENGTH: '이름은 1자 이상 5자 이하만 가능합니다.',
  NAME_OVERLAP: '이름은 중복되면 안됩니다.',
  RACE_COUNT: '횟수는 1이상 필요합니다.',
  RACE_COUNT_INTEGER: '횟수는 정수여야 합니다.',
  RACE_COUNT_OVER_MAX_SAFE_INTEGER: '너무 많이 돌면 힘들어요.🥺',
  RACE_COUNT_NUMBER: '횟수는 숫자여야 합니다.',
});

export default ERROR;
