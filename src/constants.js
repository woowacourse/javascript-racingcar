const FORMATTING_TYPE = {
  MOVING_LOG: 'movingLog',
  WINNERS: 'winner',
  ERROR: 'error',
};

const MESSAGE = {
  ASK_CAR_NAME:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  ASK_TRY_COUNT: '\n시도할 회수는 몇회인가요?\n',
  RESULT: '\n실행 결과',
};

const FORMAT = {
  ERROR: 'ERROR: ',
  DISTANCE: '-',
  WINNERS: '가 최종 우승했습니다.',
};

const GAME_VALUE = {
  MAX_RANGE: 9,
  MOVING_BOUNDARY_VALUE: 4,
};

module.exports = {
  FORMATTING_TYPE,
  MESSAGE,
  FORMAT,
  GAME_VALUE,
};
