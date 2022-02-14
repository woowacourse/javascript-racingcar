const ERROR = Object.freeze({
  CAR_NAME_MULTIPLE_INPUT:
    '자동차 이름을 최소 2개 이상 입력해주세요.\n(자동차 이름은 콤마로 구분합니다.)',
  CAR_NAME_LENGTH_RANGE: '자동차 이름은 1자에서 5자까지 입력할 수 있습니다.',
  CAR_NAME_UNIQUE: '자동차 이름은 중복으로 입력할 수 없습니다.',
  RACE_TIME_ONLY_NUMBER: '시도 횟수는 1 이상의 숫자만 입력할 수 있습니다.',
});

export default ERROR;
