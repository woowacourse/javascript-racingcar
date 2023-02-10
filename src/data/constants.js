const MESSAGE = Object.freeze({
  CAR_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  TRY_COUNT_INPUT: '시도할 회수는 몇회인가요?\n',
  RESULT_OUTPUT: '실행 결과',
  WINNER_OUTPUT: '가 최종 우승했습니다.',
});

const SYMBOL = Object.freeze({
  ASSIGNMENT: ':',
  MOVE_SYMBOL: '-',
  DIVIDE_WINNER: ', ',
});

const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_LENGTH_ERROR: '[ERROR] 자동차 이름은 5자 이하만 가능합니다.',
  TRY_COUNT_TYPE_ERROR: '[ERROR] 시도 횟수는 숫자로 입력해주세요.',
});

const UTIL_NUMBER = Object.freeze({
  CAR_MOVE_MINIMUM_NUMBER: 4,
  CAR_RANDOM_MAXIMUM_NUMBER: 9,
  CAR_NAME_LENGTH_LIMIT: 5,
});

module.exports = {
  MESSAGE,
  SYMBOL,
  ERROR_MESSAGE,
  UTIL_NUMBER,
};
