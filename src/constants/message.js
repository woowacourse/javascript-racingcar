export const PROMPT = Object.freeze({
  GET_CAR_NAMES: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  GET_TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR = Object.freeze({
  CAR_NAME: {
    INVALID_LENGTH: '자동차 이름은 1자 이상 5자 이하만 가능합니다.',
    DUPLICATE: '자동차 이름은 중복될 수 없습니다.',
    SPECIAL_SYMBOL: '자동차 이름은 특수기호만으로 구성될 수 없습니다.',
  },
  CAR: {
    INVALID_COUNT: '자동차 수는 1이상 100이하여야 합니다.',
  },
  TRY_COUNT: {
    INVALID_TYPE: '시도 횟수는 숫자여야 합니다.',
    INVALID_RANGE: '시도 횟수는 양의 정수여야 합니다.',
  },
});
